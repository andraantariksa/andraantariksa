import Head from "next/head";
import Image from "next/image";
import { ProjectCategoryLabels } from "../src/projects/Labels";
import { Projects } from "../src/projects/Projects";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>{"Andra's Blog"}</title>
      </Head>

      <main>
        <div className="flex flex-col items-center my-7">
          <ProjectCategoryLabels />
          <Projects />
        </div>
      </main>
    </>
  );
}
