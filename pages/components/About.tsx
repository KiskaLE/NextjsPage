/* eslint-disable react/no-unescaped-entities */
import More from "./More";
import Transition from "./Transition";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="text-white font-bakbak-one flex flex-col items-center py-5"
      >
        <Transition>
          <h1 className="text-center uppercase font-bakbak-one font-bold text-yellow-400 text-3xl mb-5">
            About
          </h1>
          <p className="text-justify max-w-[500px]">
            I'm studying at the{" "}
            <a className="text-yellow-400" href="https://www.spse.cz/">
              SPŠE & VOŠ in Pardubice
            </a>{" "}
            with specialization on <strong>IT</strong>. I enjoy programming
            applications in <strong>Java</strong> and
            <strong> Next.js</strong>. Right now I'm learning to create
            applications in React with Tailwind. After school I would like to
            become a programmer
          </p>
        </Transition>
      </section>
    </>
  );
}
