import React from 'react';
import { MdArrowRightAlt } from "react-icons/md";
import Navbar from '../components/Navbar';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Contact from './Contact';
import { Link } from 'react-scroll';
import '../index.css';

const Home = () => {
    return (
        <>
            <Navbar />
            <div name='home' className='text-white h-screen w-full bg-gradient-to-b from-black via-blue to-gray-800 relative'>
                <div className='max-w-screen-lg mx-auto flex flex-col items-start justify-center h-full px-4 md:flex-row'>
                    <div className='flex flex-col justify-center h-full md:ml-20'>
                        <h2 className={`text-4xl sm:text-7xl fade-in-out md:ml-0`}>
                            I'm a React & Node <br />Developer
                        </h2>
                        <p className={`text-gray-500 py-4 max-w-md md:ml-0 fade-in-out`}>
                            I'm open to work and collaborate on React projects.
                        </p>
                        
                        <div className="fade-in-out">
                            <Link to='Portfolio' smooth duration={500}
                                className="group border text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                                Portfolio
                                <span className='group-hover:rotate-90 duration-300'>
                                    <MdArrowRightAlt className="ml-2" size={25} />
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center h-full md:ml-50"> {/* Flexbox for vertical alignment */}
                        <img 
                            src='https://img.freepik.com/free-photo/3d-rendering-kid-playing-online_23-2150898633.jpg?t=st=1727668387~exp=1727671987~hmac=86667df1bfcf95e4c68fc80e27c4fef10034b683f2dacad2f3bb419d6901d05a&w=740' 
                            alt="Tech Illustration" 
                            className="zoom-in-out w-80 md:w-96 rounded-lg" 
                        />
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
