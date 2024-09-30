import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import FaEnvelope for email

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: <FaLinkedin size={30} />, // Set size to be a bit larger for better visibility
            href: 'https://www.linkedin.com/in/sona-angdembe/',
        },
        {
            id: 2,
            child: <FaGithub size={30} />,
            href: 'https://github.com/sonangdembe',
        },
        {
            id: 3,
            child: <FaEnvelope size={30} />,
            href: 'mailto:asonaxaviersm1@gmail.com', // Ensure proper mailto format
        },
    ];

    return (
        <div className='flex space-x-6 mb-4 md:ml-20'>
            {links.map(({ id, child, href }) => (
                <a 
                    key={id} 
                    href={href} 
                    className='text-white hover:text-cyan-500 transition duration-300 transform hover:scale-125' 
                    target={href.includes('mailto') ? '_self' : '_blank'} // Open mailto in the same tab
                    rel='noreferrer'
                >
                    {child}
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
