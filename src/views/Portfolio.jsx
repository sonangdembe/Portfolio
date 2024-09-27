import React from "react";
import search from "../assets/ProjectThumb/search.png";
import weatherAPI from "../assets/ProjectThumb/weatherAPI.png";
import todo from "../assets/ProjectThumb/todo.png";

const Portfolio = () => {
  const portfolios = [
    
    {
      id: 1,
      src: weatherAPI,
      demo: "https://weather-api-seven-psi-23.vercel.app/", 
      code: "https://github.com/sonangdembe/Weather_Api",  
    },
    {
      id: 2,
      src: search,
      demo: "https://task1-3-5.vercel.app/",  
      code: "https://github.com/sonangdembe/task1_3_5?tab=readme-ov-file",  
    },
   
    {
      id: 3,
      src: todo,
      demo: "https://to-do-list-lilac-one-22.vercel.app/",  
      code: " https://github.com/sonangdembe/todo_liist?tab=readme-ov-file",  
    },
  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="w-full h-48 object-cover rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
               
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
               
                <a href={code} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
