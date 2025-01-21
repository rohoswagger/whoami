"use client";

import { LINKS } from "@/public/data/links";
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
    <header className="p-2 sm:p-4 flex flex-wrap justify-between items-center">
      <nav className="flex items-center flex-grow justify-end">
        <div
          className="text-xl sm:text-2xl font-bold cursor-pointer mr-auto"
          onClick={() => router.push("/")}>
          RD
        </div>
        <div className="flex items-center ml-4 space-x-2 sm:space-x-4">
          <Link href="/work" className="text-sm sm:text-lg">
            Work
          </Link>
          <Link href="/writings" className="text-sm sm:text-lg">
            Writings
          </Link>
        </div>
        {!isMobile && (
          <>
            <div className="fixed top-1/2 transform space-y-4">
              {LINKS.map((link) => (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className="block"
                    target="_blank"
                    rel="noopener noreferrer">
                    <link.icon className="w-6 h-6" />
                  </Link>
                  <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-1 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {link.name}
                  </div>
                </div>
              ))}
            </div>
            <div className="fixed bottom-8 right-24 md:bottom-12 md:right-16 transform rotate-90 origin-right">
              <span className="font-mono text-sm md:text-base tracking-widest">
                &quot;ROSHAN DESAI&quot;
              </span>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
