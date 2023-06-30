import { useState } from 'react'
import React from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handleClick = () => setShowMenu(!showMenu)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="logo" className='w-[50px]' />
        </div>
        
        <ul className='hidden md:flex'>
            <li className='px-4'>Home</li>
            <li className='px-4'>About</li>
            <li className='px-4'>Skills</li>
            <li className='px-4'>work</li>
            <li>Contact</li>
        </ul>

        <div onClick={handleClick} className='md:hidden z-10'>
            {showMenu ? <FaTimes className='text-3xl' /> : <FaBars className='text-3xl' />}
        </div>

        {/* mobile menu */}
        <ul className={!showMenu ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>work</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

        {/* social media */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[10vw] h-[8vh] flex justify-between items-center ml-[-16vh] hover:ml-[0vh] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300 ml-1' 
                    href="/">
                        LinkedIn <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[10vw] h-[8vh] flex justify-between items-center ml-[-16vh] hover:ml-[0vh] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300 ml-1' 
                    href="/">
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[10vw] h-[8vh] flex justify-between items-center ml-[-16vh] hover:ml-[0vh] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300 ml-1' 
                    href="/">
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[10vw] h-[8vh] flex justify-between items-center ml-[-16vh] hover:ml-[0vh] duration-300 bg-gray-500'>
                    <a className='flex justify-between items-center w-full text-gray-300 ml-1' 
                    href="/">
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar