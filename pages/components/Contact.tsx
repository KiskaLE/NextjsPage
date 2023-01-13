/* eslint-disable react/no-unescaped-entities */
import Transition from "./Transition";
import { BsFillPhoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="text-white font-bakbak-one flex flex-col items-center py-5"
      >
        <Transition>
          <h1 className="text-center uppercase font-bakbak-one font-bold text-yellow-400 text-3xl mb-5">
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
