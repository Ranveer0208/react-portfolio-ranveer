import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Navbar = () => {
   return <>
      <div className="nav flex items-center justify-between px-10 md:px-20 py-6 w-full  text-white">
         <div className="left text-lg md:text-3xl hover:cursor-pointer"><a href="https://react-portfolio-ranveer.vercel.app/">RK</a></div>
         <div className="right flex md:space-x-6 space-x-4 hover:cursor-pointer text-sm md:text-2xl">
            <div><a href="https://www.linkedin.com/in/ranveer-varada-679018165" target="_blank" className="hover:text-blue-500"><FaLinkedin className="s" /></a></div>
            <div><a href="https://github.com/Ranveer0208/" target="_blank" className="hover:text-slate-600"><FaGithub /></a></div>
            <div><a href="#" className="hover:cursor-not-allowed"><FaInstagram /></a></div>
            <div><a href="#" className="hover:cursor-not-allowed"><FaXTwitter /></a></div>
         </div>
      </div></>


}

export default Navbar;