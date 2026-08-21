# tonys_website
My personal website to showcase some work I've done over the years.

## Blog Maintenance

Blog posts are stored in `src/data/blogPosts.js`.

To add a post, add another object to the `blogPosts` array. Each post should include:

- `slug`
- `title`
- `description`
- `publishedAt`
- `readTime`
- `tags`
- `featuredImage`
- `featuredImageAlt`
- `excerpt`
- `content`

The `content` array supports `paragraph`, `heading`, and `list` blocks. The post slug becomes the URL at `/blog/<slug>`.
