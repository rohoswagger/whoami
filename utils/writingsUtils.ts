"use server";

import fs from "fs";
import path from "path";

const writingsJsonPath = path.join(process.cwd(), "data/writings.json");
const allPostsData: RawWriting[] = JSON.parse(
  fs.readFileSync(writingsJsonPath, "utf8")
);
const publicWritingsImagePath = path.join(process.cwd(), "public/writings");

interface RawWriting {
  id: string;
  title: string;
  date: string;
  tags: string[];
  featuredImage: string;
}

export interface Writing extends RawWriting {
  content: string;
}

function getImagePath(imageName: string): string {
  const imagePath = path.join(publicWritingsImagePath, `${imageName}.jpg`);
  if (fs.existsSync(imagePath)) {
    return `/writings/${imageName}.jpg`;
  } else {
    console.warn(`Image not found: ${imagePath}`);
    return "/writings/placeholder.jpg";
  }
}

export async function getSortedPosts(): Promise<Writing[]> {
  try {
    const postsWithContent = await Promise.all(
      allPostsData.map(async (post) => {
        const content = await getContent(post.id);
        return {
          ...post,
          content: content || "",
          featuredImage: getImagePath(post.id),
        };
      })
    );

    return postsWithContent.sort((a, b) => {
      if (a.id === "whoami") return -1;
      if (b.id === "whoami") return 1;
      return a.date < b.date ? 1 : -1;
    });
  } catch (error) {
    console.error("Error reading data:", error);
    return [];
  }
}

export async function getWriting(id: string): Promise<Writing | null> {
  try {
    const postData = allPostsData.find((p) => p.id === id);

    if (postData) {
      const content = await getContent(postData.id);
      return {
        ...postData,
        content: content || "",
        featuredImage: getImagePath(postData.id),
      };
    }
    return null;
  } catch (error) {
    console.error(`Error reading ${id}:`, error);
    return null;
  }
}

async function getContent(postId: string): Promise<string | null> {
  try {
    const postsDirectory = path.join(process.cwd(), "data/writings");
    const fullPath = path.join(postsDirectory, `${postId}.md`);
    return fs.readFileSync(fullPath, "utf8");
  } catch (error) {
    console.error(`Error reading data ${postId}:`, error);
    return null;
  }
}
