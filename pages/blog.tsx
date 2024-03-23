"use client";

import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { Post } from "../src/components/Post";
import { sortByDate } from "../src/utils";

export type PostOverview = {
  slug: string;
  title: string;
  summary?: string;
  date?: string;
  is_published?: boolean;
};

type HomeProps = {
  posts: Array<PostOverview>;
};

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Head>
        <title>Dev Blog</title>
      </Head>

      <div className="flex justify-center">
        <div className="max-w-screen-md my-5 mx-4 md:mx-0">
          {posts.map((post) => (
            <Post key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const fileNames = await fs.readdir(path.join("markdown/posts"));
  const postsProms = fileNames.map(async (fileName) => {
    const slug = fileName.replace(".md", "");
    const markdownWithMeta = await fs.readFile(
      path.join("markdown/posts", fileName),
      "utf-8",
    );
    const content = matter(markdownWithMeta);

    return {
      slug,
      is_published: false,
      date: "9999-12-30",
      ...content.data,
    } as PostOverview;
  });
  const posts = await Promise.all(postsProms);
  const visiblePosts = posts.filter((post) => post?.is_published === true);

  return {
    props: {
      posts: visiblePosts.sort(sortByDate),
    },
  };
};
