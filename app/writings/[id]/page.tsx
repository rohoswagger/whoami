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
    <div className="container mr-auto px-4 py-8 md:w-1/2">
      <Link href="/writings" className="mb-4 inline-block hover:scale-110">
        &larr; See all Writings
      </Link>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

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
