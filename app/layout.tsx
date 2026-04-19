import type { Metadata } from "next";
import { Amiri, Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
})

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Bayan — Learn Arabic Beautifully",
  description: "Master Arabic through immersive lessons, beautiful calligraphy, and a curriculum rooted in the classical tradition.",
  openGraph: {
    title: "Bayan — Learn Arabic Beautifully",
    description: "Master Arabic through immersive lessons, beautiful calligraphy, and a curriculum rooted in the classical tradition.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${amiri.variable} ${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
