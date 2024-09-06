"use client";

import { LINKS } from "@/data/links";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const router = useRouter();
  return (
    <header className="p-4 flex justify-between items-center">
      <div
        className="text-2xl font-bold cursor-pointer"
        onClick={() => router.push("/")}>
        RD
      </div>
      <div className="absolute left-5 mt-60">
        {LINKS.map((link) => (
          <Link key={link.href} href={link.href} className="block mb-5">
            <link.icon className="w-6 h-6" />
          </Link>
        ))}
      </div>
      <nav>
        <Link href="/about" className="mx-3 text-2xl">
          About
        </Link>
        {/* <Link href="/blog" className="mx-2 text-2xl">
          Blog
        </Link> */}
        <Link href="/work" className="mx-3 text-2xl">
          Work
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
