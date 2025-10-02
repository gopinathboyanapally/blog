import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Vercel Academy Foundation - Web',
  description: 'VAF Web',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container mx-auto px-4 py-8">
        {children}
      </body>
    </html>
  );
}
