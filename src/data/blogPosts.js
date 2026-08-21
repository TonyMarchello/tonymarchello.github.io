export const blogPosts = [
    {
        slug: 'welcome-to-the-blog',
        title: 'Welcome to the blog',
        description: 'A place for portfolio updates, technical notes, and the occasional behind-the-scenes project recap.',
        publishedAt: '2026-07-13',
        readTime: '3 min read',
        tags: ['Portfolio', 'Updates'],
        featuredImage: '/imgs/ByTree2.jpg',
        featuredImageAlt: 'Tony standing by a tree',
        excerpt:
            'This blog will serve as a lightweight journal for project updates, lessons learned, and small technical writeups.',
        content: [
            {
                type: 'paragraph',
                text: 'I wanted a blog that felt like a natural extension of my portfolio instead of a separate product bolted on later. The goal is to keep it simple to maintain, quick to expand, and easy to read on any device.',
            },
            {
                type: 'heading',
                text: 'What I plan to share',
            },
            {
                type: 'list',
                items: [
                    'Project updates and lessons learned while building this site and other apps.',
                    'Short technical notes about tools, frameworks, and workflows I use often.',
                    'Occasional reflections on design decisions, engineering tradeoffs, and career growth.',
                ],
            },
            {
                type: 'paragraph',
                text: 'The important part is that new posts should be easy to add without touching the router or introducing a heavy CMS. A single JavaScript data file keeps everything approachable while still supporting multiple posts and individual pages.',
            },
        ],
    },
    {
        slug: 'building-a-portfolio-that-stays-maintainable',
        title: 'Building a portfolio that stays maintainable',
        description: 'A look at why small content structures and reusable components matter for long-term upkeep.',
        publishedAt: '2026-07-19',
        readTime: '4 min read',
        tags: ['React', 'Maintenance'],
        featuredImage: '/imgs/RiverBack3.jpg',
        featuredImageAlt: 'Tony standing near a river',
        excerpt:
            'A portfolio should be easy to update after the first launch, not something you have to rebuild to publish a new post.',
        content: [
            {
                type: 'paragraph',
                text: 'Portfolios often start as one-off pages, but they become much more useful when the content model is designed up front. In this site, the blog entries live in a single JavaScript file so I can edit titles, dates, excerpts, and body content without hunting through multiple components.',
            },
            {
                type: 'heading',
                text: 'Why this approach works well here',
            },
            {
                type: 'list',
                items: [
                    'It keeps the blog content version-controlled with the rest of the site.',
                    'It avoids unnecessary dependencies for markdown parsing or a CMS.',
                    'It makes future blog templates straightforward if I want to add categories, featured posts, or an archive view.',
                ],
            },
            {
                type: 'paragraph',
                text: 'The same pattern also keeps the individual post page clean. The route just looks up a slug, renders the right content, and handles the edge case where a post does not exist.',
            },
        ],
    },
    {
        slug: 'notes-from-bringing-the-blog-online',
        title: 'Notes from bringing the blog online',
        description: 'A short checklist of the implementation details that keep the blog responsive and easy to browse.',
        publishedAt: '2026-07-26',
        readTime: '3 min read',
        tags: ['Design', 'Responsive'],
        featuredImage: '/imgs/ByTree2.jpg',
        featuredImageAlt: 'Tony portrait by a tree',
        excerpt:
            'The blog is built to match the rest of the portfolio while still feeling like its own section.',
        content: [
            {
                type: 'paragraph',
                text: 'The final design goal was not to invent a brand-new visual language. Instead, I wanted the blog to share the same strong top navigation, dark framing, and bold gradients that already define the site.',
            },
            {
                type: 'heading',
                text: 'What made the difference',
            },
            {
                type: 'list',
                items: [
                    'A card-based landing page for scanability on desktop and mobile.',
                    'Route-based post pages for clean linking and better navigation.',
                    'A small metadata layer that can be expanded later with tags or reading time.',
                ],
            },
            {
                type: 'paragraph',
                text: 'If I want to grow this later, the next logical step would be adding richer post blocks or moving the content file into markdown. For now, this keeps the workflow lightweight and fast.',
            },
        ],
    },
];

export const getBlogPostBySlug = (slug) => blogPosts.find((post) => post.slug === slug);

export const getBlogPostNavigation = (slug) => {
    const index = blogPosts.findIndex((post) => post.slug === slug);

    return {
        previous: index > 0 ? blogPosts[index - 1] : null,
        next: index >= 0 && index < blogPosts.length - 1 ? blogPosts[index + 1] : null,
    };
};
