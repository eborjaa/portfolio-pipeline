# Email Contact Form Setup

## Industry Standard Email Implementation

This portfolio now includes a professional email contact form using modern industry standards.

### Features Implemented

✅ **Email Service Integration** - Using Resend (modern, developer-friendly)
✅ **Rate Limiting** - Prevents spam (5 requests per 15 minutes per IP)
✅ **Input Validation** - Client and server-side validation
✅ **Security Measures** - Input sanitization, length limits
✅ **Error Handling** - Comprehensive error handling
✅ **Professional Email Templates** - HTML formatted emails
✅ **Reply-To Support** - Direct replies to sender

### Setup Instructions

1. **Get Resend API Key**
   - Sign up at [resend.com](https://resend.com)
   - Create an API key
   - Verify your domain (or use their test domain)

2. **Environment Variables**
   Create a `.env.local` file in your project root:
   ```bash
   RESEND_API_KEY=re_your_api_key_here
   FROM_EMAIL=noreply@yourdomain.com
   TO_EMAIL=youremail@yourdomain.com
   
   # Optional: Rate limiting settings
   RATE_LIMIT_MAX_REQUESTS=5
   RATE_LIMIT_WINDOW_MS=900000
   ```

3. **Domain Setup** (Production)
   - Add your domain to Resend
   - Configure DNS records (SPF, DKIM, DMARC)
   - Update FROM_EMAIL to use your domain

### Alternative Email Services

If you prefer other services, here are industry-standard alternatives:

#### SendGrid
```bash
npm install @sendgrid/mail
```

#### AWS SES
```bash
npm install @aws-sdk/client-ses
```

#### Nodemailer (SMTP)
```bash
npm install nodemailer
```

### Security Features

- **Rate Limiting**: Prevents spam attacks
- **Input Validation**: Validates email format and length limits
- **XSS Protection**: Sanitizes user input
- **CSRF Protection**: Built into Next.js API routes
- **Error Handling**: Doesn't expose sensitive information

### 🔒 Security Best Practices

**NEVER commit API keys to your repository!**

#### For Vercel Deployment:
1. **Vercel Dashboard**: Go to Settings → Environment Variables
2. **Add variables**:
   - `RESEND_API_KEY` = your actual API key
   - `FROM_EMAIL` = your domain email
   - `TO_EMAIL` = your receiving email
3. **Redeploy** your project

#### For Local Development:
Create `.env.local` (already in .gitignore):
```bash
RESEND_API_KEY=re_your_actual_api_key_here
FROM_EMAIL=noreply@yourdomain.com
TO_EMAIL=youremail@yourdomain.com
```

### Testing

1. **Development**: Use Resend's test domain
2. **Production**: Verify your domain with Resend
3. **Rate Limiting**: Test with multiple rapid submissions

### Monitoring

- Check Resend dashboard for delivery status
- Monitor API logs for errors
- Set up alerts for failed deliveries

### Next Steps

1. Set up your Resend account
2. Add environment variables
3. Test the form
4. Deploy to production
5. Monitor email delivery

The form is now production-ready with industry-standard security and reliability features!
