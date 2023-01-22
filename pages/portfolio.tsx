/* eslint-disable @next/next/no-img-element */
import Section from "./components/Section";
import projects from "./data/Projects";
import Image from "next/image";
import Transition from "./components/Transition";
import Link from "next/link";

export default function Portfolio() {
  return (
    <>
      <main className="flex flex-col items-center min-h-screen gap-10 mt-16">
        <Transition>
          <h1 className="text-4xl font-bold text-yellow-400 uppercase">
            portfolio
          </h1>
        </Transition>

        <Projects />
      </main>
    </>
  );
}

function Projects() {
  return (
    <>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {projects.map((project) => {
          return (
            <>
              <section
                id={project._id}
                className="text-white rounded-lg bg-black h-fit max-w-[400px] pb-5 lg:h-full flex flex-col lg:justify-between "
              >
                <img
                  className="border-b-2 border-white border-dotted"
                  src={project.imageSrc}
                  alt="project"
                  width={400}
                />
                <div className="p-5 ">
                  <h2 className="mb-2 text-3xl font-bold text-center text-yellow-400 font-bakbak-one">
                    {project.title}
                  </h2>
                  <p className="text-justify">{project.about}</p>
                  <div className="flex justify-evenly py-5 ">
                    {project.technology.map((item) => {
                      return (
                        <>
                          <p>{item}</p>
                        </>
                      );
                    })}
                  </div>
                </div>
                <div className="flex justify-center">
                  <Link
                    href={project.link}
                    className="px-3 py-1 rounded-lg text-black bg-white font-bakbak-one font-bold"
                  >
                    Code
                  </Link>
                </div>
              </section>
            </>
          );
        })}
      </div>
    </>
  );
}
