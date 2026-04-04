import React from "react";
import Link from "next/link";
import { getAllDocs } from "@/utils/docsUtils";

const Docs: React.FC = async () => {
  const docs = await getAllDocs();

  return (
    <div className="min-h-screen px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">
          docs
        </h1>
        <p className="text-center text-gray-500 text-sm md:text-base mb-10 md:mb-14">
          technical notes and references
        </p>

        <div className="space-y-3 md:space-y-4">
          {docs.length === 0 ? (
            <div className="text-center text-gray-500">nothing here yet</div>
          ) : (
            docs.map((doc) => (
              <Link
                href={`/docs/${doc.slug}`}
                key={doc.slug}
                className="block group"
              >
                <article className="border border-gray-200 rounded-lg p-4 md:p-5 hover:border-gray-400 transition-colors duration-200">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h2 className="text-base md:text-lg font-semibold group-hover:text-blue-600 transition-colors">
                        {doc.title}
                      </h2>
                      {doc.description && (
                        <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                          {doc.description}
                        </p>
                      )}
                    </div>
                    {doc.date && (
                      <span className="text-gray-400 text-xs flex-shrink-0 mt-1">
                        {doc.date}
                      </span>
                    )}
                  </div>
                </article>
              </Link>
            ))
          )}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Docs;
