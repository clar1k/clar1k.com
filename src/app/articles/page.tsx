import { type Metadata } from "next";
import { ArticleList } from "~/components/article-list";
import { getArticles } from "~/lib/mdx";

export const metadata: Metadata = {
  title: "clar1k ⋅ articles",
};

export default async function ArticlesPage() {
  "use cache";
  const articles = await getArticles();

  return (
    <main className="min-h-screen bg-cream-50 text-charcoal-800 py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-light leading-tight font-lora">
            Articles
          </h1>
          <p className="max-w-prose mx-auto text-xl font-light leading-relaxed text-charcoal-800/80 font-inter">
            Thoughts, tutorials, and insights on web development, design, and
            technology.
          </p>
        </div>
        <ArticleList articles={articles} />
      </div>
    </main>
  );
}
