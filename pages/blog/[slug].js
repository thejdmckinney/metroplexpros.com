import { PortableText } from '@portabletext/react'
import Layout from '../../components/Layout'
import Link from 'next/link'
import { getAllPosts, getPostBySlug, getRecentPosts, urlFor } from '../../lib/sanityClient'
import TrustSignals from '../../components/TrustSignals'

// Portable Text components for custom rendering
const portableTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div style={{ margin: '2rem 0' }}>
          <img
            src={urlFor(value).width(800).url()}
            alt={value.alt || 'Blog image'}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px'
            }}
          />
          {value.alt && (
            <p style={{
              textAlign: 'center',
              color: '#8b949e',
              fontSize: '0.9rem',
              marginTop: '0.5rem',
              fontStyle: 'italic'
            }}>
              {value.alt}
            </p>
          )}
        </div>
      )
    },
    callToAction: ({ value }) => {
      const buttonStyles = {
        primary: {
          background: 'linear-gradient(135deg, #00f0ff, #0080ff)',
          color: '#0d1117',
        },
        secondary: {
          background: '#21262d',
          color: '#c9d1d9',
          border: '1px solid #30363d',
        },
        success: {
          background: 'linear-gradient(135deg, #2ea043, #238636)',
          color: '#ffffff',
        },
      }

      const style = buttonStyles[value.style] || buttonStyles.primary

      return (
        <div style={{ margin: '2rem 0', textAlign: 'center' }}>
          <a
            href={value.url}
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: '700',
              textDecoration: 'none',
              transition: 'transform 0.2s, box-shadow 0.2s',
              ...style,
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 240, 255, 0.3)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {value.text}
          </a>
        </div>
      )
    },
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a
          href={value.href}
          rel={rel}
          style={{
            color: '#00f0ff',
            textDecoration: 'underline'
          }}
        >
          {children}
        </a>
      )
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 style={{
        fontSize: '2.5rem',
        marginTop: '2rem',
        marginBottom: '1rem',
        color: '#c9d1d9',
        fontWeight: '700'
      }}>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 style={{
        fontSize: '2rem',
        marginTop: '2rem',
        marginBottom: '1rem',
        color: '#00f0ff',
        fontWeight: '700'
      }}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 style={{
        fontSize: '1.5rem',
        marginTop: '1.5rem',
        marginBottom: '0.75rem',
        color: '#c9d1d9',
        fontWeight: '600'
      }}>
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 style={{
        fontSize: '1.25rem',
        marginTop: '1.5rem',
        marginBottom: '0.75rem',
        color: '#c9d1d9',
        fontWeight: '600'
      }}>
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote style={{
        borderLeft: '4px solid #00f0ff',
        paddingLeft: '1.5rem',
        marginLeft: 0,
        marginRight: 0,
        marginTop: '1.5rem',
        marginBottom: '1.5rem',
        color: '#8b949e',
        fontStyle: 'italic',
        fontSize: '1.1rem'
      }}>
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p style={{
        fontSize: '1.1rem',
        lineHeight: '1.8',
        color: '#c9d1d9',
        marginBottom: '1.5rem'
      }}>
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul style={{
        marginLeft: '2rem',
        marginBottom: '1.5rem',
        color: '#c9d1d9',
        lineHeight: '1.8'
      }}>
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol style={{
        marginLeft: '2rem',
        marginBottom: '1.5rem',
        color: '#c9d1d9',
        lineHeight: '1.8'
      }}>
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{children}</li>
    ),
    number: ({ children }) => (
      <li style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{children}</li>
    ),
  },
}

