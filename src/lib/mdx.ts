import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { articlesSchema, type Article } from "~/types/types";
import { env } from "~/env";


const articlesDirectory = path.resolve(process.cwd(), "content")

const fsp = fs.promises;

export async function getArticles(): Promise<Article[]> {
  "use cache";

  const fileNames = fs.readdirSync(articlesDirectory);
  const promises = [];
  for (const name of fileNames) {
    const fullPath = path.join(articlesDirectory, name);
    promises.push(fsp.readFile(fullPath, "utf8"));
  }

  const result = await Promise.all(promises);

  const articles = result.map((c) => {
    const frontMatter = matter(c);
    return frontMatter.data;
  }) as Article[];
  const res = articlesSchema.safeParse(articles);
  console.log(res);
  return articles;
}

export async function getArticleBySlug(slug: string): Promise<{
  meta: Article;
}> {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(articlesDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const frontMatter = matter(fileContents);
  const meta = frontMatter.data;
  return {
    meta,
    slug: realSlug,
    content: frontMatter.content,
  };
}
