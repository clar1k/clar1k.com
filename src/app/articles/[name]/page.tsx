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
    <main className="bg-grid flex w-full justify-center bg-[#f8f9fa] py-12 md:py-24 lg:py-32 lg:pt-24">
      <div className="container px-4 md:px-6">
        <article className="mx-auto max-w-3xl rounded-lg border bg-white p-6 shadow-sm md:p-8 lg:p-10">
          <div className="mb-8">
            <div className="mb-4">
              <time className="text-sm text-gray-500">{article.date}</time>
              <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                {article.title}
              </h1>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="prose prose-gray lg:prose-lg max-w-none">
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
