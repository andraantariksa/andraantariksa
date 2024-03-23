import Link from "next/link";
import styled from "styled-components";
import { PostOverview } from "../../pages/blog";

type PostProps = {
  post: PostOverview;
};
export const Post = ({ post }: PostProps) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="py-4 px-8 bg-white shadow-lg rounded-lg my-3">
        <TitleText>{post.title}</TitleText>
        {post.summary && <p>{post.summary}</p>}
        <DateText>{post.date}</DateText>
      </div>
    </Link>
  );
};
const DateText = styled.p`
  font-size: 0.75rem;
`;
const TitleText = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;
