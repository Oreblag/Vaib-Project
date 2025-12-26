import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner"
import AOSProvider from '@/components/AOSProvider';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Vaib Project Limited | Quality Construction Solutions',
    template: '%s | Vaib Project Limited'
  },
  description: 'A trusted construction and engineering company providing excellence-driven building solutions for commercial, residential, and industrial developments.',
  keywords: 'construction company, building contractors, engineering services, commercial construction, residential building, construction management',
  authors: [{ name: 'Vaib Project Limited' }],
  creator: 'Vaib Project Limited',
  publisher: 'Vaib Project Limited',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
        <meta name="apple-mobile-web-app-title" content="Vaib Project Limited" />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <AOSProvider />
        <Header />
        <main>
          <ClientBody>{children}</ClientBody>
        </main>
        <Toaster 
          position="top-center"
          expand={false}
          richColors
          closeButton
          duration={4000}
        />
        <Footer />
      </body>
    </html>
  );
}