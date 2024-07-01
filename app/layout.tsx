import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import "./globals.css";
import Navigation from "@/components/main/navigation/Navigation";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "NFTs & Crypto",
  description:
    "Cryptocurrency or NFTs, are artworks created on the blockchain with unique encryption codes that can be validated for ownership.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <header>
          <Navigation />
        </header>

        <main>{children}</main>

        <footer className="pb-[1000px]">Footer</footer>
      </body>
    </html>
  );
}
