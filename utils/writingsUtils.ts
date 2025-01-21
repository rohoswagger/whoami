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
}

const writingsDirectory = path.join(process.cwd(), "_writings");

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

  return {
    slug: slug,
    ...data,
    image: imagePath,
    content,
  } as Writing;
}
