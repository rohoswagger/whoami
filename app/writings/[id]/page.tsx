import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getWritingBySlug } from "@/utils/writingsUtils";
import ReactMarkdown from "react-markdown";

export default async function Writing({ params }: { params: { id: string } }) {
  const post = await getWritingBySlug(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/writings" 
          className="inline-block mb-8 text-gray-600 hover:text-gray-900 transition-colors"
        >
          ← back to writings
        </Link>
        
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {post.title}
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            {post.date}
          </p>

          <ReactMarkdown
            components={{
              h1: ({ ...props }) => (
                <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900" {...props} />
              ),
              h2: ({ ...props }) => (
                <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-900" {...props} />
              ),
              h3: ({ ...props }) => (
                <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900" {...props} />
              ),
              p: ({ ...props }) => (
                <p className="mb-4 text-gray-700 leading-relaxed" {...props} />
              ),
              ul: ({ ...props }) => (
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700" {...props} />
              ),
              ol: ({ ...props }) => (
                <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700" {...props} />
              ),
              li: ({ ...props }) => (
                <li className="text-gray-700" {...props} />
              ),
              a: ({ ...props }) => (
                <a 
                  className="text-blue-600 hover:text-blue-800 underline" 
                  {...props} 
                />
              ),
              blockquote: ({ ...props }) => (
                <blockquote 
                  className="border-l-4 border-gray-300 pl-4 my-6 italic text-gray-600"
                  {...props} 
                />
              ),
              code: ({ ...props }) => (
                <code 
                  className="bg-gray-100 px-2 py-1 rounded text-sm font-mono"
                  {...props} 
                />
              ),
              pre: ({ ...props }) => (
                <pre 
                  className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-6"
                  {...props} 
                />
              ),
            }}
          >
            {post.content || ""}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}