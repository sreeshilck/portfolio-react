import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {CgFileDocument} from 'react-icons/cg'
import {FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import bgimg from '../assets/img/bgimg.jpg'
function Home() {
  return (
    <div className=' w-full h-full pt-12 md:pt-0 '
    style={{ backgroundImage: `url(${bgimg})` }}>

        {/* hero section */}
        <div className=' max-w-[1000px] h-screen mx-auto px-8 flex flex-col md:justify-center pt-5  md:pt-0 md:mt-0'>
            <div className='mt-12 pt-12 md:pt-0 md:mt-0'></div>
            <p className='text-white'>Hi, my name is</p>
            <h1 className='text-4xl sm-text-7xl font-bold text-white'>Sreeshil C K</h1>
            <h2 className='text-4xl sm-text-7xl font-bold text-gray-500'>I'am a Full Stack Developer</h2>
            <p className='max-w-[700px] py-4 text-white'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga nobis pariatur non quibusdam, necessitatibus dolore. Aperiam numquam eum sequi aliquid harum maiores libero illo culpa, accusantium odit consequuntur nihil. Doloribus.
           
            </p>

            {/* button  */}
            <div className='flex'>
                <button className='group border-2 py-3 px-6 my-2 flex items-center text-white'>
                    Contact me
                    <span className='group-hover:rotate-90 duration-500'>
                    <HiArrowNarrowRight className='ml-3 text-white'/>
                    </span>
                </button>
                <button className='lg:hidden group border-2 py-3 px-6 my-2 ml-6 flex items-center text-white'>
                    Resume
                    <span className='group-hover:rotate-90 duration-500'>
                    <CgFileDocument size={20} className='ml-3 text-white'/>
                    </span>
                </button>
            </div>

            {/* social icons */}
            <div className='flex mt-8 lg:hidden'>
            <ul className='flex'>
                    <li className='w-[20px] h-[60px]   duration-500'>
                        <a href="" className='text-white'>
                         <FaLinkedin size={30}  />
                        </a>
                    </li>
                    <li className='w-[20px] h-[60px]   duration-500 mx-4'>
                        <a href="" className='text-white'>
                            <FaGithub size={30}  />
                        </a>
                    </li>
                    <li className='w-[20px] h-[60px]  duration-500'>
                        <a href="" className='text-white'>
                            <HiOutlineMail size={32}  />
                        </a>
                    </li>
                    
                </ul>
            </div>

        </div>

    </div>
  )
}

export default Home