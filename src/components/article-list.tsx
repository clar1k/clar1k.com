import { ArticleItem } from "~/components/article-item";
import { type Article } from "~/types/types";

export function ArticleList({ articles }: { articles: Article[] }) {
  if (articles.length === 0) {
    return <span>No articles yet.</span>;
  }
  return (
    <div className="space-y-6">
      {articles.map((a) => (
        <ArticleItem key={a.name} article={a} />
      ))}
    </div>
  );
}
