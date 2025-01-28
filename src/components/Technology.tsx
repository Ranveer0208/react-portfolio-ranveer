import { RiReactjsLine } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { motion, Variants } from "framer-motion";
import { GrMysql } from "react-icons/gr";
import { FaPhp } from "react-icons/fa6";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { RiTailwindCssFill } from "react-icons/ri";

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
               className="rounded-2xl border-4 border-neutral-800 p-4 z-50">

               <span className="flex flex-wrap group relative rounded-xl hover:bg-neutral-hover:text-cyan-300 hover:cursor-pointer">
                  <RiReactjsLine className="text-6xl text-cyan-400" />
                  <div className=" flex flex-wrap gap-1 w-fit absolute top-[7rem] right-0 scale-0 group-hover:scale-100 bg-neutral-800 px-4 py-3 rounded-lg border-2 border-cyan-400 transition-transform duration-300 ease-in-out -translate-x-15 ">React
                     <div className="scale-0 group-hover:scale-100 transition-transform duration-1000 ease-in-out w-5 h-5 bg-neutral-800 border-2 border-t-cyan-400 border-l-cyan-400 border-b-transparent border-r-transparent absolute -top-[0.69rem] right-8 rotate-45"></div>
                  </div>
               </span>

            </motion.div>

            <motion.div
               variants={iconVariants(3.2)} // Pass the variants prop
               initial="initial"
               animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-4 z-40">
               <span className="flex flex-wrap group relative rounded-xl hover:bg-neutral-hover:text-cyan-300 hover:cursor-pointer">

                  <IoLogoJavascript className="text-6xl text-yellow-500" />
                  <div className="flex flex-wrap gap-1 w-fit absolute top-[7rem] -right-5 scale-0 group-hover:scale-100 bg-neutral-800 px-4 py-3 rounded-lg border-2 border-cyan-400 transition-transform duration-300 ease-in-out -translate-x-15 ">JavaScript
                     <div className="scale-0 group-hover:scale-100 transition-transform duration-1000 ease-in-out w-5 h-5 bg-neutral-800 border-2 border-t-cyan-400 border-l-cyan-400 border-b-transparent border-r-transparent absolute -top-[0.69rem] right-12 rotate-45"></div>
                  </div>
               </span>
            </motion.div>
            <motion.div
               variants={iconVariants(3.2)} // Pass the variants prop
               initial="initial"
               animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-4 z-30">
               <span className="flex flex-wrap group relative rounded-xl hover:bg-neutral-hover:text-cyan-300 hover:cursor-pointer">

                  <BiLogoTypescript className="text-6xl text-blue-500" />
                  <div className="flex flex-wrap gap-1 w-fit absolute top-[7rem] -right-5 scale-0 group-hover:scale-100 bg-neutral-800 px-4 py-3 rounded-lg border-2 border-cyan-400 transition-transform duration-300 ease-in-out -translate-x-15 ">TypeScript
                     <div className="scale-0 group-hover:scale-100 transition-transform duration-1000 ease-in-out w-5 h-5 bg-neutral-800 border-2 border-t-cyan-400 border-l-cyan-400 border-b-transparent border-r-transparent absolute -top-[0.69rem] right-12 rotate-45"></div>
                  </div>
               </span>


            </motion.div>
            <motion.div
               variants={iconVariants(3)} // Pass the variants prop
               initial="initial"
               animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-4 z-10 ">

               <span className="flex flex-wrap group relative rounded-xl hover:bg-neutral-hover:text-cyan-300 hover:cursor-pointer">
                  <TbBrandNextjs className="text-6xl" />
                  <div className="flex flex-wrap gap-1 w-fit absolute top-[7rem] -right-3 scale-0 group-hover:scale-100 bg-neutral-800 px-4 py-3 rounded-lg border-2 border-cyan-400 transition-transform duration-300 ease-in-out -translate-x-15 ">Nextjs
                     <div className="scale-0 group-hover:scale-100 transition-transform duration-1000 ease-in-out w-5 h-5 bg-neutral-800 border-2 border-t-cyan-400 border-l-cyan-400 border-b-transparent border-r-transparent absolute -top-[0.69rem] right-8 rotate-45"></div>
                  </div>
               </span>

            </motion.div>
            <motion.div
               variants={iconVariants(4)} // Pass the variants prop
               initial="initial"
               animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-4 z-10">

               <span className="flex flex-wrap group relative rounded-xl hover:bg-neutral-hover:text-cyan-300 hover:cursor-pointer">
                  <FaPhp className="text-6xl text-purple-500" />
                  <div className="flex flex-wrap gap-1 w-fit absolute top-[7rem] -right-3 scale-0 group-hover:scale-100 bg-neutral-800 px-5 py-3 rounded-lg border-2 border-cyan-400 transition-transform duration-300 ease-in-out -translate-x-15 ">PHP
                     <div className="scale-0 group-hover:scale-100 transition-transform duration-1000 ease-in-out w-5 h-5 bg-neutral-800 border-2 border-t-cyan-400 border-l-cyan-400 border-b-transparent border-r-transparent absolute -top-[0.69rem] right-8 rotate-45"></div>
                  </div>
               </span>

            </motion.div>
            <motion.div
               variants={iconVariants(2.7)} // Pass the variants prop
               initial="initial"
               animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-4 z-10">


               <span className="flex flex-wrap group relative rounded-xl hover:bg-neutral-hover:text-cyan-300 hover:cursor-pointer">
                  <GrMysql className="text-6xl text-orange-600" />
                  <div className="flex flex-wrap gap-1 w-fit absolute top-[7rem] -right-3 scale-0 group-hover:scale-100 bg-neutral-800 px-4 py-3 rounded-lg border-2 border-cyan-400 transition-transform duration-300 ease-in-out -translate-x-15 ">MySql
                     <div className="scale-0 group-hover:scale-100 transition-transform duration-1000 ease-in-out w-5 h-5 bg-neutral-800 border-2 border-t-cyan-400 border-l-cyan-400 border-b-transparent border-r-transparent absolute -top-[0.69rem] right-8 rotate-45"></div>
                  </div>
               </span>

            </motion.div>
            <motion.div
               variants={iconVariants(3.7)} // Pass the variants prop
               initial="initial"
               animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-4">


               <span className="group relative rounded-xl hover:bg-neutral-hover:text-cyan-300 hover:cursor-pointer">
                  <RiTailwindCssFill className="text-6xl text-blue-400" />
                  <div className=" w-[10rem] absolute top-[7rem] -right-3 scale-0 group-hover:scale-100 bg-neutral-800 px-4 py-3 rounded-lg border-2 border-cyan-400 transition-transform duration-300 ease-in-out -translate-x-15 text-center">Tailwind Css
                     <div className="scale-0 group-hover:scale-100 transition-transform duration-1000 ease-in-out w-5 h-5 bg-neutral-800 border-2 border-t-cyan-400 border-l-cyan-400 border-b-transparent border-r-transparent absolute -top-[0.69rem] right-8 rotate-45"></div>
                  </div>
               </span>

            </motion.div>
            <motion.div
               variants={iconVariants(3.2)} // Pass the variants prop
               initial="initial"
               animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-4">


               <span className="flex flex-wrap group relative rounded-xl hover:bg-neutral-hover:text-cyan-300 hover:cursor-pointer">
                  <AiOutlineHtml5 className="text-6xl text-amber-600" />
                  <div className="z-50 flex flex-wrap gap-1 w-fit absolute top-[7rem] -right-3 scale-0 group-hover:scale-100 bg-neutral-800 px-4 py-3 rounded-lg border-2 border-cyan-400 transition-transform duration-300 ease-in-out -translate-x-15 ">HTML
                     <div className="scale-0 group-hover:scale-100 transition-transform duration-1000 ease-in-out w-5 h-5 bg-neutral-800 border-2 border-t-cyan-400 border-l-cyan-400 border-b-transparent border-r-transparent absolute -top-[0.69rem] right-8 rotate-45"></div>
                  </div>
               </span>

            </motion.div>
            <motion.div
               variants={iconVariants(2.9)} // Pass the variants prop
               initial="initial"
               animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-4">

               <span className="flex flex-wrap group relative rounded-xl hover:bg-neutral-hover:text-cyan-300 hover:cursor-pointer">
                  <IoLogoCss3 className="text-6xl text-blue-600" />
                  <div className="flex flex-wrap gap-1 w-fit absolute top-[7rem] -right-3 scale-0 group-hover:scale-100 bg-neutral-800 px-4 py-3 rounded-lg border-2 border-cyan-400 transition-transform duration-300 ease-in-out -translate-x-15 ">CSS
                     <div className="scale-0 group-hover:scale-100 transition-transform duration-1000 ease-in-out w-5 h-5 bg-neutral-800 border-2 border-t-cyan-400 border-l-cyan-400 border-b-transparent border-r-transparent absolute -top-[0.69rem] right-8 rotate-45"></div>
                  </div>
               </span>


            </motion.div>
         </motion.div>
      </div>
   );
};

export default Technology;
