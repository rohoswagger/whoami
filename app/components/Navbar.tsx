"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div
          className="text-xl font-bold cursor-pointer hover:text-gray-600 transition-colors"
          onClick={() => router.push("/")}>
          roshan
        </div>
        <nav className="flex items-center space-x-8">
          <Link 
            href="/writings" 
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            writings
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;