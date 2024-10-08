import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const indieFlower = localFont({
  src: "./fonts/IndieFlower-Regular.ttf",
  variable: "--font-indie-flower",
});
const figtree = localFont({
  src: "./fonts/Figtree.ttf",
  variable: "--font-figtree",
  weight: "200",
});

export const metadata: Metadata = {
  title: "yo!",
  description: "roshan's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${indieFlower.variable} ${figtree.variable} antialiased bg-tan-100`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />

          <main className="flex-grow flex justify-center items-center mx-4 md:mx-40">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
