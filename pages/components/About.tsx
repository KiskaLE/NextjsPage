/* eslint-disable react/no-unescaped-entities */
import More from "./More";
import Transition from "./Transition";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="flex flex-col items-center gap-5 py-5 text-white font-bakbak-one"
      >
        <Transition>
          <h2 className="mb-5 text-3xl font-bold text-center text-yellow-400 uppercase font-bakbak-one">
            About
          </h2>
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
