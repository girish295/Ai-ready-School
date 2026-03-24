import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'AI Ready School | Redesign',
  description: 'Bring AI Learning to Your School – The Easy Way',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#fcfcfd] text-[#111827] overflow-x-hidden`} style={{ backgroundImage: 'radial-gradient(at 0% 0%, rgba(235, 46, 118, 0.04) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(140, 82, 255, 0.04) 0px, transparent 50%)' }}>
        {children}
      </body>
    </html>
  );
}

