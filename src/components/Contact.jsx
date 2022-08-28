import React from 'react'

function Contact() {
  return (
    <div className='w-full h-screen bg-[#040c16]  flex justify-center md:items-center p-4 ' id='contact' name='contact'>
      <form action="https://getform.io/f/6b876ff1-1a0f-4f32-aa89-5af66e32a744" method='POST' className='flex flex-col w-full max-w-[600px]'>
        <div className='pb-8 pt-12 mt-12'>
          <p className='text-white font-bold text-4xl border-b-4 inline border-blue-400'>Contact</p>
        </div>
        <input type="text" className='bg-[#ccd6f6] p-2' placeholder='Name' name='name' />
        <input type="email" className='bg-[#ccd6f6] my-4 p-2' placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' ></textarea>
        <button className='text-white border-2 hover:bg-blue-500 hover:border-blue-500 py-2 px-5 my-8 mx-auto flex items-center rounded-lg hover:shadow-2xl font-bold'>Submit</button>
      </form>
    </div>
  )
}

export default Contact