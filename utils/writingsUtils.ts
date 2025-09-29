"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Writing {
  slug: string;
  title: string;
  date: string;
  image: string;
  content: string;
  preview: string;
}

const writingsDirectory = path.join(process.cwd(), "_writings");

function extractFirstSentence(content: string): string {
  // Remove frontmatter if present
  const contentWithoutFrontmatter = content.replace(/^---[\s\S]*?---\n/, '');
  
  // Split by sentences (look for periods, exclamation marks, question marks followed by space and capital letter or end of string)
  const sentences = contentWithoutFrontmatter
    .split(/(?<=[.!?])\s+(?=[A-Z])/)
    .filter(sentence => sentence.trim().length > 0);
  
  if (sentences.length === 0) return '';
  
  // Get the first sentence and clean it up
  let firstSentence = sentences[0].trim();
  
  // Remove markdown formatting
  firstSentence = firstSentence
    .replace(/^#+\s*/, '') // Remove heading markers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italic
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links, keep text
    .replace(/`(.*?)`/g, '$1') // Remove code formatting
    .replace(/^>\s*/, '') // Remove blockquote markers
    .trim();
  
  // Limit to 150 characters for preview
  if (firstSentence.length > 150) {
    firstSentence = firstSentence.substring(0, 147) + '...';
  }
  
  return firstSentence;
}

export async function getWritingSlugs(): Promise<string[]> {
  return fs.readdirSync(writingsDirectory);
}

export async function getAllWritings(): Promise<Writing[]> {
  const slugs = await getWritingSlugs();
  const writing = await Promise.all(
    slugs.map((slug) => getWritingBySlug(slug))
  );

  writing.sort((a, b) => {
    if (a.slug === "whoami") return 1;
    if (b.slug === "whoami") return -1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return writing;
}

export async function getWritingBySlug(slug: string): Promise<Writing> {
  const fileName = slug.replace(/\.md$/, "");
  const filePath = path.join(writingsDirectory, `${fileName}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  let imagePath = `/img/${fileName}.jpg`;
  const preview = extractFirstSentence(content);

  return {
    slug: slug,
    ...data,
    image: imagePath,
    content,
    preview,
  } as Writing;
}
