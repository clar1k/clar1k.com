import { ArticleItem } from "~/components/article-item";
import { type Article } from "~/types/types";

export function ArticleList({ articles }: { articles: Article[] }) {
  if (articles.length === 0) {
    return <span>No articles yet.</span>;
  }
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((a) => (
        <ArticleItem key={a.name} article={a} />
      ))}
    </div>
  );
}
