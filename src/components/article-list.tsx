import { ArticleItem } from "~/components/article-item";
import { type Article } from "~/types/types";

export function ArticleList({ articles }: { articles: Article[] }) {
  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-charcoal-800/60 font-light font-inter">
          No articles yet. Check back soon for new content.
        </p>
      </div>
    );
  }
  return (
    <div className="space-y-6">
      {articles.map((a) => (
        <ArticleItem key={a.name} article={a} />
      ))}
    </div>
  );
}
