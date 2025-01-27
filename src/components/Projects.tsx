import { useEffect, useState, useRef } from "react";
import { PROJECTS } from "../constant";
import { motion } from "framer-motion";

const Projects = () => {

   const [currentIndex, setCurrentIndex] = useState(0);
   const carouselRef = useRef<HTMLDivElement>(null);

   const cardsPerPage = 1;
   const totalPages = Math.ceil(PROJECTS.length / cardsPerPage);

   useEffect(() => {
      if (carouselRef.current) {
         carouselRef.current.style.transform = `translateX(-${currentIndex * 320}px)`;
      }
   }, [currentIndex]);

   console.log('currindex', currentIndex)
   console.log('total pages', totalPages)

   const handleNext = () => {
      console.log('w', window.innerWidth)
      setCurrentIndex((prevIndex) => {
         if (window.innerWidth >= 1024) {
            return prevIndex === totalPages - 2 ? 0 : prevIndex + 1
         } else if (window.innerWidth >= 1280) {
            return prevIndex === totalPages - 3 ? 0 : prevIndex + 1
         } else {
            return prevIndex === totalPages - 1 ? 0 : prevIndex + 1
         }

      }
      );
      if (currentIndex >= 4) {
         setCurrentIndex(0);
      }
   };

   const handlePrev = () => {
      setCurrentIndex((prevIndex) => {

         if (window.innerWidth >= 1024) {
            return prevIndex === 0 ? totalPages - 2 : prevIndex - 1
         } else if (window.innerWidth >= 1280) {
            return prevIndex === 0 ? totalPages - 3 : prevIndex - 1
         } else {
            return prevIndex === 0 ? totalPages - 1 : prevIndex - 1
         }
      }
      );
   };

   return <>
      <div className="border-b border-neutral-900 pb-4">

         <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1 }} className="mt-10 mb-5 text-center text-4xl">Projects</motion.h1>

         <div className="relative w-full h-[30rem] mx-auto flex items-center justify-center overflow-hidden">
            <div className="relative w-4/5 overflow-hidden">

               <div ref={carouselRef} className="flex justify-start -ml-4 lg:mx-auto lg:justify-between transition-transform duration-500 ease-in-out space-x-8 p-5 " id="carousel">
                  {
                     PROJECTS.map((project, index) => (
                        <motion.div
                           key={index}
                           initial={{ opacity: 0, x: -100 }}
                           animate={{ opacity: 1, x: 0 }}
                           exit={{ opacity: 0, x: 100 }}
                           className={`flex-shrink-0 w-[18rem] h-[28rem] shadow-2xl px-5 pt-6 rounded-xl border-2 border-t-cyan-800 border-b-cyan-800 border-s-transparent border-r-transparent `}>
                           <motion.div whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.2 }} transition={{ duration: 0.5 }} whileHover={{ scale: 1.3 }} className="w-full h-3/5 border-b border-neutral-900 pb-2 overflow-hidden mb-5 rounded-md  ">
                              <img src={project.image} alt={project.title} className=" w-full " />

                           </motion.div>
                           <div className="mb-5 border-b border-neutral-900 pb-4">
                              <motion.h1 whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 3 }} className="font-semibold">{project.title}</motion.h1>
                              <motion.p whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 3 }} className="text-neutral-400 text-xs tracking-tighter">{project.description}</motion.p>
                           </div>
                           <div className="flex justify-around w-full">
                              <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9, rotate: 3 }} className="bg-neutral-900 text-neutral-400 px-2 py-1 rounded-xl text-sm font-medium  hover:bg-neutral-800 hover:text-cyan-300 hover:font-medium active:text-neutral-400">Demo</motion.button>
                              <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9, rotate: 3 }} className="bg-neutral-900 text-neutral-400 px-2 py-1 rounded-xl text-sm font-medium hover:bg-neutral-800 hover:text-cyan-300 hover:font-medium ">Source Code</motion.button>

                              <span className="flex flex-wrap group relative bg-neutral-900 text-neutral-400 px-2 py-1 rounded-xl text-sm font-medium hover:bg-neutral-hover:text-cyan-300 hover:font-medium hover:cursor-pointer">Stack
                                 <div className="flex flex-wrap gap-1 w-[15rem] absolute scale-0 group-hover:scale-100 bottom-12 -left-[11.5rem] bg-neutral-800 px-4 py-3 rounded-lg border-2 border-pink-400 transition-transform duration-300 ease-in-out -translate-x-15 ">{project.technologies.map((tech, index) => (
                                    <span key={index} className="px-2 py-1 bg-slate-900 rounded-md shadow-white box-shad mx-1 text-xs text-purple-300">{tech}</span>
                                 ))}
                                    <div className="scale-0 group-hover:scale-100 transition-transform duration-1000 ease-in-out w-6 h-6 bg-neutral-800 border-2 border-b-pink-400 border-r-pink-400 border-t-transparent border-l-transparent absolute -bottom-[0.75rem] right-5 rotate-45"></div>
                                 </div>
                              </span>
                           </div>

                        </motion.div>
                     ))
                  }

               </div>
            </div>





            <button type="button" onClick={handlePrev} className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-1 cursor-pointer group focus:outline-none" data-carousel-prev>
               <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                  </svg>
               </span>
            </button>
            <button type="button" onClick={handleNext} className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-1 cursor-pointer group focus:outline-none" data-carousel-next>
               <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                  </svg>
               </span>
            </button>
         </div>




      </div>
   </>
}

export default Projects;