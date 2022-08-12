import React from 'react'
import Img from '../assets/img/workImg.jpeg'
function Projects() {
    return (
        <div className='bg-black w-full h-full  pt-12 pb-12'>
            <div className='w-full h-full max-w-[1000px] mx-auto p-4 flex flex-col justify-center pt-12 mt-12'>
                <div className='pb-10'>
                    <p className='text-white font-bold text-4xl border-b-4 inline border-blue-400'>Projects</p>
                </div>
                {/* card-container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
                {/* card1 */}
                    <div style={{ backgroundImage: `url(${Img})` }}
                        className='shadow-lg hover:shadow-slate-800 group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* card buttons on hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Project One
                            </span>
                            <div className='pt-10 text-center'>
                                <a href="">
                                    <button className='bg-blue-500 px-4 py-3 m-2 rounded-lg text-center font-bold text-lg text-white'>View</button>
                                </a>
                                <a href="">
                                    <button className='bg-blue-500 px-4 py-3 m-2 rounded-lg text-center font-bold text-lg text-white'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                {/* card2 */}
                    <div style={{ backgroundImage: `url(${Img})` }}
                        className='shadow-lg hover:shadow-slate-800 group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* card buttons on hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Project One
                            </span>
                            <div className='pt-10 text-center'>
                                <a href="">
                                    <button className='bg-blue-500 px-4 py-3 m-2 rounded-lg text-center font-bold text-lg text-white'>View</button>
                                </a>
                                <a href="">
                                    <button className='bg-blue-500 px-4 py-3 m-2 rounded-lg text-center font-bold text-lg text-white'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                {/* card3 */}
                    <div style={{ backgroundImage: `url(${Img})` }}
                        className='shadow-lg hover:shadow-slate-800 group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* card buttons on hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Project One
                            </span>
                            <div className='pt-10 text-center'>
                                <a href="">
                                    <button className='bg-blue-500 px-4 py-3 m-2 rounded-lg text-center font-bold text-lg text-white'>View</button>
                                </a>
                                <a href="">
                                    <button className='bg-blue-500 px-4 py-3 m-2 rounded-lg text-center font-bold text-lg text-white'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                {/* card4 */}
                    <div style={{ backgroundImage: `url(${Img})` }}
                        className='shadow-lg hover:shadow-slate-800 group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* card buttons on hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Project One
                            </span>
                            <div className='pt-10 text-center'>
                                <a href="">
                                    <button className='bg-blue-500 px-4 py-3 m-2 rounded-lg text-center font-bold text-lg text-white'>View</button>
                                </a>
                                <a href="">
                                    <button className='bg-blue-500 px-4 py-3 m-2 rounded-lg text-center font-bold text-lg text-white'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                {/* card5 */}
                    <div style={{ backgroundImage: `url(${Img})` }}
                        className='shadow-lg hover:shadow-slate-800 group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* card buttons on hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Project One
                            </span>
                            <div className='pt-10 text-center'>
                                <a href="">
                                    <button className='bg-blue-500 px-4 py-3 m-2 rounded-lg text-center font-bold text-lg text-white'>View</button>
                                </a>
                                <a href="">
                                    <button className='bg-blue-500 px-4 py-3 m-2 rounded-lg text-center font-bold text-lg text-white'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                {/* card6 */}
                    <div style={{ backgroundImage: `url(${Img})` }}
                        className='shadow-lg hover:shadow-slate-800 group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* card buttons on hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Project One
                            </span>
                            <div className='pt-10 text-center'>
                                <a href="">
                                    <button className='bg-blue-500 px-4 py-3 m-2 rounded-lg text-center font-bold text-lg text-white'>View</button>
                                </a>
                                <a href="">
                                    <button className='bg-blue-500 px-4 py-3 m-2 rounded-lg text-center font-bold text-lg text-white'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Projects