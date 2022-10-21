import React from "react";
import { BsGithub, BsLinkedin } from 'react-icons/bs'

import video from './assets/video.mp4'

const App = () => {
    return (
        
        <div className="relative flex items-center justify-center h-screen overflow-hidden">
            <video
                className="absolute w-auto min-w-full min-h-full max-w-none -z-50"
                muted
                autoPlay
                loop>
                <source src={video} type="video/mp4" />
            </video>
            <div className="absolute top-0 left-0 min-h-full min-w-full bg-screen-lock -z-30"></div>
            <div>
                <ul className="text-white aside-lang">
                    <li className="hover:cursor-pointer">PT</li>
                    <li className="hover:cursor-pointer">EN</li>
                </ul>
            </div>

            <nav className="p-3 bg-gray-800 fixed top-0 w-full">
                <ul className="flex gap-6 px-6">
                    <li className="text-2xl text-white ease-in duration-300 hover:cursor-pointer hover:text-blue-400"><BsGithub /></li>
                    <li className="text-2xl text-white ease-in duration-300 hover:cursor-pointer hover:text-blue-400"><BsLinkedin/></li>
                </ul>
            </nav>  
            
            <section className="text-white">
                <section className="mb-36">
                    <article className="">
                        <h1 className="text-5xl mb-1 font-Oswald ">Wallace Santos</h1>
                        <p>Analysis and Systems Development || Fullstack</p>
                    </article>
                </section>
                <section>
                    <ul>
                        <li className="mt-1 hover:overline hover:cursor-pointer">HOME</li>
                        <li className="mt-1 hover:overline hover:cursor-pointer">PROJECTS</li>
                        <li className="mt-1 hover:overline hover:cursor-pointer">KNOWLEDGE</li>
                        <li className="mt-1 hover:overline hover:cursor-pointer">ABOUT</li>
                        <li className="mt-1 hover:overline hover:cursor-pointer">GET IN TOUCH</li>
                    </ul>
                </section>
            </section>

            
        </div>
    )
};

export default App;
