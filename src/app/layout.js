import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import localFont from 'next/font/local';

const Gabarito = localFont({ src: '../fonts/Gabarito-Black.ttf' });
import { Poppins } from 'next/font/google'
const poppins = Poppins({
  weight: ['500', '700'],
  style: ['normal'],
  subsets: ['latin'],
});;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Spin to Win!",
  description: "Spin for a chance to win!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
