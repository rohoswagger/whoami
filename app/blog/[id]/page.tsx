import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getBlogPost } from "@/utils/blogUtils";
import ReactMarkdown from "react-markdown";

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post = await getBlogPost(params.id);

  if (!post) {
    console.log("post not found");
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/blog"
        className="text-purple-600 hover:text-purple-800 mb-4 inline-block">
        &larr; Back to Blog
      </Link>
      <Image
        src={post.featuredImage}
        alt={post.title}
        width={800}
        height={400}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-400">
        {post.title}
      </h1>
      <div className="flex items-center justify-between mb-8">
        <p className="text-gray-600">{post.date}</p>
        <div className="flex gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{post.content || ""}</ReactMarkdown>
      </div>
    </div>
  );
}
