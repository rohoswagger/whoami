"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { LINKS } from "@/public/data/links";

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        <div
          className="text-lg md:text-xl font-bold cursor-pointer hover:text-gray-600 transition-colors"
          onClick={() => router.push("/")}>
          roshan
        </div>
        <nav className="flex items-center space-x-4 md:space-x-8">
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
          
          {/* Social links - small and subtle */}
          <div className="flex items-center space-x-2 md:space-x-3 ml-2 md:ml-4 pl-2 md:pl-4 border-l border-gray-200">
            {LINKS.map((link) => (
              <a
                key={link.href}
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