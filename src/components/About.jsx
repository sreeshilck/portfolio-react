import React from 'react'

function About() {
    return (
        <div className='bg-black w-full h-fit md:h-screen pb-10 ' id='about' name='about'>
            <div className='w-full h-screen flex flex-col justify-center items-center '>
                <div className='w-full max-w-[1000px] grid grid-cols-2 gap-8'>
                    <div className='pb-6 pl-6  sm:text-right'>
                        <p className='text-white font-bold text-4xl border-b-4 inline border-blue-400'> About</p>
                    </div>
                    <div></div>
                </div>
                <div className='w-full  max-w-[1000px]  grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p className='text-white'>Hi. I'm Sreeshil, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p className='text-white'>
                            I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About