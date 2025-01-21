import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
// import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Roshan Desai",
  description: "Software Engineer & Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white px-8">
        <div className="min-h-screen relative">
          <Navbar />
          <main className="w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
