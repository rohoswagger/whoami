"use server";

import fs from "fs";
import path from "path";

const blogJsonPath = path.join(process.cwd(), "data/blog.json");
const allPostsData: RawBlogPost[] = JSON.parse(
  fs.readFileSync(blogJsonPath, "utf8")
);
const publicBlogImagePath = path.join(process.cwd(), "public/blog");

interface RawBlogPost {
  id: string;
  title: string;
  date: string;
  tags: string[];
  featuredImage: string;
}

export interface BlogPost extends RawBlogPost {
  content: string;
}

function getImagePath(imageName: string): string {
  const imagePath = path.join(publicBlogImagePath, imageName);
  if (fs.existsSync(imagePath)) {
    return `/blog/${imageName}`;
  } else {
    console.warn(`Image not found: ${imagePath}`);
    return "/blog/placeholder.jpg";
  }
}

export async function getSortedPosts(): Promise<BlogPost[]> {
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

    return postsWithContent.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
}

export async function getBlogPost(id: string): Promise<BlogPost | null> {
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
    console.error(`Error reading blog post ${id}:`, error);
    return null;
  }
}

async function getContent(postId: string): Promise<string | null> {
  try {
    const postsDirectory = path.join(process.cwd(), "data/blog");
    const fullPath = path.join(postsDirectory, `${postId}.md`);
    return fs.readFileSync(fullPath, "utf8");
  } catch (error) {
    console.error(`Error reading blog post ${postId}:`, error);
    return null;
  }
}
