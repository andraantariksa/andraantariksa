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
        {/* <div>
          <div className="p-4 mt-4">
            <h1 className="text-3xl text-center font-semibold mb-6">
              Working Experience
            </h1>
            <div className="flex justify-center">
              <div className="flex flex-col w-96 text-gray-50">
                <div className="flex flex-row">
                  <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center" />
                    <div className="bg-green-400 w-6 h-6 absolute top-1/2 -mt-3 rounded-full shadow text-center" />
                  </div>
                  <div className="bg-green-400 ml-4 shadow-xl col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto w-full">
                    <h3 className="font-semibold text-lg mb-1">
                        Fullstack Engineer
                    </h3>
                    <h3 className="font-semibold text-lg mb-1">
                      <a href="https://tka.co.id">
                        PT. Teknologi Komersial Asia
                      </a>
                    </h3>
                    <p className="leading-tight text-justify w-full">
                      May 2021 - September 2021
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </main>
    </>
  );
}
