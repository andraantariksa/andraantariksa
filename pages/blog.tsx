import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import { sortByDate } from "../src/utils";

export type PostOverviewData = {
  date: string;
};

export type PostOverview = {
  slug: string;
  data: PostOverviewData;
};

const Post = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="py-4 px-8 bg-white shadow-lg rounded-lg my-3">
        {post.data.cover_image && <img src={post.data.cover_image} alt="" />}
        <h3 className="text-xl">{post.data.title}</h3>
        <div className="">Posted on {post.data.date}</div>
        <p>{post.data.excerpt}</p>
        <p className="mt-10">Read More</p>
      </div>
    </Link>
  );
};

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Dev Blog</title>
      </Head>

      <div className="flex justify-center">
        <div className="max-w-screen-md my-5 mx-4 md:mx-0">
          {posts
            .filter((post) => post.data?.is_published !== false)
            .map((post, index) => (
              <Post key={index} post={post} />
            ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("markdown/posts"));

  // Get slug and data from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get data
    const markdownWithMeta = fs.readFileSync(
      path.join("markdown/posts", filename),
      "utf-8"
    );

    const { data } = matter(markdownWithMeta);

    return {
      slug,
      data,
    } as PostOverview;
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
