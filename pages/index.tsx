/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Section from "./components/Section";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col gap-16 px-10 mt-[64px]">
        <Hero />
        <Section title="About">
          I'm studying at the{" "}
          <a className="text-yellow-400" href="https://www.spse.cz/">
            SPŠE & VOŠ in Pardubice
          </a>{" "}
          with specialization on <strong>IT</strong>. I enjoy programming
          applications in <strong>Java</strong> and
          <strong> Next.js</strong>. Right now I'm learning to create
          applications in React with Tailwind. After school I would like to
          become a programmer
        </Section>
        <Contact />
      </main>
    </>
  );
}
