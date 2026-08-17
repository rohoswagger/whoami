import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

const figtree = localFont({
  src: "./fonts/Figtree.ttf",
  variable: "--font-figtree",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roshan Desai",
  description: "Builder & Event Organizer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-white">
        <div className="min-h-screen">
          <Navbar />
          <main className="pt-16 md:pt-20">{children}</main>
        </div>
      </body>
    </html>
  );
}
