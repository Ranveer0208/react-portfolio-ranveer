import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Navbar = () => {
   return <>
      <div className="nav flex items-center justify-between px-10 md:px-20 py-6 w-full  text-white">
         <div className="left text-lg md:text-3xl">RK</div>
         <div className="right flex md:space-x-6 space-x-4 hover:cursor-pointer text-sm md:text-2xl">
            <div><FaLinkedin className="s" /></div>
            <div><FaGithub /></div>
            <div><FaInstagram /></div>
            <div><FaXTwitter /></div>
         </div>
      </div></>


}

export default Navbar;