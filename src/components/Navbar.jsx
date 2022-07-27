import React, {useState} from 'react'
import {FaBars, FaTimes,FaLinkedin,FaGithub} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/logo.png';
import {Link} from 'react-scroll';
import PDF from '../assets/Shorya_first_CV.pdf';
const Navbar = () => {
  const [nav,SetNav] = useState(false);
  const handleClick = () => SetNav(!nav);
  
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
      <Link to="Home"  smooth={true} offset={50} duration={500} >
          <a href=""><img src={Logo} alt="Logo img" style={{width: '50px'}}></img></a>
        </Link>
      </div>
      {/*Menu */}
      <ul className="hidden md:flex items-center">
        <li className="hover:border-b-2 inline font-bold border-pink-600"><Link to="Home"  smooth={true} offset={50} duration={500} >
          Home
        </Link></li>
        <li className="hover:border-b-2 inline font-bold border-pink-600"><Link to="about"  smooth={true} offset={50} duration={500} >
          About
        </Link></li>
        <li className="hover:border-b-2 inline font-bold border-pink-600"><Link to="skills"  smooth={true} offset={50} duration={500} >
          Skills
        </Link></li>
        <li className="hover:border-b-2 inline font-bold border-pink-600"><Link to="work"  smooth={true} offset={50} duration={500} >
          Projects
        </Link></li>
        <li className="hover:border-b-2 inline font-bold border-pink-600"><Link to="contact"  smooth={true} offset={50} duration={500} >
          Contact
        </Link></li>
      </ul>
      {/*Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden z-10" >
        {!nav ? <FaBars/>:<FaTimes/>} 
      </div>
      {/*Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}> 
          <li className="py-6 text-4xl hover:border-b-2 inline font-bold border-pink-600"><Link onClick={handleClick} to="Home"  smooth={true} offset={50} duration={500} >
            Home
          </Link></li>
          <li className="py-6 text-4xl hover:border-b-2 inline font-bold border-pink-600"><Link onClick={handleClick} to="about"  smooth={true} offset={50} duration={500} >
            About
          </Link></li>
          <li className="py-6 text-4xl hover:border-b-2 inline font-bold border-pink-600"><Link onClick={handleClick} to="skills"  smooth={true} offset={50} duration={500} >
            Skills
          </Link></li>
          <li className="py-6 text-4xl hover:border-b-2 inline font-bold border-pink-600"><Link onClick={handleClick} to="work"  smooth={true} offset={50} duration={500} >
            Projects
          </Link></li>
          <li className="py-6 text-4xl hover:border-b-2 inline font-bold border-pink-600"><Link onClick={handleClick} to="contact"  smooth={true} offset={50} duration={500} >
            Contact
          </Link></li>
      </ul>
      {/*Socials*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-[2%]">
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration 300 bg-blue-600'>
            <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/shorya-sinha-1389a81b6/">
            Linkedin <FaLinkedin size={25} />
          </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration 300 bg-black'>
            <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/shorya-sinha-1389a81b6/">
            Github <FaGithub size={25} />
          </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration 300 bg-gray-600'>
            <a className="flex justify-between items-center w-full text-gray-300" onClick={()=>window.location = "mailto:shoryaoct20@gmail.com"}>
            Email <HiOutlineMail size={25} />
          </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration 300 bg-pink-600'>
            <a className="flex justify-between items-center w-full text-gray-300" href={PDF}>
            Resume <BsFillPersonLinesFill size={25} />
          </a>
          </li>
        </ul>
        
      </div>
    </div>
  )
}

export default Navbar