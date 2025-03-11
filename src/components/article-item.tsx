import Link from "next/link";
import { type Article } from "~/types/types";

export function ArticleItem({ article }: { article: Article }) {
  return (
    <Link
      href={`/articles/${article.name}`}
      className="overflow-hidden rounded-lg border bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
    >
      <div className="p-6">
        <h2 className="mb-2 line-clamp-2 text-xl font-bold">{article.title}</h2>
        <p className="mb-3 line-clamp-3 text-gray-500">{article.excerpt}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {article.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>
        <button className="text-sm font-medium text-black hover:underline">
          Read
        </button>
      </div>
    </Link>
  );
}
