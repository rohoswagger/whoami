"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Doc {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
}

const docsDirectory = path.join(process.cwd(), "_docs");

export async function getDocSlugs(): Promise<string[]> {
  if (!fs.existsSync(docsDirectory)) return [];
  return fs.readdirSync(docsDirectory).filter((f) => f.endsWith(".md"));
}

export async function getAllDocs(): Promise<Doc[]> {
  const slugs = await getDocSlugs();
  const docs = await Promise.all(slugs.map((slug) => getDocBySlug(slug)));
  docs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return docs;
}

export async function getDocBySlug(slug: string): Promise<Doc> {
  const fileName = slug.replace(/\.md$/, "");
  const filePath = path.join(docsDirectory, `${fileName}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: fileName,
    title: data.title || fileName,
    date: data.date || "",
    description: data.description || "",
    content,
  };
}
