"use client";

import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

interface CopyCodeBlockProps {
  children?: React.ReactNode;
}

export default function CopyCodeBlock({ children }: CopyCodeBlockProps) {
  const [copied, setCopied] = useState(false);

  function extractText(node: React.ReactNode): string {
    if (typeof node === "string") return node;
    if (typeof node === "number") return String(node);
    if (Array.isArray(node)) return node.map(extractText).join("");
    if (React.isValidElement(node)) {
      return extractText((node.props as { children?: React.ReactNode }).children);
    }
    return "";
  }

  const handleCopy = () => {
    const text = extractText(children);
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative my-6">
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs md:text-sm">
        {children}
      </pre>
      <button
        onClick={handleCopy}
        aria-label="Copy code"
        className="absolute top-2.5 right-2.5 p-1.5 rounded bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white transition-colors duration-150"
      >
        {copied ? <FiCheck className="w-3.5 h-3.5" /> : <FiCopy className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
}
