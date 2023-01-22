import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import Link from "next/link";
import React from "react";
import Portfolio from "../portfolio";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <nav
        className={`text-white fixed left-0 top-0 h-[64px] flex items-center px-4 w-full bg-black z-50 `}
      >
        <div className="z-50">
          <HiOutlineMenu
            onClick={() => {
              setOpen(!isOpen);
            }}
            size={40}
          />
        </div>

        <Navigation isOpen={isOpen}>
          <ul className="h-screen md:w-[300px] flex flex-col gap-10 p-5 bg-black text-white">
            <ListLink href="/" setOpen={setOpen}>
              Home
            </ListLink>
            <ListLink href="/portfolio" setOpen={setOpen}>
              Portfolio
            </ListLink>
          </ul>
        </Navigation>
      </nav>
    </>
  );
}

function Navigation({ isOpen, children }: any) {
  return (
    <div
      className={`min-h-screen pt-14 absolute max-md:left-0 top-0 w-[300px]  ${
        isOpen
          ? "translate-x-[calc(100vw-300px)]"
          : "translate-x-[100vw] invisible"
      } ease-in-out duration-300`}
    >
      {children}
    </div>
  );
}
function ListLink({ children, href, setOpen }: any) {
  return (
    <Link
      className="flex justify-center font-serif text-4xl font-extrabold hover:text-white"
      href={href}
      onClick={() => setOpen(false)}
    >
      {children}
    </Link>
  );
}
