import type {Metadata} from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from "@/components/ui/toaster";
import { CustomCursor } from '@/components/cursor';
import './globals.css';

export const metadata: Metadata = {
  title: 'Java Ace Portfolio | Ignacio Gallardo Sánchez',
  description: 'Portfolio de Ignacio Gallardo Sánchez, Desarrollador Java Certificado. Creando soluciones eficientes y escalables.',
  keywords: ['Java Developer', 'Spring Boot', 'Microservicios', 'Portfolio', 'Desarrollador Java', 'Oracle Certified'],
  authors: [{ name: 'Ignacio Gallardo Sánchez' }],
  creator: 'Ignacio Gallardo Sánchez',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://ignaciogallardo.dev',
    title: 'Java Ace Portfolio | Ignacio Gallardo Sánchez',
    description: 'Portfolio de Ignacio Gallardo Sánchez, Desarrollador Java Certificado. Creando soluciones eficientes y escalables.',
    siteName: 'Java Ace Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Java Ace Portfolio | Ignacio Gallardo Sánchez',
    description: 'Portfolio de Ignacio Gallardo Sánchez, Desarrollador Java Certificado.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="font-body bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary cursor-none">
        <CustomCursor />
        
        <Header />
        <main className="relative">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
