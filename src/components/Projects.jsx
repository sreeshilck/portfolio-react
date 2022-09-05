import React from 'react'
import alexacars from '../assets/img/alexacars.png'
import netflix from '../assets/img/netflix_clone.png'
import todo from '../assets/img/todo.png'
import usermanagement from '../assets/img/usermanagement.png'
import portfolio from '../assets/img/portfolio.png'
import lapscart from '../assets/img/lapscart.png'

function Projects() {
    return (
        <div className='bg-black w-full h-full  pt-12 pb-12 ' id='projects' name='projects'>
            <div className='w-full h-full max-w-[1000px] mx-auto p-4 flex flex-col justify-center pt-12 mt-12'>
                <div className='pb-10'>
                    <p className='text-white font-bold text-4xl border-b-4 inline border-blue-400'>Projects</p>
                </div>
                {/* card-container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
                    {/* card1 */}
                    <div style={{ backgroundImage: `url(${lapscart})` }}
                        className='shadow-lg hover:shadow-slate-800  group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* card buttons on hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Lapscart
                                Ecom.
                            </span>
                            <div className='pt-10 text-center'>
                                {/* <a href="">
                                    <button className='bg-blue-500 px-4 py-3 m-2 rounded-lg text-center font-bold text-lg text-white'>View</button>
                                </a> */}
                                <a href="https://github.com/sreeshilck/Lapscart/" target="_blank" rel="noreferrer">
                                    <button className='bg-blue-500 px-4 py-3 m-2 rounded-lg text-center font-bold text-lg text-white'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>``
                    {/* card2 */}
                    <div style={{ backgroundImage: `url(${alexacars})` }}
                        className='shadow-lg hover:shadow-slate-800 group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* card buttons on hover */}
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Alexa-Cars
                            </span>
                            <div className='pt-10 text-center'>
                                <a href="https://alexacars.ml/"  target="_blank" rel="noreferrer">
                                    <button className='bg-blue-500 px-4 py-3 m-2 rounded-lg text-center font-bold text-lg text-white'>View</button>
                                </a>
                                <a href="https://github.com/sreeshilck/Alexa-Cars-rental-car-application/" target="_blank" rel="noreferrer">
                                    <button className='bg-blue-500 px-4 py-3 m-2 rounded-lg text-center font-bold text-lg text-white'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* card3 */}
                    <div style={{ backgroundImage: `url(${portfolio})` }}
                        className='shadow-lg hover:shadow-slate-800 group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* card buttons on hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Portfolio
                            </span>
                            <div className='pt-10 text-center'>
                                <a href="https://sreeshilck.netlify.app/" target="_blank" rel="noreferrer">
                                    <button className='bg-blue-500 px-4 py-3 m-2 rounded-lg text-center font-bold text-lg text-white'>View</button>
                                </a>
                                <a href="https://github.com/sreeshilck/portfolio-react/" target="_blank" rel="noreferrer">
                                    <button className='bg-blue-500 px-4 py-3 m-2 rounded-lg text-center font-bold text-lg text-white'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* card4 */}
                    <div style={{ backgroundImage: `url(${netflix})` }}
                        className='shadow-lg hover:shadow-slate-800 group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* card buttons on hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Netflix Clone
                            </span>
                            <div className='pt-10 text-center'>
                                <a href="https://netflix-clone-f6899.web.app/" target="_blank" rel="noreferrer">
                                    <button className='bg-blue-500 px-4 py-3 m-2 rounded-lg text-center font-bold text-lg text-white'>View</button>
                                </a>
                                <a href="https://github.com/sreeshilck/netflix-react-clone/" target="_blank" rel="noreferrer">
                                    <button className='bg-blue-500 px-4 py-3 m-2 rounded-lg text-center font-bold text-lg text-white'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* card5 */}
                    <div style={{ backgroundImage: `url(${todo})` }}
                        className='shadow-lg hover:shadow-slate-800 group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* card buttons on hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Todo App
                            </span>
                            <div className='pt-10 text-center'>
                                {/* <a href="">
                                    <button className='bg-blue-500 px-4 py-3 m-2 rounded-lg text-center font-bold text-lg text-white'>View</button>
                                </a> */}
                                <a href="https://github.com/sreeshilck/todo-app-react/" target="_blank" rel="noreferrer">
                                    <button className='bg-blue-500 px-4 py-3 m-2 rounded-lg text-center font-bold text-lg text-white'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* card6 */}
                    <div style={{ backgroundImage: `url(${usermanagement})` }}
                        className='shadow-lg hover:shadow-slate-800 group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* card buttons on hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                User Management
                            </span>
                            <div className='pt-10 text-center'>
                                {/* <a href="">
                                    <button className='bg-blue-500 px-4 py-3 m-2 rounded-lg text-center font-bold text-lg text-white'>View</button>
                                </a> */}
                                <a href="https://github.com/sreeshilck/CRUD-user-management-react/" target="_blank" rel="noreferrer">
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