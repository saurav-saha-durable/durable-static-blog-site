import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "app/types";

const postsDirectory = path.join(process.cwd(), "posts");

// Utility to get the metadata and slugs for a single post
export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata and content
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || "Unknown Title",
    date: data.date || "",
    author: data.author || "Unkown Author",
    excerpt: data.excerpt || content.slice(0, 150),
    content,
  };
}
