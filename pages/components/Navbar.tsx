import { Children, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import React from "react";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  const changeBackground = () => {
    if (window.screenY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  return (
    <>
      <motion.nav
        style={{ backgroundColor: "black" }}
        className={`text-white fixed left-0 top-0 h-16 flex items-center px-4 w-full bg-black `}
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
            <ListLink href="/contact" setOpen={setOpen}>
              Contact
            </ListLink>
          </ul>
        </Navigation>
      </motion.nav>
    </>
  );
}

function Navigation({ isOpen, children }: any) {
  return (
    <div
      className={`min-h-screen absolute max-md:left-0 top-0 w-[300px]  ${
        isOpen ? "translate-x-[calc(100vw-300px)]" : "translate-x-[100vw]"
      } ease-in-out duration-300`}
    >
      {children}
    </div>
  );
}
function ListLink({ children, href, setOpen }: any) {
  return (
    <Link
      className="text-4xl font-extrabold font-serif flex justify-center hover:text-white"
      href={href}
      onClick={() => setOpen(false)}
    >
      {children}
    </Link>
  );
}
