import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getWriting } from "@/utils/writingsUtils";
import ReactMarkdown from "react-markdown";

export default async function Writing({ params }: { params: { id: string } }) {
  const post = await getWriting(params.id);

  if (!post) {
    console.log("post not found");
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/writings"
        className="mb-4 inline-block hover:scale-110">
        &larr; See all Writings
      </Link>
      <Image
        src={post.featuredImage}
        alt={post.title}
        width={800}
        height={400}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        {post.title}
      </h1>
      <div className="flex items-center justify-between mb-8">
        <p className="text-gray-600">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          })}
        </p>
        <div className="flex gap-2">
          {post.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-2 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <ReactMarkdown
        components={{
          h1: ({ ...props }) => (
            <h1
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "2em",
                fontWeight: "bold",
                marginBottom: "0.5em",
              }}
              {...props}
            />
          ),
          h2: ({ ...props }) => (
            <h2
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "1.5em",
                fontWeight: "bold",
                marginBottom: "0.5em",
              }}
              {...props}
            />
          ),
          h3: ({ ...props }) => (
            <h3
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "1.17em",
                fontWeight: "bold",
                marginBottom: "0.5em",
              }}
              {...props}
            />
          ),
          p: ({ ...props }) => (
            <p
              style={{
                marginBottom: "1em",
                fontFamily: "var(--font-sans)",
              }}
              {...props}
            />
          ),
          ul: ({ ...props }) => (
            <ul
              style={{
                paddingLeft: "2em",
                marginBottom: "1em",
                listStyleType: "disc",
                fontFamily: "var(--font-sans)",
              }}
              {...props}
            />
          ),
          ol: ({ ...props }) => (
            <ol
              style={{
                paddingLeft: "2em",
                marginBottom: "1em",
                listStyleType: "decimal",
                fontFamily: "var(--font-sans)",
              }}
              {...props}
            />
          ),
          li: ({ ...props }) => (
            <li
              style={{
                marginBottom: "0.5em",
                fontFamily: "var(--font-sans)",
              }}
              {...props}
            />
          ),
          a: ({ ...props }) => (
            <a
              style={{
                color: "blue",
                textDecoration: "underline",
                fontFamily: "var(--font-sans)",
              }}
              {...props}
            />
          ),
          blockquote: ({ ...props }) => (
            <blockquote
              style={{
                borderLeft: "5px solid #ccc",
                paddingLeft: "1em",
                marginLeft: "0",
                marginRight: "0",
                fontFamily: "var(--font-sans)",
              }}
              {...props}
            />
          ),
          code: ({ ...props }) => (
            <pre
              style={{
                backgroundColor: "#f0f0f0",
                padding: "1em",
                borderRadius: "5px",
                overflowX: "auto",
                fontFamily: "var(--font-mono)",
              }}>
              <code {...props} />
            </pre>
          ),
        }}>
        {post.content || ""}
      </ReactMarkdown>
    </div>
  );
}
