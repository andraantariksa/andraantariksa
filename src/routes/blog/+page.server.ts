import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import matter from "gray-matter";
import type { PostMetadata } from "$lib/types";

export const prerender = true;

export async function load(): Promise<{ posts: PostMetadata[] }> {
    const postsPath = join(process.cwd(), "markdown", "posts");
    const files = await readdir(postsPath);

    const posts = await Promise.all(
        files
            .filter((file): file is string => file.endsWith(".md"))
            .map(async (file): Promise<PostMetadata> => {
                const content = await readFile(join(postsPath, file), "utf-8");
                const { data, content: fileContent } = matter(content);

                return {
                    slug: file.replace(".md", ""),
                    title: data.title,
                    date: data.date,
                    excerpt: data.excerpt || fileContent.slice(0, 200) + "...",
                    ...data,
                };
            }),
    );

    // Sort posts by date in descending order (newest first)
    return {
        posts: posts.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        ),
    };
}
