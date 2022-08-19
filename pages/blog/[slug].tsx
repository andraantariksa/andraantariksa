import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";
import { DiscussionEmbed } from "disqus-react";
import Head from "next/head";
import Error from "next/error";

export type PostDetailData = {
  date: string;
  cover_image?: string;
  title: string;
  is_published?: boolean;
};

export type PostDetail = {
  slug: string;
  data: PostDetailData;
  content: string;
};

export default function PostPage({
  data: { title, date, cover_image, is_published = true },
  slug,
  content,
}: PostDetail) {
  if (!is_published) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>{title + " | Andra's Blog"}</title>
      </Head>
      <div className="flex justify-center">
        <div className="max-w-screen-md my-5 mx-4 md:mx-0">
          <div>
            <h1 className="text-4xl">{title}</h1>
            <div className="my-1">Posted on {date}</div>
            {cover_image && <img src={cover_image} alt="" />}
            <div
              className="mt-1"
              dangerouslySetInnerHTML={{ __html: marked(content) }}
            />
          </div>
          <div className="mt-5">
            <DiscussionEmbed
              shortname="blognya-andra"
              config={{
                url: `http://andraaa.my.id/blog/${slug}`,
                identifier: `article-${slug}`,
                title,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data, content } = matter(markdownWithMeta);

  return {
    props: {
      data,
      slug,
      content,
    } as PostDetail,
  };
}
