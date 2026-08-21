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
];

export const getBlogPostBySlug = (slug) => blogPosts.find((post) => post.slug === slug);

export const getBlogPostNavigation = (slug) => {
    const index = blogPosts.findIndex((post) => post.slug === slug);

    return {
        previous: index > 0 ? blogPosts[index - 1] : null,
        next: index >= 0 && index < blogPosts.length - 1 ? blogPosts[index + 1] : null,
    };
};
