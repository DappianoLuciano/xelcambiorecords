import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Special Production Agency",
  description: "Creative production agency specializing in special projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="font-sans">
        <Script
          src="https://unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.min.js"
          strategy="beforeInteractive"
        />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
