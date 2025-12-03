---
title: Building a Static Blog with Astro
description: Why I chose Astro for this blog and what makes it great for content sites.
pubDate: 2024-01-20
tags:
  - astro
  - static-site
  - markdown
draft: false
---

# Building a Static Blog with Astro

Astro is an excellent choice for building static blogs. Here's why:

## Native Markdown Support

Astro has built-in support for markdown and MDX, making it easy to write blog posts without additional configuration.

## Content Collections

The Content Collections API provides type-safe content management with automatic schema validation.

## Performance

Astro generates static HTML by default, resulting in incredibly fast page loads and excellent SEO.

## Getting Started

To create a new blog post, simply add a markdown file to `src/content/blog/` with frontmatter:

```markdown
---
title: My Post Title
description: A brief description
pubDate: 2024-01-20
tags: [tag1, tag2]
---
```

That's it! Astro handles the rest.

