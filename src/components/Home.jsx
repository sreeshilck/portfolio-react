import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { CgFileDocument } from 'react-icons/cg'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import bgimg from '../assets/img/bgimg.jpg'
import { Link } from 'react-scroll'


function Home() {
    return (
        <div className=' w-full h-fit md:h-screen pt-12 md:pt-0 flex justify-center items-center' id='home' name='home'
            style={{ backgroundImage: `url(${bgimg})` }}
        >

            {/* hero section */}
            <div className='max-w-[1000px] h-fit mx-auto px-8 flex flex-col md:justify-center pt-5  md:pt-0 md:mt-0   bg-blue' >
                <div className='mt-12 pt-12 md:pt-0 md:mt-0'></div>
                <p className='text-white'>Hi, my name is</p>
                <h1 className='md:text-6xl text-4xl font-bold text-white'>Sreeshil C K</h1>
                <h2 className='md:text-4xl text-2xl font-bold text-gray-400'>I'am a Full Stack Developer</h2>
                <p className='max-w-[700px] py-4 text-white'>
                    Passionate Sellf-taught Full Stack web developer specialising on MERN Stack with application development experience and well-versed in a variety of front-end and back-end technologies.Possess a solid commitment to the team environment and enjoy working as a team member and independently.
                </p>

                {/* button  */}
                <div className='flex flex-col ' >
                    <Link to='contact' smooth={true} duration={1000} className='group border-2 py-3 px-3 md:px-6 my-2 flex items-center justify-center text-white w-fit cursor-pointer'>
                        Contact me
                        <span className='group-hover:rotate-90 duration-500'>
                            <HiArrowNarrowRight className='ml-3 text-white' />
                        </span>
                    </Link>
                    <a href='/Sreeshil_CK_Resume.pdf' download={true} className='lg:hidden group border-2 py-3 px-6 my-2  flex items-center justify-center text-white w-fit'>
                        Resume
                        <span className='group-hover:rotate-90 duration-500'>
                            <CgFileDocument size={20} className='ml-3 text-white' />
                        </span>
                    </a>
                </div>

                {/* social icons */}
                <div className='flex mt-8 lg:hidden  items-center'>
                    <ul className='flex '>
                        <li className='w-[20px] h-[60px]   duration-500 text-center'>
                            <a href="" className='text-white'>
                                <FaLinkedin size={30} />
                            </a>
                        </li>
                        <li className='w-[20px] h-[60px]   duration-500 mx-4'>
                            <a href="" className='text-white'>
                                <FaGithub size={30} />
                            </a>
                        </li>
                        <li className='w-[20px] h-[60px]  duration-500'>
                            <a href="" className='text-white'>
                                <HiOutlineMail size={32} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home