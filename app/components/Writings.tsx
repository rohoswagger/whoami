import React from "react";
import Link from "next/link";
import { getAllWritings } from "@/utils/writingsUtils";

const Writings: React.FC = async () => {
  const posts = await getAllWritings();

  return (
    <div className="min-h-screen px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
          writings
        </h1>
        
        <div className="space-y-6 md:space-y-8">
          {posts.length === 0 ? (
            <div className="text-center text-gray-500">
              nothing here yet 🙈
            </div>
          ) : (
            posts.map((post) => (
              <Link
                href={`/writings/${post.slug}`}
                key={post.slug}
                className="block group"
              >
                <article className="border-b border-gray-200 pb-6 md:pb-8 hover:bg-gray-50 transition-colors duration-200 rounded-lg p-4 md:p-6 -m-4 md:-m-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 md:mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    {post.date}
                  </p>
                </article>
              </Link>
            ))
          )}
        </div>
        
        <div className="text-center mt-12 md:mt-16">
          <Link 
            href="/" 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Writings;