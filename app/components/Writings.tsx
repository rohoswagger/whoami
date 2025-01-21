"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getSortedPosts, Writing } from "@/utils/writingsUtils";

const Writings: React.FC = () => {
  const [posts, setPosts] = useState<Writing[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const allPosts = await getSortedPosts();
        setPosts(allPosts);
      } catch (err) {
        setError("Failed to load writings. Please try again later.");
      }
    };
    fetchPosts();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

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
                href={`/writings/${post.id}`}
                key={post.id}
                className="block bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                  priority={false}
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                  {post.date && (
                    <p className="text-gray-600 mb-2">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                      })}
                    </p>
                  )}
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
