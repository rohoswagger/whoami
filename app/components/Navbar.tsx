"use client";

import { LINKS } from "@/data/links";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <header className="p-4 flex justify-between items-center">
      <div
        className="text-2xl font-bold cursor-pointer"
        onClick={() => router.push("/")}>
        RD
      </div>
      {!isMobile && (
        <div className="absolute left-5 mt-60">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="block mb-5 text-sm">
              <link.icon className="w-6 h-6" />
            </Link>
          ))}
        </div>
      )}
      <nav className="flex items-center">
        {isMobile && (
          <div className="flex mr-4">
            {LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="mr-3">
                <link.icon className="w-6 h-6" />
              </Link>
            ))}
          </div>
        )}
        <Link href="/about" className="mx-3 text-2xl">
          About
        </Link>
        <Link href="/work" className="mx-3 text-2xl">
          Work
        </Link>
        <Link href="/blog" className="mx-3 text-2xl">
          Blog
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
