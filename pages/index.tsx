import Head from "next/head";
import Image from "next/image";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>{"Andra's Blog"}</title>
      </Head>

      <main>
        <div className="flex flex-col items-center my-7">
          <Image
            src="/assets/images/avatar.png"
            width={200}
            height={200}
            className="rounded-full"
          />
          <h2 className="text-4xl mt-1">{"Andra Antariksa Prihadi"}</h2>
          <h3 className="text-2xl mt-1">
            {"Software Engineer - System Engineer"}
          </h3>
          <button className="bg-indigo-900 rounded-xl text-white px-3 py-2 my-3">
            {"Download Resume"}
          </button>
          <p className="mb-2 w-96 text-center">{"You can call me Andra. I'm working as fullstack software developer. On my free time, I'm working on a graphics program and writing tutorials about computer graphics with "}<a className="text-blue-600" href="https://github.com/shaderboi">{"@shaderboi"}</a>{"."}</p>
          <p className="mb-2 w-96 text-center">{"I code in Javascript, Typescript, and Java at work. Outside of work, I primarily code in C++ and Rust."}</p>
          <p className="mb-2 w-96 text-center">{"Feel free to contact me via email at andra.antariksa[at]gmail.com"}</p>
        </div>
      </main>
    </>
  );
}
