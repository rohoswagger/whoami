"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import WritingsSearch from "./WritingsSearch";
import { getSortedPosts, Writing } from "@/utils/writingsUtils";

const Writings: React.FC = () => {
  const [posts, setPosts] = useState<Writing[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Writing[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const allPosts = await getSortedPosts();
        setPosts(allPosts);
        setFilteredPosts(allPosts);
      } catch (err) {
        setError("Failed to load writings. Please try again later.");
      }
    };
    fetchPosts();
  }, []);

  const handleSearch = (query: string) => {
    const lowercaseQuery = query.toLowerCase();
    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowercaseQuery) ||
        post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
    );
    setFilteredPosts(filtered);
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="relative w-full">
      {/* Background Text */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-10 transform -rotate-45 text-gray-100 text-[150px] md:text-[200px] font-bold whitespace-nowrap">
          WRITE
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <WritingsSearch onSearch={handleSearch} />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.length === 0 ? (
            <div className="text-gray-500">Nothin to see here 🙈</div>
          ) : (
            filteredPosts.map((post) => (
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
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
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
