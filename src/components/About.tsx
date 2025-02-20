import { ABOUT_TEXT } from '../constant/index'
import hero_pic from '../assets/hero_about/hero.png'
import { motion } from 'framer-motion'

const About = () => {
   return <>
      <div className="border-b border-neutral-900 pb-8">

         <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className="mt-20 mb-10 text-center text-4xl">About <span className="text-neutral-500">Me</span></motion.h1>
         <div className="flex flex-wrap">
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className="w-full lg:w-1/2 ">
               <div className="flex items-center justify-center relative -top-12">
                  <img src={hero_pic} alt="about" className='rounded-md w-3/4' />
               </div>
            </motion.div>
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }} className='w-full lg:w-1/2'>
               <div className="flex justify-center lg:justify-start">
                  <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
               </div>
            </motion.div>
         </div>
      </div>
   </>
}

export default About;