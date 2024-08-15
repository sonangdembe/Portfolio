import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
<div className="relative h-screen">
  <div className="flex h-full">
    <div className="w-1/2 bg-[#201E43]"></div>
    <div className="w-1/2 bg-orange-500"></div>
  </div>

  <div className="absolute inset-0 flex items-center pt-9 justify-center">
    <div className="bg-white shadow-lg w-full h-full max-w-7xl p-5">
    
    <Navbar/>

      <h1 className="text-3xl font-bold">Overlay Container</h1>
    
    <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '4rem' }}>
  <img src="./images/pic.jpg" alt="pic of me"
       className="h-50 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg shadow-lg"
       style={{ maxHeight: 'calc(100vh - 4rem)', objectFit: 'cover' }} />
   </div>

      <div className="h-full flex flex-col justify-between">
       
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Home