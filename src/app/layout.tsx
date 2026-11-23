import type { Metadata } from "next";
import { Anton, Oswald, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });
const oswald = Oswald({ weight: ["500", "700"], subsets: ["latin", "cyrillic"], variable: "--font-oswald" });
const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "TIGRE Cafe | Bitola",
  description: "Single-origin espresso, homemade drinks, and evening cocktails in an old industrial corner of Bitola.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${oswald.variable} ${inter.variable}`}>
      <body className="antialiased selection:bg-crimson selection:text-sand bg-sand text-espresso overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}