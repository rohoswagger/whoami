import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getDocBySlug } from "@/utils/docsUtils";
import ReactMarkdown from "react-markdown";
import { Metadata } from "next";
import CopyCodeBlock from "@/app/components/CopyCodeBlock";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const doc = await getDocBySlug(params.id).catch(() => null);

  if (!doc) {
    return { title: "Doc Not Found" };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://rohoswagger.com";

  return {
    title: `${doc.title} | Roshan Desai`,
    description: doc.description || `${doc.title}: technical reference by Roshan Desai`,
    alternates: {
      canonical: `${baseUrl}/docs/${doc.slug}`,
    },
  };
}

export default async function DocPage({ params }: { params: { id: string } }) {
  const doc = await getDocBySlug(params.id).catch(() => null);

  if (!doc) {
    notFound();
  }

  return (
    <div className="min-h-screen px-4 py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-10 pb-6 border-b border-gray-200">
          <Link
            href="/docs"
            className="inline-block mb-5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            ← back to docs
          </Link>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {doc.title}
          </h1>
          {doc.description && (
            <p className="text-gray-500 text-base md:text-lg">{doc.description}</p>
          )}
          {doc.date && (
            <p className="text-gray-400 text-sm mt-2">{doc.date}</p>
          )}
        </div>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ ...props }) => (
                <h1 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-gray-900" {...props} />
              ),
              h2: ({ ...props }) => (
                <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3 text-gray-900 border-b border-gray-100 pb-2" {...props} />
              ),
              h3: ({ ...props }) => (
                <h3 className="text-lg md:text-xl font-semibold mt-6 mb-2 text-gray-900" {...props} />
              ),
              p: ({ ...props }) => (
                <p className="mb-4 text-sm md:text-base text-gray-700 leading-relaxed" {...props} />
              ),
              ul: ({ ...props }) => (
                <ul className="list-disc pl-5 md:pl-6 mb-4 space-y-1 text-sm md:text-base text-gray-700" {...props} />
              ),
              ol: ({ ...props }) => (
                <ol className="list-decimal pl-5 md:pl-6 mb-4 space-y-1 text-sm md:text-base text-gray-700" {...props} />
              ),
              li: ({ ...props }) => (
                <li className="text-sm md:text-base text-gray-700" {...props} />
              ),
              a: ({ ...props }) => (
                <a className="text-blue-600 hover:text-blue-800 underline break-words" {...props} />
              ),
              blockquote: ({ ...props }) => (
                <blockquote
                  className="border-l-4 border-blue-200 pl-4 my-4 italic text-sm md:text-base text-gray-600 bg-blue-50 py-2 rounded-r"
                  {...props}
                />
              ),
              code: ({ ...props }) => (
                <code
                  className="bg-gray-100 px-1.5 py-0.5 rounded text-xs md:text-sm font-mono text-gray-800 break-words"
                  {...props}
                />
              ),
              pre: ({ children }) => (
                <CopyCodeBlock>{children}</CopyCodeBlock>
              ),
              table: ({ ...props }) => (
                <div className="overflow-x-auto my-6">
                  <table className="min-w-full border border-gray-200 text-sm" {...props} />
                </div>
              ),
              th: ({ ...props }) => (
                <th className="bg-gray-50 border border-gray-200 px-3 py-2 text-left font-semibold text-gray-700" {...props} />
              ),
              td: ({ ...props }) => (
                <td className="border border-gray-200 px-3 py-2 text-gray-700" {...props} />
              ),
            }}
          >
            {doc.content || ""}
          </ReactMarkdown>
        </article>

        <div className="text-center mt-14 pt-8 border-t border-gray-100">
          <Link href="/docs" className="text-gray-600 hover:text-gray-900 transition-colors">
            ← back to docs
          </Link>
        </div>
      </div>
    </div>
  );
}
