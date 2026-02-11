import { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link'
import { getAllPosts, getAllCategories, urlFor } from '../../lib/sanityClient'
import TrustSignals from '../../components/TrustSignals'
import NewsletterSignup from '../../components/NewsletterSignup'
import BlogSidebar from '../../components/BlogSidebar'

export default function Blog({ posts, categories }) {
  const [filteredPosts, setFilteredPosts] = useState(posts)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filterByCategory = (categorySlug) => {
    setSelectedCategory(categorySlug)
    if (categorySlug === 'all') {
      setFilteredPosts(posts)
    } else {
      setFilteredPosts(
        posts.filter(post =>
          post.categories?.some(cat => cat.slug.current === categorySlug)
        )
      )
    }
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  return (
    <Layout
      title="Home Improvement Blog - Tips & Guides | Metroplex Pros"
      description="Expert home improvement tips, DIY guides, and professional advice for homeowners in Dallas-Fort Worth. Learn about plumbing, electrical, smart home, and more."
      keywords="home improvement blog, DIY tips, Dallas home services, plumbing tips, electrical guides, smart home advice"
    >
      <style jsx>{`
        @media (max-width: 1024px) {
          .blog-layout {
            flex-direction: column !important;
          }
          .blog-main {
            flex: 1 !important;
          }
          .blog-sidebar {
            flex: 1 !important;
            max-width: 100% !important;
          }
        }
      `}</style>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)',
        padding: '5rem 0 3rem',
        borderBottom: '1px solid #30363d'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              marginBottom: '1.5rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #00f0ff, #0080ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Home Improvement Blog
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: '#8b949e',
              lineHeight: '1.8',
              marginBottom: '2rem'
            }}>
              Expert tips, guides, and insights for your home improvement projects
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section style={{ backgroundColor: '#0d1117', padding: '2rem 0' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <button
              onClick={() => filterByCategory('all')}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                border: selectedCategory === 'all' ? '2px solid #00f0ff' : '1px solid #30363d',
                backgroundColor: selectedCategory === 'all' ? 'rgba(0, 240, 255, 0.1)' : '#161b22',
                color: selectedCategory === 'all' ? '#00f0ff' : '#c9d1d9',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s'
              }}
            >
              All Posts
            </button>
            {categories?.map((category) => (
              <button
                key={category._id}
                onClick={() => filterByCategory(category.slug.current)}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  border: selectedCategory === category.slug.current ? '2px solid #00f0ff' : '1px solid #30363d',
                  backgroundColor: selectedCategory === category.slug.current ? 'rgba(0, 240, 255, 0.1)' : '#161b22',
                  color: selectedCategory === category.slug.current ? '#00f0ff' : '#c9d1d9',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'all 0.3s'
                }}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section style={{ backgroundColor: '#0d1117', padding: '4rem 0' }}>
        <div className="container">
          <div className="blog-layout" style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'flex-start'
          }}>
            {/* Main Content - 70% */}
            <div className="blog-main" style={{ flex: '0 0 70%', minWidth: 0 }}>
              {filteredPosts.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                  <h2 style={{ color: '#c9d1d9', fontSize: '1.5rem' }}>
                    No posts found. Check back soon!
                  </h2>
                </div>
              ) : (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: '2rem'
                }}>
                  {filteredPosts.map((post) => (
                    <article
                      key={post._id}
                      style={{
                        backgroundColor: '#161b22',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        border: '1px solid #30363d',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-8px)'
                        e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 240, 255, 0.2)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    >
                      <Link href={`/blog/${post.slug.current}`} style={{ textDecoration: 'none' }}>
                        {post.mainImage && (
                          <div style={{ position: 'relative', paddingBottom: '56.25%', overflow: 'hidden' }}>
                            <img
                              src={urlFor(post.mainImage).width(800).height(450).url()}
                              alt={post.mainImage.alt || post.title}
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                              }}
                            />
                          </div>
                        )}
                        <div style={{ padding: '1.5rem' }}>
                          {post.categories && post.categories.length > 0 && (
                            <div style={{ marginBottom: '1rem' }}>
                              {post.categories.slice(0, 2).map((cat, index) => (
                                <span
                                  key={cat._id || cat.slug?.current || index}
                                  style={{
                                    display: 'inline-block',
                                    padding: '0.25rem 0.75rem',
                                    backgroundColor: 'rgba(0, 240, 255, 0.1)',
                                    color: '#00f0ff',
                                    borderRadius: '4px',
                                    fontSize: '0.85rem',
                                    marginRight: '0.5rem',
                                    fontWeight: '600'
                                  }}
                                >
                                  {cat.title}
                                </span>
                              ))}
                            </div>
                          )}
                          <h2 style={{
                            fontSize: '1.5rem',
                            marginBottom: '0.75rem',
                            color: '#c9d1d9',
                            fontWeight: '700'
                          }}>
                            {post.title}
                          </h2>
                          {post.excerpt && (
                            <p style={{
                              color: '#8b949e',
                              lineHeight: '1.6',
                              marginBottom: '1rem'
                            }}>
                              {post.excerpt.substring(0, 150)}...
                            </p>
                          )}
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingTop: '1rem',
                            borderTop: '1px solid #30363d'
                          }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                              {post.author?.image && (
                                <img
                                  src={urlFor(post.author.image).width(40).height(40).url()}
                                  alt={post.author.name}
                                  style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                                />
                              )}
                              <div>
                                <div style={{ color: '#c9d1d9', fontSize: '0.9rem', fontWeight: '600' }}>
                                  {post.author?.name}
                                </div>
                                <div style={{ color: '#8b949e', fontSize: '0.85rem' }}>
                                  {formatDate(post.publishedAt)}
                                </div>
                              </div>
                            </div>
                            <span style={{
                              color: '#00f0ff',
                              fontSize: '0.9rem',
                              fontWeight: '600'
                            }}>
                              Read More →
                            </span>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar - 30% */}
            <div className="blog-sidebar" style={{ flex: '0 0 30%', minWidth: 0 }}>
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section style={{ background: '#0d1117', paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container">
          <TrustSignals variant="compact" />
        </div>
      </section>

      {/* Newsletter Section */}
      <section style={{
        backgroundColor: '#0d1117',
        padding: '4rem 0',
        borderTop: '1px solid #30363d'
      }}>
        <div className="container">
          <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '1rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #00f0ff, #0080ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Never Miss a Tip
            </h2>
            <p style={{
              fontSize: '1.15rem',
              color: '#8b949e',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Get our latest home improvement guides, seasonal maintenance tips, and exclusive offers delivered straight to your inbox.
            </p>
            <NewsletterSignup source="blog" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        backgroundColor: '#161b22',
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
            fontWeight: '700',
            color: '#c9d1d9'
          }}>
            Need Professional Help?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#8b949e',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Our expert team is ready to help with all your home improvement needs
          </p>
          <Link href="/contact" style={{
            display: 'inline-block',
            padding: '1rem 2.5rem',
            backgroundColor: '#00f0ff',
            color: '#0d1117',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            textDecoration: 'none',
            transition: 'transform 0.3s'
          }}>
            Get a Free Quote
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const posts = await getAllPosts()
    const categories = await getAllCategories()

    return {
      props: {
        posts: posts || [],
        categories: categories || [],
      },
      revalidate: 60, // Revalidate every 60 seconds
    }
  } catch (error) {
    console.error('Error fetching blog data:', error)
    return {
      props: {
        posts: [],
        categories: [],
      },
      revalidate: 60,
    }
  }
}
