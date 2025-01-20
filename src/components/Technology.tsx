import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion, Variants } from "framer-motion";

// Define the variants for the animation
const iconVariants = (duration: number): Variants => ({
   initial: { y: -10 },
   animate: {
      y: [10, -10],
      transition: {
         duration: duration,
         ease: "linear",
         repeat: Infinity,
         repeatType: "reverse",
      },
   },
});

const Technology = () => {
   return (
      <div className="border-b border-neutral-800 pb-20">
         <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className="my-20 text-center text-4xl">Technologies</motion.h1>
         <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
               variants={iconVariants(2.5)} // Pass the variants prop
               initial="initial"
               animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-4"
            >
               <RiReactjsLine className="text-6xl text-cyan-400" />
            </motion.div>
            <motion.div
               variants={iconVariants(3)} // Pass the variants prop
               initial="initial"
               animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-4"
            >
               <TbBrandNextjs className="text-6xl" />
            </motion.div>
            <motion.div
               variants={iconVariants(2.7)} // Pass the variants prop
               initial="initial"
               animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-4"
            >
               <SiMongodb className="text-6xl text-green-500" />
            </motion.div>
            <motion.div
               variants={iconVariants(4)} // Pass the variants prop
               initial="initial"
               animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-4"
            >
               <DiRedis className="text-6xl text-red-700" />
            </motion.div>
            <motion.div
               variants={iconVariants(2.9)} // Pass the variants prop
               initial="initial"
               animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-4"
            >
               <FaNodeJs className="text-6xl text-green-500" />
            </motion.div>
            <motion.div
               variants={iconVariants(3.2)} // Pass the variants prop
               initial="initial"
               animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-4"
            >
               <BiLogoPostgresql className="text-6xl text-sky-700" />
            </motion.div>
         </motion.div>
      </div>
   );
};

export default Technology;
