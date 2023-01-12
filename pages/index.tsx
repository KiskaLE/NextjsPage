import Head from "next/head";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" -z-50 fixed top-0 bg-warp-loop bg-cover bg-center h-screen w-screen"></div>
      <main className="px-10 mt-[64px]">
        <Hero />
        <About />
      </main>
    </>
  );
}
