import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { CgFileDocument } from 'react-icons/cg'
import { Link } from 'react-router-dom'

function Navbar() {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center  px-4 pr-12 '>
            <div>
                {/* logo here */}
            </div>

            {/* menu */}
            <ul className='hidden md:flex text-white font-bold mr-12'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/skills'>Skills</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>


            {/* Menubar */}
            <div onClick={handleClick} className=' md:hidden  z-10 cursor-pointer text-white'>
                {!nav ? <FaBars size={30} /> : <FaTimes size={30}/>}
            </div>

            {/* for mobile */}
            <ul className={!nav ? 'hidden' : 'absolute w-full h-screen top-0 left-0 flex flex-col justify-center items-center   bg-blue-500 text-white font-bold'}>
                <li onClick={handleClick} >
                    <Link to='/'>Home</Link>
                </li>
                <li onClick={handleClick} >
                <Link to='/about' className=''>About</Link>
                </li>
                <li onClick={handleClick} >
                <Link to='/skills'>Skills</Link>
                </li>
                <li onClick={handleClick} >
                <Link to='/projects'>Projects</Link>
                </li>
                <li onClick={handleClick} >
                <Link to='/contact'>Contact</Link>
                </li>
            </ul>
            {/* for icons */}
            <div className='hidden lg:flex flex-col fixed left-0 top-[35%]'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-500'>
                        <a href="" className='flex justify-between items-center w-full text-gray-300'>
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-500'>
                        <a href="" className='flex justify-between items-center w-full text-gray-300'>
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-500'>
                        <a href="" className='flex justify-between items-center w-full text-gray-300'>
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-500'>
                        <a href="" className='flex justify-between items-center w-full text-gray-300'>
                            Resume <CgFileDocument size={30} />
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar