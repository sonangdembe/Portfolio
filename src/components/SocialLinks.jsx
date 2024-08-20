import React, {useNavigate}from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiOutlineMail } from "react-icons/hi";
import { PiReadCvLogoFill } from "react-icons/pi";

const SocialLinks = () => {

    const Links = [{
        id:1,
        child:(
            <>
           <span className='ml-8'>LinkedIn</span>
           <FaLinkedin size={20}  className='ml-3'/>
            </>
        ),
        href:'https://www.linkedin.com/in/sona-angdembe/',
        style : 'rounded-tr-md'
    },
    {
        id:2,
        child:(
            <>
               <span className='ml-11'>Github</span>
            <FaGithub size={20} className='ml-3' />
            
            </>
        ),
        href:'https://github.com/sonangdembe',
     
    },
    {
        id:3,
        child:(
            <>
            <span className='ml-10'>Email </span>
           <HiOutlineMail size={20} className='ml-6' />
            
            </> 
        ),
        href:'https://mail.google.com/mail',
       
    },
    {
        id:4,
        child:(
            <>
             <span className='ml-10'>CV </span>
         <PiReadCvLogoFill  size={20} className='ml-11' />
            </>
        ),
        href:'/CV.pdf',
         style : 'rounded-br-md',
         download:true,
    }
]
    

    return (
        <>
        <div className='flex flex-col top-[35%] left-0 fixed'>
            <ul>

            {Links.map (({id, child, href, style,download})=>(
            <li 
             key={id} 
             className={'flex justify-between items-center w-40 h-14 px-4 ml-[-110px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' + ' ' + style} >
          <a 
          href={href}
          className='flex items-center w-full text-white'
          download = {download}
          target='_blank'
          rel="noreferrer"
          >
            {child}
          </a>
        </li>
        ))}
            </ul>
        </div>
        </>
    )
}

export default SocialLinks