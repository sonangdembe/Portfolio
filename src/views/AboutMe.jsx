import React from 'react'

const AboutMe = () => {
  return (
    <>
     <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-400'>About</p>
        </div>
        <p className='text-xl mt-20'>
        I’m a passionate and dedicated React developer with a background in nodejs, educational technology. My journey into the world of web development began through bootcamps, where I honed my skills in creating dynamic and responsive web applications. I'm further deepening my expertise in React, exploring the latest advancements, and continuously challenging myself with new projects.



        </p>
        <br/>
        <p className='text-xl'>
        In addition to my technical pursuits, nurturing the next generation of tech enthusiasts. Collaboration and continuous learning are at the heart of my approach, and I'm always open to working on innovative React projects with like-minded developers. My goal is to build impactful digital solutions while growing as a developer and contributing to the tech community.

        </p>
      </div>
    </div>
    </>
  )
}

export default AboutMe