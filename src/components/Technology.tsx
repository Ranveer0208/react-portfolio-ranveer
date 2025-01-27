import { RiReactjsLine } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { motion, Variants } from "framer-motion";
import { GrMysql } from "react-icons/gr";
import { FaPhp } from "react-icons/fa6";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";

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
               variants={iconVariants(3.2)} // Pass the variants prop
               initial="initial"
               animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-4"
            >
               <IoLogoJavascript className="text-6xl text-yellow-500" />
            </motion.div>
            <motion.div
               variants={iconVariants(3.2)} // Pass the variants prop
               initial="initial"
               animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-4"
            >
               <BiLogoTypescript className="text-6xl text-blue-500" />
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
               variants={iconVariants(4)} // Pass the variants prop
               initial="initial"
               animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-4"
            >
               <FaPhp className="text-6xl text-purple-500" />
            </motion.div>
            <motion.div
               variants={iconVariants(2.7)} // Pass the variants prop
               initial="initial"
               animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-4"
            >
               <GrMysql className="text-6xl text-orange-600" />
            </motion.div>
            <motion.div
               variants={iconVariants(3.2)} // Pass the variants prop
               initial="initial"
               animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-4"
            >
               <AiOutlineHtml5 className="text-6xl text-amber-600" />
            </motion.div>
            <motion.div
               variants={iconVariants(2.9)} // Pass the variants prop
               initial="initial"
               animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-4"
            >
               <IoLogoCss3 className="text-6xl text-blue-600" />
            </motion.div>
         </motion.div>
      </div>
   );
};

export default Technology;
