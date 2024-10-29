import PreviewCard from "app/components/PreviewCard";
import { getAllPosts } from "./utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "That Blog Site",
};

export default function Post() {
  const posts = getAllPosts();

  return (
    <main>
      <div className="postsContainer">
        {posts.map((post) => (
          <PreviewCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
