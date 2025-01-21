"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
const writingsJsonPath = path.join(process.cwd(), "public", "writings");
const filenames = fs
  .readdirSync(writingsJsonPath)
  .filter((file) => file.endsWith(".md"));

export interface Writing {
  id: string;
  title: string;
  date: string;
  featuredImage: string;
  content: string;
}

const posts = filenames.map((filename) => {
  const filePath = path.join(writingsJsonPath, filename);
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);

  return {
    id: filename.replace(".md", ""),
    ...data,
    content,
  } as Writing;
});

const publicWritingsImagePath = path.join(process.cwd(), "public/writings/img");

function getImagePath(imageName: string): string {
  const imagePath = path.join(publicWritingsImagePath, `${imageName}.jpg`);
  if (fs.existsSync(imagePath)) {
    return `/writings/img/${imageName}.jpg`;
  } else {
    return "/writings/img/placeholder.jpg";
  }
}

export async function getSortedPosts(): Promise<Writing[]> {
  try {
    return posts
      .map((post) => ({
        ...post,
        featuredImage: getImagePath(post.id),
      }))
      .sort((a: Writing, b: Writing) => {
        if (a.id === "whoami") return -1;
        if (b.id === "whoami") return 1;
        return a.date > b.date ? 1 : -1;
      });
  } catch (error) {
    console.error("Error reading data:", error);
    return [];
  }
}

export async function getWriting(id: string): Promise<Writing | null> {
  try {
    const postData = posts.find((p) => p.id === id);

    return postData || null;
  } catch (error) {
    console.error(`Error reading ${id}:`, error);
    return null;
  }
}
