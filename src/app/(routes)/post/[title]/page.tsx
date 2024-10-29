import type { Metadata } from "next";
import { getAllPosts } from "app/utils";
import Markdown from "markdown-to-jsx";
import "./styles.css";
import { getPostBySlug } from "./utils";

type Props = {
  params: { title: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = (await params).title;

  return {
    title: `That Blog Site ${title.replaceAll("-", " ")}`,
  };
};

export const generateStaticParams = async () => {
  const posts = getAllPosts();
  return posts.map((post) => ({ title: post.slug }));
};

export default function Post({ params }: Props) {
  const slug = params.title;
  const { title, author, date, content } = getPostBySlug(slug);

  return (
    <main>
      <div className="post">
        <h2>{title}</h2>
        <div className="metadata">
          <h4>{author}</h4>
          {date && (
            <>
              |<h4>{date}</h4>
            </>
          )}
        </div>
        <article>
          <Markdown>{content}</Markdown>
        </article>
      </div>
    </main>
  );
}
