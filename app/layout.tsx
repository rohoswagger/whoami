import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

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
    <html lang="en">
      <body className="antialiased bg-white">
        <div className="min-h-screen">
          <Navbar />
          <main className="pt-20">{children}</main>
        </div>
      </body>
    </html>
  );
}