import Head from "next/head";
import styled from "styled-components";

const docsURL =
  "https://docs.google.com/document/d/1evfFAA0_POP0NFCoMil2kOP3pjgVJ1ku2iD3m-teA4k/pub?embedded=true";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>{"Mobile App Portfolio"}</title>
      </Head>

      <Container>
        <Link href={docsURL}>See the full version in Google Docs</Link>
        <Iframe src={docsURL}></Iframe>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px - 2rem);
  margin: 1rem auto;
  max-width: 800px;
`;
const Iframe = styled.iframe`
  height: 100%;
  width: 100%;
  margin-top: 0.5rem;
`;
const Link = styled.a`
  color: #1a73e8;
`;
