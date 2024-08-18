import React,{useNavigate} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom';



const Navbar = () => {
    const navigate = useNavigate
  return (
    <>
    
    <nav className="bg-[#131842] border-gray-200  ">
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
      
    <h1 className='text-white text-5xl font-sona'>sona</h1>
        
        <div className="flex items-center lg:order-2 text-white cursor-pointer pr-4 z-10">
    <FaBars size={30}/>
           </div>

            <ul className="hidden md:flex space-x-4">
              
                    <Link to='/'
                        className="block py-2  text-white pl-3 pr-4 rounded hover:scale-110 duration-100 lg:bg-transparent"
                        aria-current="page">Home</Link>
             
                <li>
                    <Link to='/AboutMe'
                        className="block py-2  text-white hover:scale-110 duration-100   pl-3 pr-4 bg-white-700 rounded 
                        lg:bg-transparent">
                            About me</Link>
                </li>
                <li>
                    <Link to="/Skills"
                        className="block py-2  text-white hover:scale-110 duration-100   pl-3 pr-4 bg-white-700 rounded 
                        lg:bg-transparent">Skills</Link>
                </li>
                <li>
                    <Link to="/Portfolio"
                        className="block py-2   text-white hover:scale-110 duration-100 pl-3 pr-4 bg-white-700 rounded 
                        lg:bg-transparent">Portfolio</Link>
                </li>
                <li>
                    <Link to="/Contact"
                        className="block py-2  text-white cursor-pointer hover:scale-110 duration-100  pl-3 pr-4 bg-white-700 rounded 
                        lg:bg-transparent">Contact</Link>
                </li>
              
            </ul>
            {/* <div className='text-white'>
                <FaTimes/>
            </div> */}
        
    </div>
</nav>

<script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>
    </>
  )
}

export default Navbar