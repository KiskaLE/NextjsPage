/* eslint-disable react/no-unescaped-entities */
import Transition from "./Transition";
import { BsFillPhoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="flex flex-col items-center min-h-screen py-5 text-white font-bakbak-one"
      >
        <Transition>
          <h1 className="mb-5 text-3xl font-bold text-center text-yellow-400 uppercase font-bakbak-one">
            Contact
          </h1>
          <ul className="grid gap-2">
            <li className="flex justify-center gap-1">
              <AiOutlineMail className="text-blue" size={30} />{" "}
              <p>vojtakylar@seznam.cz</p>
            </li>
          </ul>
        </Transition>
      </section>
    </>
  );
}
