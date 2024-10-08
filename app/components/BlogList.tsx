"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import BlogSearch from "./BlogSearch";
import { getSortedPosts, BlogPost } from "@/utils/blogUtils";

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const allPosts = await getSortedPosts();
        setPosts(allPosts);
        setFilteredPosts(allPosts);
      } catch (err) {
        setError("Failed to load blog posts. Please try again later.");
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
    <>
      <BlogSearch onSearch={handleSearch} />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <Link
            href={`/blog/${post.id}`}
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
              <h2 className="text-2xl font-bold mb-2 text-purple-600">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-2">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default BlogList;
