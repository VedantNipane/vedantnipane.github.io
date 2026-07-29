import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    type: z.enum(['poem', 'article']),
    tags: z.array(z.string()).optional().default([]),
    excerpt: z.string().optional(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { journal };
