import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getWritingBySlug } from "@/utils/writingsUtils";
import ReactMarkdown from "react-markdown";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = await getWritingBySlug(params.id);

  if (!post) {
    return {
      title: "Writing Not Found",
      description: "The requested writing could not be found.",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://rohoswagger.vercel.app";
  const imageUrl = `${baseUrl}${post.image}`;

  return {
    title: `${post.title} | Roshan Desai`,
    description: post.preview || `Read ${post.title} by Roshan Desai`,
    openGraph: {
      title: post.title,
      description: post.preview || `Read ${post.title} by Roshan Desai`,
      type: "article",
      publishedTime: post.date,
      authors: ["Roshan Desai"],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      siteName: "Roshan Desai",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.preview || `Read ${post.title} by Roshan Desai`,
      images: [imageUrl],
      creator: "@rohoswagger",
    },
    alternates: {
      canonical: `${baseUrl}/writings/${post.slug}`,
    },
  };
}

export default async function Writing({ params }: { params: { id: string } }) {
  const post = await getWritingBySlug(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero section with image */}
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${post.image})`,
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Hero content */}
        <div className="relative z-10 h-full flex flex-col justify-end p-4 md:p-8">
          <div className="max-w-3xl mx-auto w-full">
            <Link 
              href="/writings" 
              className="inline-block mb-4 md:mb-6 text-sm md:text-base text-white/80 hover:text-white transition-colors"
            >
              ← back to writings
            </Link>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 text-white leading-tight">
              {post.title}
            </h1>
            <p className="text-white/80 text-base md:text-lg">
              {post.date}
            </p>
          </div>
        </div>
      </div>
      
      {/* Content section */}
      <div className="px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-lg max-w-none">
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
  );
}