import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "app/types";

const postsDirectory = path.join(process.cwd(), "posts");

// Utility to get the metadata and slugs for all posts
export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName): Post => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata and content
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "Unkown Title",
      date: data.date || "",
      author: data.author || "Unknown Author",
      excerpt: data.excerpt || content.slice(0, 150),
      content,
    };
  });

  // Sort posts by date, putting posts without a date at the end
  return posts.sort((a, b) => {
    if (!a.date) return 1; // `a` has no date, move to end
    if (!b.date) return -1; // `b` has no date, `a` comes before it
    return new Date(b.date).getTime() - new Date(a.date).getTime(); // Sort by date (newest first)
  });
}
