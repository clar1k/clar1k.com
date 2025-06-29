import { getArticleBySlug } from "~/lib/mdx";
import { serialize } from "next-mdx-remote/serialize";

import { MDX } from "~/app/articles/[name]/mdx";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const content = await getArticleByParam({ name });
  const article = content.meta;

  return (
    <main className="min-h-screen bg-cream-50 text-charcoal-800 py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <article className="rounded-lg border border-charcoal-800/20 bg-cream-100/50 p-8 md:p-12">
          <div className="mb-12">
            <div className="mb-6">
              <time className="text-sm font-inter text-charcoal-800/60 mb-4 block">{article.date}</time>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light font-lora text-charcoal-800 leading-tight">
                {article.title}
              </h1>
            </div>

            <div className="flex flex-wrap gap-2">
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

          <div className="prose prose-charcoal max-w-none font-inter text-charcoal-800 prose-headings:font-lora prose-headings:text-charcoal-800 prose-headings:font-light">
            <MDX content={content} />
          </div>
        </article>
      </div>
    </main>
  );
}

const getArticleByParam = async ({ name }: { name: string }) => {
  "use cache";
  const article = await getArticleBySlug(name);
  const mdxSource = await serialize(article.content);

  return {
    source: mdxSource,
    meta: article.meta,
  };
};
