"use client";

import Image from "next/image";
import Link from "next/link";
import { LINKS } from "@/public/data/links";

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 site-navbar border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        <Link href="/" className="site-brand text-lg md:text-xl font-bold hover:text-gray-600 transition-colors">
          <Image src="/img/icons/hello.svg" width="24" height="24" alt="" aria-hidden="true" />
          roshan
        </Link>
        <nav className="flex items-center space-x-4 md:space-x-8">
          <Link
            href="/work"
            className="text-sm md:text-base text-gray-700 hover:text-gray-900 transition-colors"
          >
            work
          </Link>
          <Link
            href="/writings"
            className="text-sm md:text-base text-gray-700 hover:text-gray-900 transition-colors"
          >
            writings
          </Link>
          <Link
            href="/content"
            className="text-sm md:text-base text-gray-700 hover:text-gray-900 transition-colors"
          >
            content
          </Link>
          <Link
            href="/docs"
            className="text-sm md:text-base text-gray-700 hover:text-gray-900 transition-colors"
          >
            docs
          </Link>

          {/* Social links - small and subtle */}
          <div className="flex items-center space-x-2 md:space-x-3 ml-2 md:ml-4 pl-2 md:pl-4 border-l border-gray-200">
            {LINKS.map((link) => (
              <a
                key={link.href}
                aria-label={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <link.icon className="w-3 h-3 md:w-4 md:h-4" />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
