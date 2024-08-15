import React from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

const Home = ({text}) => {
  const handleClick = () => {
    console.log('shop now clicked');
  };
  return (
    <>
      <div className="relative h-screen">
        <div className="flex h-full">
          <div className="w-1/2 bg-[#201E43]"></div>
          <div className="w-1/2 bg-orange-500"></div>
        </div>

        <div className="absolute inset-0 flex items-center pt-9 justify-center">
          <div className="bg-white shadow-lg w-full h-full max-w-7xl p-5">
            <Navbar />

            <div className="flex justify-between items-start mt-20">
              <div className="flex flex-col ml-20 pt-10">
                <h1 className="text-5xl font-bold">
                  Hi,<br />
                  I'm Sona Angdembe<br />
                  React Developer
                </h1>
                <p className="text-gray-500 mt-4 pt-6 mr-6">I love React i prefer to work with react  and scrambled it to make a type specimen book. <br/>It has survived not only five centuries, but also the<br/> leap into electronic typesetting, remaining essentially unchanged. It was<br/> popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem </p>

              <Button
              text='hire me'
              onClick={handleClick}
              className=''
              />
              </div>

              <img
                src="./images/pic.jpg"
                alt="pic of me"
                className="w-full max-w-xl rounded-lg shadow-lg mb-4"
                style={{ maxHeight: 'calc(83vh - 4rem)', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
