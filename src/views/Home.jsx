import React from 'react';
import { MdArrowRightAlt } from "react-icons/md";
import Navbar from '../components/Navbar';
import SocialLinks from '../components/SocialLinks';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Contact from './Contact';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <>
            <Navbar />
            <div name='home' className='text-white h-screen w-full bg-gradient-to-b from-black via-blue to-gray-800'>
                <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                    <div className='flex flex-col justify-center h-full md:ml-20'>
                        <h2 className='text-4xl sm:text-7xl font-bold md:ml-20'>I'm a React & Node <br />Developer</h2>
                        <p className='text-gray-500 py-4 max-w-md md:ml-20'>I'm open to work and collaborate on React projects.</p>
                        
                      
                        <SocialLinks />
                        
                        <div>
                            <Link to='Portfolio' smooth duration={500}
                                className="group border text-white w-fit px-6 py-3 md:ml-20 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                                Portfolio
                                <span className='group-hover:rotate-90 duration-300'>
                                    <MdArrowRightAlt className="ml-2" size={25} />
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="ml-auto">
                     
                    </div>
                </div>
                <AboutMe />
                <Portfolio />
                <Experience />
                <Contact />
            </div>
        </>
    );
};

export default Home;
