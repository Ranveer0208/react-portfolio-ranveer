import { HERO_CONTENT } from '../constant/index'
import video from '../assets/hero_about/v1.mp4'
import { motion } from 'framer-motion'

const container = (delay: number) => ({
   hidden: { x: -100, opacity: 0 },
   visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: delay }
   }
})


const Hero = () => {
   return <>
      <div className="lg:w-full lg:h-[35rem] border-neutral-900 pb-4 lg:mb-35 lg:relative lg:overflow-hidden ">
         <div className="z-10 lg:w-full flex flex-wrap  lg:items-center lg:justify-between md:absolute md:top-0 ">
            <div className="w-full lg:w-1/2 mx-5">
               <div className="lg:pb-16 flex-col items-center lg:items-start">
                  <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="text-5xl md:text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-center bg-gradient-to-r from-pink-400 via-slate-600 to-purple-500 bg-clip-text text-transparent">Ranveer Kumar</motion.h1>
                  <motion.div whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0.3, scale: 0 }} transition={{ duration: .5 }} className='flex flex-col items-center justify-center lg:items-start lg:justify-start lg:w-full lg:bg-[#1f1e2d] lg:px-10 lg:rounded-md lg:bg-opacity-70'>
                     <motion.div variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-400 via-slate-600 to-purple-500 bg-clip-text text-3xl tracking-tighter md:tracking-widest md:font-semibold text-transparent mt-8 lg:mt-0 lg:pt-5">Software Developer</motion.div>
                     <motion.p variants={container(1)} initial="hidden" animate="visible" className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT as string}</motion.p>
                  </motion.div>

               </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
               <div className='flex items-center justify-end'>
                  <motion.img initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1 }} src='' alt="" className="w-1/2" />
               </div>

            </div>
         </div>
         <div className='z-0 lg:min-w-full h-[43rem] absolute top-0 hidden lg:block'>
            <video className='min-w-full h-full opacity-20' autoPlay muted loop >
               <source src={video} type="video/mp4" />
            </video>
         </div>
      </div>
      <hr className='border border-neutral-900 my-10' />
   </>
}

export default Hero;