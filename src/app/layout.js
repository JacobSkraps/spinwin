import { Geist, Geist_Mono } from "next/font/google";
import { Gabarito, Poppins } from "next/font/google";
import "./globals.css";
import "./styles/game.css";
import "./styles/main.css";



const gabarito = Gabarito({
  weight: ["700", "900"],
  subsets: ["latin"],
  variable: "--font-gabarito"
})

const poppins = Poppins({
  weight: ['500', '700'],
  style: ['normal'],
  subsets: ['latin']
})


export const metadata = {
  title: "Spin to Win!",
  description: "Spin for a chance to win!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.variable} ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
