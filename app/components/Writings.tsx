import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllWritings } from "@/utils/writingsUtils";

const Writings: React.FC = async () => {
  const posts = await getAllWritings();

  return (
    <div className="relative w-full px-8">
      {/* Background Text */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-10 transform -rotate-45 text-gray-100 text-[150px] md:text-[200px] font-bold whitespace-nowrap">
          WRITE
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.length === 0 ? (
            <div className="text-gray-500">Nothin to see here 🙈</div>
          ) : (
            posts.map((post) => (
              <Link
                href={`/writings/${post.slug}`}
                key={post.slug}
                className="block bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
                <Image
                  src={(() => {
                    try {
                      require(`../../public${post.image}`);
                      return post.image;
                    } catch {
                      return '/img/default.jpg';
                    }
                  })()}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                  priority={false}
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Writings;
