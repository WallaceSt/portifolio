import React from "react";
import { BsGithub, BsLinkedin } from 'react-icons/bs'

import video from './assets/video.mp4'



const Video = ({ video }) => {
    return (
        <video
            className="absolute w-auto min-w-full min-h-full max-w-none -z-50"
            muted
            autoPlay
            loop>
            <source src={video} type="video/mp4" />
        </video>
    )
}


const VideoFilter = () => <div className="absolute top-0 left-0 min-h-full min-w-full bg-screen-lock -z-30"></div>


const LanguageSection = () =>
    <div>
        <ul className="text-white aside-lang">
            <LanguageSelector language="PT" />
            <LanguageSelector language="EN" />
        </ul>
    </div>


const LanguageSelector = ({ language }) =>
    <li className="hover:cursor-pointer">{language}</li>


const TopBar = () =>
    <nav className="p-3 bg-gray-800 fixed top-0 w-full">
        <ul className="flex gap-6 px-6">
            <li className="text-2xl text-white ease-in duration-300 hover:cursor-pointer hover:text-blue-400"><BsGithub /></li>
            <li className="text-2xl text-white ease-in duration-300 hover:cursor-pointer hover:text-blue-400"><BsLinkedin /></li>
        </ul>
    </nav>


const NavBar = () =>
    <section>
        <ul>
            <NavItem text="HOME" />
            <NavItem text="PROJECTS" />
            <NavItem text="KNOWLEDGE" />
            <NavItem text="ABOUT" />
            <NavItem text="GET IN TOUCH" />
        </ul>
    </section>


const NavItem = ({ text }) => 
    <li className="mt-1 hover:overline hover:cursor-pointer">{text}</li>


const Title = () =>
    <section className="mb-36">
        <article className="">
            <Header text="Wallace Santos" />
            <SubHeader text="Analysis and Systems Development || Fullstack" />
        </article>
    </section>


const Header = ({ text }) =>
    <h1 className="text-5xl mb-1 font-Oswald ">{text}</h1>


const SubHeader = ({ text }) =>
    <p>{text}</p>


const App = () => {
    return (
        <div className="relative flex items-center justify-center h-screen overflow-hidden">
            <TopBar />
            <Video video={video} />
            <VideoFilter />
            <LanguageSection />

            <section className="text-white">
                <Title />
                <NavBar />
            </section>
        </div>
    )
};

export default App;
