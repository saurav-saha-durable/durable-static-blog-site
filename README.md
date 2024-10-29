# Static Blog Site

This project is a static blog site built with Next.js, allowing you to add new blog posts as Markdown files with frontmatter metadata. Follow the instructions below to add a new blog post and run the site locally.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)

### Setup

1. **Clone the repository**:

```bash
git clone https://github.com/saurav-saha-durable/durable-static-blog-site.git
cd <your-repository-folder>
```

2. **Install dependencies**:

```bash
npm install
```

3. **Run the development server**:

```bash
npm run dev
```

This command will start the development server on http://localhost:3000. Open this link in your browser to view the site locally.

## Adding a New Blog Post

To create a new blog post:

1. **Navigate to the posts folder**:

In the root of your project directory, open the posts folder. Each Markdown file in this folder represents a blog post.

2. **Create a new Markdown file**:

Add a new .md file in the posts folder. The file name will become the post's slug in the URL, so name it accordingly. For example, new-blog-post.md will have the URL /posts/new-blog-post.

3. **Add the required metadata**:

At the top of your new .md file, add the frontmatter metadata, which includes details like title, date, and excerpt. Here's the expected format:

```markdown
---
title: "Your Blog Post Title"
date: "YYYY-MM-DD"
excerpt: "A brief summary of your post that will display on the homepage."
---
```

Replace each placeholder with content for your post. Below the metadata, add the main content of your blog post in Markdown format.

4. **Example Blog Post (Markdown File)**:

```markdown
---
title: "Understanding JavaScript Closures"
date: "2024-10-29"
excerpt: "A deep dive into one of JavaScript's core concepts: closures."
---

### Introduction

JavaScript closures are a powerful feature that allows functions to access variables from an outer function even after that function has finished executing.
```

Save the file in the posts folder. The blog post will appear on the homepage when the site is rebuilt.

## Additional Information

- **Metadata Requirements**: Each blog post Markdown file should include title, date, and excerpt in the frontmatter for proper display.
- **URL Slug**: The file name of each Markdown post determines the URL slug.
- **Markdown Content**: All content below the frontmatter in each .md file will be rendered as HTML.

Enjoy creating this simple static blog site!
