import React from 'react';
import { MdArrowRightAlt } from "react-icons/md";
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import SocialLinks from '../components/SocialLinks';

const Home = () => {

  return (
    <>
    <Navbar/>
    <div name='home' className='text-white h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
          <div className='flex flex-col justify-center h-full ml-20'> 
            <h2 className='text-4xl sm:text-7xl font-bold ml-20'>I'm a React <br/>Developer</h2>
            <p className='text-gray-500 py-4 max-w-md ml-20'>
              I have learned about React through bootcamps and later I joined as a student of React in DigitalPathsala 
              and currently exploring more about React.
            </p>
            <div>
              <Button
                className=" group border text-white w-fit px-6 py-3 ml-20 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                portfolio
                <span className='group-hover:rotate-90 duration-300'>
                  <MdArrowRightAlt className="ml-2" size={25}/>
                </span>
              </Button>
            </div>
          </div>
          <div className="ml-auto">
            <img 
              src='./images/pic.jpg' 
              alt='my profile' 
              className='rounded-2xl w-80 h-80 ' 
              />
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
