export interface Post {
    slug: string;
    title: string;
    date: string;
    excerpt?: string;
    content?: string;
    [key: string]: unknown; // For additional frontmatter fields
}

export interface BlogPost extends Post {
    content: string; // Content is required for full blog post
}

export interface PostMetadata extends Post {
    excerpt: string; // Excerpt is required for listing
}
