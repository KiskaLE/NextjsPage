import { motion } from "framer-motion";
import Link from "next/link";
import Transition from "./Transition";
import { BiChevronsDown } from "react-icons/bi";

export default function More({ children, href }: any) {
  return (
    <>
      <motion.div
        style={{ zIndex: 1 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          ease: "easeOut",
          duration: 1,
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
        className="absolute h-full"
      >
        <Transition className="text-white absolute bottom-16 left-[-20px]">
          <Link id="more" href={href}>
            <BiChevronsDown size={50} />
          </Link>
        </Transition>
      </motion.div>
    </>
  );
}
