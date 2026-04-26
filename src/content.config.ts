import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const i18nString = z.object({
  fr: z.string(),
  en: z.string(),
  ar: z.string(),
});

const artworks = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/artworks' }),
  schema: z.object({
    title: i18nString,
    year: z.number(),
    medium: z.enum(['painting', 'mosaic', 'stained_glass', 'sculpture', 'drawing', 'collage']),
    dimensions: z.string().optional(),
    series: z.string(),
    image: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const exhibitions = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/exhibitions' }),
  schema: z.object({
    title: i18nString,
    venue: z.string(),
    city: z.string(),
    country: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    type: z.enum(['solo', 'group']),
    current: z.boolean().default(false),
    description: i18nString.optional(),
    image: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    pressLinks: z.array(z.string()).optional(),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/publications' }),
  schema: z.object({
    title: i18nString,
    type: z.enum(['book', 'chapter', 'collection']),
    authors: z.array(z.string()),
    publisher: z.string().optional(),
    year: z.number(),
    isbn: z.string().optional(),
    description: i18nString.optional(),
    image: z.string().optional(),
    award: z.string().optional(),
    featured: z.boolean().default(false),
    buyLink: z.string().optional(),
  }),
});

const press = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/press' }),
  schema: z.object({
    title: i18nString,
    publication: z.string(),
    date: z.string(),
    url: z.string().optional(),
    excerpt: i18nString.optional(),
    type: z.enum(['article', 'video', 'tv']).default('article'),
    image: z.string().optional(),
  }),
});

export const collections = { artworks, exhibitions, publications, press };
