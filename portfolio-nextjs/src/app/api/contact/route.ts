import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// HTML sanitization function to prevent XSS
function sanitizeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

const resend = new Resend(process.env.RESEND_API_KEY);

// Enhanced rate limiting with better IP handling
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

function getClientIP(request: NextRequest): string {
  // More secure IP extraction with validation
  const forwarded = request.headers.get("x-forwarded-for");
  const realIP = request.headers.get("x-real-ip");
  const cfConnectingIP = request.headers.get("cf-connecting-ip");
  
  // Priority order: Cloudflare > Real IP > Forwarded > Fallback
  const ip = cfConnectingIP || realIP || forwarded?.split(',')[0]?.trim() || "127.0.0.1";
  
  // Basic IP validation to prevent spoofing
  const ipRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  
  if (!ipRegex.test(ip)) {
    return "127.0.0.1"; // Fallback for invalid IPs
  }
  
  return ip;
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = parseInt(process.env.RATE_LIMIT_WINDOW_MS || "900000"); // 15 minutes
  const maxRequests = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || "5");

  const userLimit = rateLimitStore.get(ip);

  if (!userLimit || now > userLimit.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (userLimit.count >= maxRequests) {
    return false;
  }

  userLimit.count++;
  return true;
}

// Clean up expired entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of rateLimitStore.entries()) {
    if (now > data.resetTime) {
      rateLimitStore.delete(ip);
    }
  }
}, 300000); // Clean every 5 minutes

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting with enhanced security
    const ip = getClientIP(request);

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, subject, message } = body;

    // Enhanced input validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Trim whitespace and validate
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedSubject = subject.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
      return NextResponse.json(
        { error: "All fields must contain valid content" },
        { status: 400 }
      );
    }

    // Enhanced email validation
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Enhanced length validation with stricter limits
    if (
      trimmedName.length < 2 || trimmedName.length > 50 ||
      trimmedEmail.length < 5 || trimmedEmail.length > 254 ||
      trimmedSubject.length < 3 || trimmedSubject.length > 100 ||
      trimmedMessage.length < 10 || trimmedMessage.length > 1000
    ) {
      return NextResponse.json({ error: "Invalid input length" }, { status: 400 });
    }

    // Check for suspicious patterns
    const suspiciousPatterns = [
      /<script/i, /javascript:/i, /vbscript:/i, /onload/i, /onerror/i,
      /eval\(/i, /expression\(/i, /url\(/i, /@import/i
    ];
    
    const allInputs = [trimmedName, trimmedEmail, trimmedSubject, trimmedMessage];
    for (const input of allInputs) {
      for (const pattern of suspiciousPatterns) {
        if (pattern.test(input)) {
          return NextResponse.json(
            { error: "Invalid input detected" },
            { status: 400 }
          );
        }
      }
    }

    // Sanitize inputs to prevent XSS
    const sanitizedName = sanitizeHtml(trimmedName);
    const sanitizedEmail = sanitizeHtml(trimmedEmail);
    const sanitizedSubject = sanitizeHtml(trimmedSubject);
    const sanitizedMessage = sanitizeHtml(trimmedMessage);

    // Send email using Resend
    const emailData = await resend.emails.send({
      from: process.env.FROM_EMAIL || "noreply@yourdomain.com",
      to: [process.env.TO_EMAIL || "emmanuel_borja@hotmail.com"],
      subject: `Portfolio Contact: ${sanitizedSubject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${sanitizedName}</p>
            <p><strong>Email:</strong> ${sanitizedEmail}</p>
            <p><strong>Subject:</strong> ${sanitizedSubject}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${sanitizedMessage.replace(/\n/g, "<br>")}
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Sent from your portfolio contact form at ${new Date().toLocaleString()}
          </p>
        </div>
      `,
      replyTo: sanitizedEmail,
    });

    // Log successful submission (development only)
    if (process.env.NODE_ENV === 'development') {
      console.log("Contact form submission sent:", {
        name,
        email,
        subject,
        messageId: emailData.data?.id,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      {
        message: "Message sent successfully",
        id: emailData.data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    // Log errors in development only
    if (process.env.NODE_ENV === 'development') {
      console.error("Error processing contact form:", error);
    }
    
    // Handle specific Resend errors
    if (error instanceof Error && error.message.includes("API key")) {
      return NextResponse.json(
        { error: "Email service configuration error" },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}

// Handle preflight requests for CORS
export async function OPTIONS() {
  const origin = process.env.ALLOWED_ORIGIN || 'http://localhost:3000';
  
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400", // Cache preflight for 24 hours
    },
  });
}
