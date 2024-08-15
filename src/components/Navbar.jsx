import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className=" border-gray-200 py-2 ">
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="#" className="flex items-center">
          
        </a>
        <div className="flex items-center lg:order-2">
            <div className="hidden mt-2 mr-4 sm:inline-block">
                <span></span>
            </div>

            
            <button data-collapse-toggle="mobile-menu-2" type="button"
				className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="mobile-menu-2" aria-expanded="true">
				<span className="sr-only">Open main menu</span>
				<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"></path>
				</svg>
				<svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd"></path>
				</svg>
			</button>
        </div>
        <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-colmt-7 pt-2.5 font-semibold lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                    <a href="#"
                        className="block py-2  text-black pl-3 pr-4 rounded lg:bg-transparent"
                        aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#"
                        className="block py-2  text-black hover:underline  pl-3 pr-4 bg-white-700 rounded 
                        lg:bg-transparent">
                            About me</a>
                </li>
                <li>
                    <a href="#"
                        className="block py-2  text-black hover:underline pl-3 pr-4 bg-white-700 rounded 
                        lg:bg-transparent">Experience</a>
                </li>
                <li>
                    <a href="#"
                        className="block py-2  hover:underline text-black  pl-3 pr-4 bg-white-700 rounded 
                        lg:bg-transparent">Contact</a>
                </li>
              
            </ul>
        </div>
    </div>
</nav>

<script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>
    </>
  )
}

export default Navbar