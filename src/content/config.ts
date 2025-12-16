import { defineCollection, z } from "astro:content";

// Define the products collection for Content Collections
const products = defineCollection({
  type: "content",
  schema: z.object({
    // Product name in Ukrainian
    name: z.string(),

    // Price in hryvnias
    price: z.number(),

    // Currency (only UAH supported)
    currency: z.enum(["UAH"]).default("UAH"),

    // Array of image paths (relative to /src/assets/)
    images: z.array(z.string()).min(1),

    // Available colors for the product
    colors: z.array(z.string()),

    // Full product description
    description: z.string(),

    // SEO meta description (max 160 chars for search results)
    metaDescription: z.string().max(160),

    // Sort order (lower numbers appear first)
    order: z.number().default(0),

    // Whether product is active/available for sale
    active: z.boolean().default(true),
  }),
});

export const collections = { products };
