import { useState } from 'react'
import React from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-scroll'


const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handleClick = () => setShowMenu(!showMenu)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
          <Link to="home" smooth={true} offset={50} duration={500}>
            <img src={Logo} alt="logo" className='w-[50px] hover:scale-110 ' />
          </Link>
        </div>
        
        <ul className='hidden md:flex'>
            <li className='px-4 hover:text-white'>
            <Link to="home" smooth={true} offset={50} duration={500}>
          <p className='hover:border-b hover:border-pink-500'>Home</p>
        </Link>
            </li>
            <li className='px-4 hover:text-white'>
            <Link to="about" smooth={true} offset={50} duration={500}>
          <p className='hover:border-b hover:border-pink-500'>About</p>
        </Link>
            </li>
            <li className='px-4 hover:text-white'>
            <Link to="skills" smooth={true} offset={50} duration={500}>
          <p className='hover:border-b hover:border-pink-500'>Skills</p>
        </Link>
            </li>
            <li className='px-4 hover:text-white'>
            <Link to="work" smooth={true} offset={50} duration={500}>
          <p className='hover:border-b hover:border-pink-500'>Works</p>
        </Link>
            </li>
            <li className='px-4 hover:text-white'>
            <Link to="contact" smooth={true} offset={50} duration={500}>
          <p className='hover:border-b hover:border-pink-500'>Contact</p>
        </Link>
            </li>
        </ul>

        <div onClick={handleClick} className='md:hidden z-10'>
            {showMenu ? <FaTimes className='text-3xl' /> : <FaBars className='text-3xl' />}
        </div>

        {/* mobile menu */}
        <ul className={!showMenu ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="home" smooth={true} offset={50} duration={500}>
          Home
        </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} offset={50} duration={500}>
          About
        </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={500}>
          Skills
        </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="work" smooth={true} offset={50} duration={500}>
          Works
        </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="contact" smooth={true} offset={50} duration={500}>
          Contact
        </Link>
            </li>
        </ul>

        {/* social media */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[10vw] h-[8vh] flex justify-between items-center ml-[-16vh] hover:ml-[0vh] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300 ml-1' 
                    href="https://www.linkedin.com/in/rachid-mekdoud-662720204/" target='blank'>
                        LinkedIn <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[10vw] h-[8vh] flex justify-between items-center ml-[-16vh] hover:ml-[0vh] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300 ml-1' 
                    href="https://github.com/Rachid-Mek" target='blank'>
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[10vw] h-[8vh] flex justify-between items-center ml-[-16vh] hover:ml-[0vh] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300 ml-1' 
                    href="mailto:rachidmekdoud@gmail.com" target='blank'>
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[10vw] h-[8vh] flex justify-between items-center ml-[-16vh] hover:ml-[0vh] duration-300 bg-gray-500'>
                    <a className='flex justify-between items-center w-full text-gray-300 ml-1' 
                    href="https://app.luminpdf.com/viewer/64c3ec9508a34587e7913c89" target='blank'>
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar