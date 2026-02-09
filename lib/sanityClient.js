import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Sanity client configuration
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'h3o584t2',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Set to false if you want to ensure fresh data
})

// Image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// Helper function to fetch all posts
export async function getAllPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      author->{
        name,
        image
      },
      categories[]->{
        title,
        slug
      }
    }
  `)
}

// Helper function to fetch a single post by slug
export async function getPostBySlug(slug) {
  return client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      body,
      author->{
        name,
        image,
        bio
      },
      categories[]->{
        title,
        slug
      },
      seo
    }
  `,
    { slug }
  )
}

// Helper function to fetch recent posts (for sidebar, related posts, etc.)
export async function getRecentPosts(limit = 5) {
  return client.fetch(
    `
    *[_type == "post"] | order(publishedAt desc)[0...$limit] {
      _id,
      title,
      slug,
      mainImage,
      publishedAt
    }
  `,
    { limit }
  )
}

// Helper function to fetch posts by category
export async function getPostsByCategory(categorySlug) {
  return client.fetch(
    `
    *[_type == "post" && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      author->{
        name,
        image
      }
    }
  `,
    { categorySlug }
  )
}

// Helper function to fetch all categories
export async function getAllCategories() {
  return client.fetch(`
    *[_type == "category"] | order(title asc) {
      _id,
      title,
      slug,
      description
    }
  `)
}
