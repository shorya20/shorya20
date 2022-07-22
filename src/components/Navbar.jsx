import React, {useState} from 'react'
import {FaBars, FaTimes,FaLinkedin,FaGithub} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/logo.png';
const Navbar = () => {
  const [nav,SetNav] = useState(false);
  const handleClick = () => SetNav(!nav);
  
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo img" style={{width: '50px'}}></img>
      </div>
      {/*Menu */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      {/*Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden z-10" >
        {!nav ? <FaBars/>:<FaTimes/>} 
      </div>
      {/*Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}> 
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Skills</li>
          <li className="py-6 text-4xl">Projects</li>
          <li className="py-6 text-4xl">Contact</li>
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
            <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/shorya-sinha-1389a81b6/">
            Email <HiOutlineMail size={25} />
          </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration 300 bg-pink-600'>
            <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/shorya-sinha-1389a81b6/">
            Resume <BsFillPersonLinesFill size={25} />
          </a>
          </li>
        </ul>
        
      </div>
    </div>
  )
}

export default Navbar