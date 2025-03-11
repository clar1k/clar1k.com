import { z } from "zod";

export type Article = {
  name: string;
  tags: string[];
  title: string;
  excerpt: string;
  date: string;
};

export const articleSchema = z.object({
  name: z.string(),
  tags: z.array(z.string()),
  title: z.string(),
  excerpt: z.string(),
  date: z.string(),
});

export const articlesSchema = z.array(articleSchema);
