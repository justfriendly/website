import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import './globals.css';

const ubuntu = Ubuntu({weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'just friendly',
  description: 'the friendly humans global community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  )
}
