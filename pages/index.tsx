import Head from "next/head";
import Image from "next/image";
import profilePicture from "../public/images/profile.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>{"Andra's Blog"}</title>
      </Head>

      <main>
        <div className="flex flex-col items-center my-7">
          <Image
            src={profilePicture}
            alt="Andra Antariksa profile"
            width={200}
            height={200}
            className="rounded-full"
          />
          <h2 className="text-4xl mt-1">{"Andra Antariksa Prihadi"}</h2>
          <h3 className="text-2xl mt-1">
            {"Software Engineer - Mobile Engineer"}
          </h3>
          <a
            className="bg-indigo-900 rounded-xl text-white px-3 py-2 my-3"
            href="https://docs.google.com/document/d/1lKL12m2-8KVEZKE1muPk9CRfACrGJDF1YJFzErMKF9U/edit?usp=sharing"
          >
            {"View My Resume"}
          </a>
          <p className="mb-2 w-96 text-center">
            {"You can call me Andra. I'm working as fullstack web and mobile developer at **Stamps Indonesia**. " +
              " On my free time, I'm working on solving fun problem with my friends in "}
            <a className="text-blue-600" href="https://github.com/gadostudio">
              {"@gadostudio"}
            </a>
            {
              ". I code in Typescript, Python, Kotlin, C++ and Rust."
            }
          </p>
          <p className="mb-2 w-96 text-center">
            {
              "Outside of computer science scope, I love to travelling and exploring city and urban design."
            }
          </p>
          <p className="mt-4 mb-2 w-96 text-center">
            {
              "Feel free to contact me via my contact on the navbar or send me an email at andra.antariksa[at]gmail.com"
            }
          </p>
        </div>
      </main>
    </>
  );
}
