import { Post } from "app/types";
import Link from "next/link";

import "./styles.css";

export default function PreviewCard({ post }: { post: Post }) {
  const { title, author, date, excerpt } = post;

  return (
    <Link className="link" href={`/post/${post.slug}`}>
      <div className="previewCard">
        <h3>{title}</h3>
        <div className="metadata">
          <h4>{author}</h4>
          {date && (
            <>
              |<h4>{date}</h4>
            </>
          )}
        </div>
        <p>{excerpt}</p>
      </div>
    </Link>
  );
}
