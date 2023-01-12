import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useMotionTemplate } from "framer-motion";

export default function Transition({ children, className }: any) {
  const { ref, inView } = useInView({
    threshold: 0.9,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 0.5,
        },
        zIndex: -1,
      });
    } else {
      animation.start({
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      });
    }
  }, [inView]);

  return (
    <>
      <motion.div className={className} ref={ref} animate={animation}>
        {children}
      </motion.div>
    </>
  );
}
