import React from 'react'

function About() {
  return (
    <div className='bg-black w-full h-full pb-10'>
        <div className='w-full h-screen flex flex-col justify-center items-center '>
            <div className='w-full max-w-[1000px] grid grid-cols-2 gap-8'>
                <div className='pb-6 pl-6  sm:text-right'>
                    <p className='text-white font-bold text-4xl border-b-4 inline border-blue-400'> About</p>
                </div>
                <div></div>
                </div>
                <div className='w-full  max-w-[1000px]  grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div>
                        <p className='text-white'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aperiam dolorum natus reprehenderit, totam, eaque laudantium modi repellat delectus ab non praesentium deserunt mollitia odio perspiciatis illum ipsam! Laboriosam, quas?
                        </p>
                    </div>
                </div>

        </div>

    </div>
  )
}

export default About