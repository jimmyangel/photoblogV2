import { defineCollection, z } from 'astro:content'

import { glob } from 'astro/loaders'

const posts = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.coerce.date(),
        thumbnail: image(),
        photos: z.array(z.object({
            photourl: image(),
            photocaption: z.string()
        }))
    })
})

export const collections = { posts }