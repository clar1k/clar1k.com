import Link from "next/link";
import { type Article } from "~/types/types";

export function ArticleItem({ article }: { article: Article }) {
  return (
    <Link
      href={`/articles/${article.name}`}
      className="block w-full rounded-lg border border-charcoal-800/20 bg-cream-100/50 hover:bg-cream-100 hover:border-charcoal-800/40 transition-all duration-200"
    >
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-8">
          <div className="flex-1">
            <h2 className="mb-3 text-2xl md:text-3xl font-light font-lora text-charcoal-800 leading-tight">{article.title}</h2>
            <p className="mb-4 text-lg text-charcoal-800/70 font-inter leading-relaxed">{article.excerpt}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full bg-cream-50 px-3 py-1 text-sm font-medium text-charcoal-800/80 border border-charcoal-800/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex items-center md:flex-col md:items-end md:justify-start">
            <span className="text-sm font-medium text-charcoal-800 hover:text-charcoal-900 font-inter">
              Read article →
            </span>
            <span className="ml-auto md:ml-0 md:mt-2 text-sm text-charcoal-800/60 font-inter">
              {article.date}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
