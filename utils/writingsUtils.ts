"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Writing {
  id: string;
  title: string;
  date: string;
  featuredImage: string;
  content: string;
}

// Cache the posts at the module level
let cachedPosts: Writing[] | null = null;

export async function getSortedPosts(): Promise<Writing[]> {
  try {
    // Return cached posts if available
    if (cachedPosts) {
      return cachedPosts;
    }

    const writingsDirectory = path.join(process.cwd(), "public", "writings");
    const filenames = fs
      .readdirSync(writingsDirectory)
      .filter((file) => file.endsWith(".md"));

    const posts = filenames.map((filename) => {
      const filePath = path.join(writingsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContents);

      return {
        id: filename.replace(".md", ""),
        title: data.title || "",
        date: data.date || "",
        featuredImage: `/writings/img/${filename
          .toLowerCase()
          .replace(".md", "")}.jpg`,
        content,
      } as Writing;
    });

    // Sort posts and cache them
    cachedPosts = posts.sort((a, b) => {
      if (a.id === "whoami") return -1;
      if (b.id === "whoami") return 1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return cachedPosts;
  } catch (error) {
    console.error("Error reading posts:", error);
    return [];
  }
}

export async function getWriting(id: string): Promise<Writing | null> {
  try {
    const posts = await getSortedPosts();
    return posts.find((post) => post.id === id) || null;
  } catch (error) {
    console.error(`Error reading post ${id}:`, error);
    return null;
  }
}
