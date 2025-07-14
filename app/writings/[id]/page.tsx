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
    <div className="min-h-screen px-4 py-8 md:py-12 relative">
      {/* Background image with overlay */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${post.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.03
        }}
      />
      
      {/* Content overlay */}
      <div className="relative z-10 bg-white/95 backdrop-blur-sm rounded-lg shadow-sm">
      <div className="max-w-3xl mx-auto">
        <div className="p-4 md:p-8">
        <Link 
          href="/writings" 
          className="inline-block mb-6 md:mb-8 text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors"
        >
          ← back to writings
        </Link>
        
        <article className="prose prose-lg max-w-none">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-gray-900 leading-tight">
            {post.title}
          </h1>
          <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">
            {post.date}
          </p>

          <ReactMarkdown
            components={{
              h1: ({ ...props }) => (
                <h1 className="text-2xl md:text-3xl font-bold mt-6 md:mt-8 mb-3 md:mb-4 text-gray-900" {...props} />
              ),
              h2: ({ ...props }) => (
                <h2 className="text-xl md:text-2xl font-semibold mt-5 md:mt-6 mb-2 md:mb-3 text-gray-900" {...props} />
              ),
              h3: ({ ...props }) => (
                <h3 className="text-lg md:text-xl font-semibold mt-4 mb-2 text-gray-900" {...props} />
              ),
              p: ({ ...props }) => (
                <p className="mb-3 md:mb-4 text-sm md:text-base text-gray-700 leading-relaxed" {...props} />
              ),
              ul: ({ ...props }) => (
                <ul className="list-disc pl-5 md:pl-6 mb-3 md:mb-4 space-y-1 md:space-y-2 text-sm md:text-base text-gray-700" {...props} />
              ),
              ol: ({ ...props }) => (
                <ol className="list-decimal pl-5 md:pl-6 mb-3 md:mb-4 space-y-1 md:space-y-2 text-sm md:text-base text-gray-700" {...props} />
              ),
              li: ({ ...props }) => (
                <li className="text-sm md:text-base text-gray-700" {...props} />
              ),
              a: ({ ...props }) => (
                <a 
                  className="text-blue-600 hover:text-blue-800 underline break-words" 
                  {...props} 
                />
              ),
              blockquote: ({ ...props }) => (
                <blockquote 
                  className="border-l-4 border-gray-300 pl-3 md:pl-4 my-4 md:my-6 italic text-sm md:text-base text-gray-600"
                  {...props} 
                />
              ),
              code: ({ ...props }) => (
                <code 
                  className="bg-gray-100 px-1.5 md:px-2 py-0.5 md:py-1 rounded text-xs md:text-sm font-mono break-words"
                  {...props} 
                />
              ),
              pre: ({ ...props }) => (
                <pre 
                  className="bg-gray-100 p-3 md:p-4 rounded-lg overflow-x-auto my-4 md:my-6 text-xs md:text-sm"
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
      </div>
    </div>
  );
}