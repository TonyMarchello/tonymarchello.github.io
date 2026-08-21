import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import './Blog.css';

const BlogLanding = () => {
    const featuredPost = blogPosts[0];
    const remainingPosts = blogPosts.slice(1);
    const postsToRender = remainingPosts.length > 0 ? remainingPosts : [];

    return (
        <div className="blog-page">
            <section className="blog-hero">
                <div className="blog-hero-copy">
                    <p className="blog-kicker">Blog</p>
                    <h1>Writing about projects, design decisions, and what I learn along the way.</h1>
                    <p className="blog-intro">
                        This section is intentionally lightweight so I can add posts quickly while keeping the same visual style as the rest of the portfolio.
                    </p>
                </div>

                {featuredPost ? (
                    <Link to={`/blog/${featuredPost.slug}`} className="featured-post-card">
                        <div className="featured-post-image-wrap">
                            <img src={featuredPost.featuredImage} alt={featuredPost.featuredImageAlt} className="featured-post-image" />
                        </div>
                        <div className="featured-post-copy">
                            <p className="featured-label">Latest post</p>
                            <h2>{featuredPost.title}</h2>
                            <p>{featuredPost.excerpt}</p>
                            <div className="post-meta-row">
                                <span>{featuredPost.publishedAt}</span>
                                <span>{featuredPost.readTime}</span>
                            </div>
                        </div>
                    </Link>
                ) : null}
            </section>

            <section className="blog-list-section">
                <div className="section-heading">
                    <h2>All posts</h2>
                    <p>Each card links to a dedicated page, so the blog can grow without changing the structure.</p>
                </div>

                {postsToRender.length > 0 ? (
                    <div className="blog-grid">
                        {postsToRender.map((post) => (
                            <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-card">
                                <div className="blog-card-image-wrap">
                                    <img src={post.featuredImage} alt={post.featuredImageAlt} className="blog-card-image" />
                                </div>
                                <div className="blog-card-body">
                                    <div className="blog-card-meta">
                                        <span>{post.publishedAt}</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h3>{post.title}</h3>
                                    <p>{post.description}</p>
                                    <div className="blog-tag-row" aria-label={`Tags for ${post.title}`}>
                                        {post.tags.map((tag) => (
                                            <span key={tag} className="blog-tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="blog-empty-state">
                        <p>Add another entry to <code>src/data/blogPosts.js</code> to populate the full post list.</p>
                    </div>
                )}
            </section>
        </div>
    );
};

export default BlogLanding;
