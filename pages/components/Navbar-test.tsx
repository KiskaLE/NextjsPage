import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";
import { HiOutlineMenu } from "react-icons/hi";

const links = [
  { href: "/", label: "Home" },
  { href: "#more", label: "About" },
];

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 z-50 flex flex-col justify-center w-full px-4 pt-3 text-white bg-black ">
        <Menu>
          <Menu.Button>
            <HiOutlineMenu className="text-white" size={40} />
          </Menu.Button>
          <Menu.Items
            className={
              "grid gap-5 ml-2 py-5 px-10 w-fit text-5xl rounded-lg transition-all duration-200"
            }
          >
            {links.map((link) => (
              /* Use the `active` state to conditionally style the active item. */
              <Menu.Item key={link.href} as={Fragment}>
                {({ active }) => (
                  <a href={link.href} className={`text-white uppercase`}>
                    {link.label}
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      </nav>
    </>
  );
}
