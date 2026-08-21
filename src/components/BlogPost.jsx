import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getBlogPostBySlug, getBlogPostNavigation } from '../data/blogPosts';
import './Blog.css';

const renderBlock = (block, index) => {
    switch (block.type) {
        case 'heading':
            return <h2 key={`${block.type}-${index}`}>{block.text}</h2>;
        case 'list':
            return (
                <ul key={`${block.type}-${index}`}>
                    {block.items.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            );
        default:
            return <p key={`${block.type}-${index}`}>{block.text}</p>;
    }
};

const BlogPost = () => {
    const { slug } = useParams();
    const post = getBlogPostBySlug(slug);
    const navigation = post ? getBlogPostNavigation(post.slug) : { previous: null, next: null };

    if (!post) {
        return (
            <div className="blog-page blog-post-page">
                <div className="blog-post-shell blog-post-not-found">
                    <p className="blog-kicker">Blog</p>
                    <h1>Post not found</h1>
                    <p>The article you are looking for does not exist yet.</p>
                    <Link to="/blog" className="blog-back-link">
                        Back to all posts
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="blog-page blog-post-page">
            <article className="blog-post-shell">
                <Link to="/blog" className="blog-back-link">
                    Back to all posts
                </Link>

                <header className="blog-post-header">
                    <p className="blog-kicker">Blog post</p>
                    <h1>{post.title}</h1>
                    <p className="blog-post-description">{post.description}</p>

                    <div className="post-meta-row">
                        <span>{post.publishedAt}</span>
                        <span>{post.readTime}</span>
                    </div>

                    <div className="blog-tag-row">
                        {post.tags.map((tag) => (
                            <span key={tag} className="blog-tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                </header>

                <figure className="blog-post-figure">
                    <img src={post.featuredImage} alt={post.featuredImageAlt} className="blog-post-image" />
                </figure>

                <div className="blog-post-content">
                    {post.content.map((block, index) => renderBlock(block, index))}
                </div>

                <nav className="post-nav" aria-label="Blog post navigation">
                    {navigation.previous ? (
                        <Link to={`/blog/${navigation.previous.slug}`} className="post-nav-card">
                            <span className="post-nav-label">Previous</span>
                            <strong>{navigation.previous.title}</strong>
                        </Link>
                    ) : (
                        <span className="post-nav-card post-nav-card-empty" aria-hidden="true" />
                    )}

                    {navigation.next ? (
                        <Link to={`/blog/${navigation.next.slug}`} className="post-nav-card post-nav-card-right">
                            <span className="post-nav-label">Next</span>
                            <strong>{navigation.next.title}</strong>
                        </Link>
                    ) : (
                        <span className="post-nav-card post-nav-card-empty" aria-hidden="true" />
                    )}
                </nav>
            </article>
        </div>
    );
};

export default BlogPost;
