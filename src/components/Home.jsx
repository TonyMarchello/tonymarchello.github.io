// Created by Anthony (Tony) Marchello

import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import './Home.css';

const Home = () => {
    const latestPost = blogPosts[0];

    return (
        <div className="home-container">
            <div className="home-content-wrapper">
                <div className="home-image-column">
                    <img
                        src="/imgs/ByTree2.jpg"
                        alt="Tony by tree"
                    />
                </div>
                <div className="home-text-column">
                    <h1>Hi, my name is Tony.</h1>
                    <p>
                        I’m a software engineer with data science experience. Feel free to explore my site!
                    </p>

                    {latestPost ? (
                        <div className="home-blog-preview">
                            <span className="home-blog-preview-heading">Latest from the blog</span>
                            <Link to={`/blog/${latestPost.slug}`} className="home-blog-preview-card">
                                <img src={latestPost.featuredImage} alt={latestPost.featuredImageAlt} />
                                <div>
                                    <h2>{latestPost.title}</h2>
                                    <p>{latestPost.excerpt}</p>
                                </div>
                            </Link>
                            <Link to="/blog" className="home-blog-link">
                                View all posts
                            </Link>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Home;
