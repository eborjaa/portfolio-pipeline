import type { Metadata } from "next";
import "./globals.css";
import AOSProvider from "@/components/AOSProvider";

export const metadata: Metadata = {
  title: "SDET Portfolio - Emmanuel Borja",
  description: "Software Development Engineer in Test Portfolio showcasing automation testing, CI/CD, and development skills",
  keywords: ["SDET", "Software Development Engineer in Test", "Automation Testing", "CI/CD", "Portfolio"],
  authors: [{ name: "Emmanuel Borja" }],
  creator: "Emmanuel Borja",
  publisher: "Emmanuel Borja",
  robots: "index, follow",
  openGraph: {
    title: "SDET Portfolio - Emmanuel Borja",
    description: "Software Development Engineer in Test Portfolio showcasing automation testing, CI/CD, and development skills",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SDET Portfolio - Emmanuel Borja",
    description: "Software Development Engineer in Test Portfolio showcasing automation testing, CI/CD, and development skills",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/img/favicon.png" type="image/x-icon" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <AOSProvider>
          {children}
        </AOSProvider>
      </body>
    </html>
  );
}
