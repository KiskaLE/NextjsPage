import Transition from "./Transition";
import Link from "next/link";
import More from "./More";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <section className="bg-transparent flex flex-col h-[calc(100vh-64px)] items-center justify-center px-10">
        <div className="flex flex-col gap-3 items-start max-w-5xl">
          <Transition>
            <h1 className="max-sm:text-[15vw] text-white text-8xl font-extrabold font-Sofia uppercase">
              Vojtěch <span className="text-yellow-400">Kylar</span>
            </h1>
            <h2 className="font-bold ml-2 text-white text-lg">Student</h2>
            <div className="ml-2 flex gap-3">
              <Link href={"https://github.com/KiskaLE"}>
                <FaGithubSquare size={30} className="text-white" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/vojtech-kylar-b31346230/"}
              >
                <FaLinkedin size={30} className="text-white" />
              </Link>
            </div>
          </Transition>
        </div>
        <More href="#more" />
      </section>
    </>
  );
}
