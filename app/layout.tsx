import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar'; // Import the new Client Component

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'blai - Your Crypto AI',
  description: 'AI-powered Crypto Trading Agent',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* Using the new Client Component */}
        <main>{children}</main>
      </body>
    </html>
  );
}
