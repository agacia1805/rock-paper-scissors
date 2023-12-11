import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ScoreProvider } from './components/scoreProvider';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rock Paper Scissors Game',
  description: 'App created by Pinehead Coder',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScoreProvider>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </ScoreProvider>
  );
}
