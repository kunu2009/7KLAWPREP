import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ProgressProvider } from '@/context/progress-context';

export const metadata: Metadata = {
  title: 'LawPrep Sprint',
  description: 'Your daily sprint to ace the law entrance exam.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ProgressProvider>
          {children}
          <Toaster />
        </ProgressProvider>
      </body>
    </html>
  );
}
