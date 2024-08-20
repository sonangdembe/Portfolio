import React,{useNavigate, useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom';



const Navbar = () => {
    const navigate = useNavigate

    const [nav, setNav] = useState(false);
  return (
    <>
    
    <nav className="bg-[#131842] border-gray-200  ">
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
      
    <h1 className='text-white text-5xl font-sona'>sona</h1>
        
    

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



            <div onClick={() => setNav(!nav)} className="flex items-center
         lg:order-2 text-white cursor-pointer pr-4 z-10 md:hidden">
            {nav ? <FaTimes size={20} />:<FaBars size={20}  />}
           </div>

 {nav &&(
  

           <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen p-4'>
            
              
            <Link to='/'
                        className="block py-2 text-4xl text-black pl-3 pr-4 rounded hover:scale-110 duration-100 lg:bg-transparent"
                        aria-current="page">Home</Link>
             
                <li>
                    <Link to='/AboutMe'
                        className="block py-2 text-4xl  text-black hover:scale-110 duration-100   pl-3 pr-4 bg-white-700 rounded 
                        lg:bg-transparent">
                            About me</Link>
                </li>
                <li>
                    <Link to="/Skills"
                        className="block py-2 text-4xl  text-black hover:scale-110 duration-100   pl-3 pr-4 bg-white-700 rounded 
                        lg:bg-transparent">Skills</Link>
                </li>
                <li>
                    <Link to="/Portfolio"
                        className="block py-2  text-4xl text-black hover:scale-110 duration-100 pl-3 pr-4 bg-white-700 rounded 
                        lg:bg-transparent">Portfolio</Link>
                </li>
                <li>
                    <Link to="/Contact"
                        className="block py-2 text-4xl text-black cursor-pointer hover:scale-110 duration-100  pl-3 pr-4 bg-white-700 rounded 
                        lg:bg-transparent">Contact</Link>
                </li>    
           </ul>


 )}
    </div>
</nav>

<script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>
    </>
  )
}

export default Navbar