export default function BlogPost({ post, recentPosts }) {
  if (!post) {
    return (
      <Layout title="Post Not Found">
        <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
          <h1 style={{ color: '#c9d1d9' }}>Post not found</h1>
          <Link href="/blog" style={{ color: '#00f0ff' }}>
            ← Back to Blog
          </Link>
        </div>
      </Layout>
    )
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  return (
    <Layout
      title={post.seo?.metaTitle || `${post.title} | Metroplex Pros Blog`}
      description={post.seo?.metaDescription || post.excerpt}
      keywords={post.seo?.keywords?.join(', ')}
      openGraph={{
        type: 'article',
        image: post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : undefined,
      }}
    >
      {/* Article Header */}
      <article>
        <header style={{
          background: 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)',
          padding: '4rem 0 2rem',
          borderBottom: '1px solid #30363d'
        }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            {/* Breadcrumb */}
            <div style={{ marginBottom: '2rem' }}>
              <Link href="/blog" style={{
                color: '#00f0ff',
                textDecoration: 'none',
                fontSize: '0.95rem'
              }}>
                ← Back to Blog
              </Link>
            </div>

            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div style={{ marginBottom: '1rem' }}>
                {post.categories.map((cat) => (
                  <span
                    key={cat._id}
                    style={{
                      display: 'inline-block',
                      padding: '0.4rem 1rem',
                      backgroundColor: 'rgba(0, 240, 255, 0.1)',
                      color: '#00f0ff',
                      borderRadius: '4px',
                      fontSize: '0.9rem',
                      marginRight: '0.75rem',
                      fontWeight: '600'
                    }}
                  >
                    {cat.title}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              marginBottom: '1.5rem',
              color: '#c9d1d9',
              fontWeight: '800',
              lineHeight: '1.2'
            }}>
              {post.title}
            </h1>

            {/* Author and Date */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              paddingBottom: '2rem'
            }}>
              {post.author?.image && (
                <img
                  src={urlFor(post.author.image).width(60).height(60).url()}
                  alt={post.author.name}
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    border: '2px solid #00f0ff'
                  }}
                />
              )}
              <div>
                <div style={{
                  color: '#c9d1d9',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  {post.author?.name}
                </div>
                <div style={{
                  color: '#8b949e',
                  fontSize: '0.95rem'
                }}>
                  {formatDate(post.publishedAt)}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.mainImage && (
          <div style={{
            backgroundColor: '#0d1117',
            padding: '2rem 0'
          }}>
            <div className="container" style={{ maxWidth: '900px' }}>
              <img
                src={urlFor(post.mainImage).width(1200).height(675).url()}
                alt={post.mainImage.alt || post.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  border: '1px solid #30363d'
                }}
              />
            </div>
          </div>
        )}

        {/* Article Body */}
        <section style={{
          backgroundColor: '#0d1117',
          padding: '3rem 0'
        }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            <div style={{
              backgroundColor: '#161b22',
              padding: '3rem',
              borderRadius: '12px',
              border: '1px solid #30363d'
            }}>
              <PortableText
                value={post.body}
                components={portableTextComponents}
              />
            </div>

            {/* Author Bio */}
            {post.author?.bio && (
              <div style={{
                marginTop: '3rem',
                padding: '2rem',
                backgroundColor: '#161b22',
                borderRadius: '12px',
                border: '1px solid #30363d',
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'flex-start'
              }}>
                {post.author.image && (
                  <img
                    src={urlFor(post.author.image).width(100).height(100).url()}
                    alt={post.author.name}
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      flexShrink: 0
                    }}
                  />
                )}
                <div>
                  <h3 style={{
                    color: '#00f0ff',
                    fontSize: '1.3rem',
                    marginBottom: '0.5rem'
                  }}>
                    About {post.author.name}
                  </h3>
                  <div style={{ color: '#c9d1d9', lineHeight: '1.6' }}>
                    <PortableText value={post.author.bio} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Recent Posts */}
        {recentPosts && recentPosts.length > 0 && (
          <section style={{
            backgroundColor: '#161b22',
            padding: '4rem 0'
          }}>
            <div className="container">
              <h2 style={{
                fontSize: '2rem',
                marginBottom: '2rem',
                color: '#00f0ff',
                textAlign: 'center'
              }}>
                Recent Posts
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                maxWidth: '1200px',
                margin: '0 auto'
              }}>
                {recentPosts.slice(0, 3).map((recentPost) => (
                  <Link
                    key={recentPost._id}
                    href={`/blog/${recentPost.slug.current}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <div style={{
                      backgroundColor: '#0d1117',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      border: '1px solid #30363d',
                      transition: 'transform 0.3s',
                      cursor: 'pointer'
                    }}>
                      {recentPost.mainImage && (
                        <img
                          src={urlFor(recentPost.mainImage).width(400).height(225).url()}
                          alt={recentPost.title}
                          style={{
                            width: '100%',
                            height: '200px',
                            objectFit: 'cover'
                          }}
                        />
                      )}
                      <div style={{ padding: '1.5rem' }}>
                        <h3 style={{
                          color: '#c9d1d9',
                          fontSize: '1.1rem',
                          marginBottom: '0.5rem'
                        }}>
                          {recentPost.title}
                        </h3>
                        <p style={{
                          color: '#8b949e',
                          fontSize: '0.85rem'
                        }}>
                          {formatDate(recentPost.publishedAt)}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Trust Signals */}
        <section style={{ background: '#0d1117', paddingTop: '3rem', paddingBottom: '3rem' }}>
          <div className="container">
            <TrustSignals variant="compact" />
          </div>
        </section>

        {/* CTA */}
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
              Ready to Get Started?
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#8b949e',
              marginBottom: '2rem'
            }}>
              Contact us today for professional home improvement services
            </p>
            <Link href="/contact" style={{
              display: 'inline-block',
              padding: '1rem 2.5rem',
              backgroundColor: '#00f0ff',
              color: '#0d1117',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              textDecoration: 'none'
            }}>
              Get a Free Quote
            </Link>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  try {
    const posts = await getAllPosts()

    const paths = posts.map((post) => ({
      params: { slug: post.slug.current },
    }))

    return {
      paths,
      fallback: 'blocking',
    }
  } catch (error) {
    console.error('Error fetching posts for static paths:', error)
    // Return empty paths and let fallback handle dynamic requests
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}

export async function getStaticProps({ params }) {
  try {
    const post = await getPostBySlug(params.slug)
    const recentPosts = await getRecentPosts(3)

    if (!post) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        post,
        recentPosts: recentPosts || [],
      },
      revalidate: 60,
    }
  } catch (error) {
    console.error('Error fetching post:', error)
    return {
      notFound: true,
    }
  }
}
