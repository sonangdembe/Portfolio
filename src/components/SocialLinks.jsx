import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: <FaLinkedin size={20} />,
            href: 'https://www.linkedin.com/in/sona-angdembe/',
        },
        {
            id: 2,
            child: <FaGithub size={20} />,
            href: 'https://github.com/sonangdembe',
        },
    ];

    return (
        <div className='flex space-x-4 mb-4 md:ml-20'>
            {links.map(({ id, child, href }) => (
                <a 
                    key={id} 
                    href={href} 
                    className='text-white hover:text-gray-400 transition duration-300' 
                    target='_blank' 
                    rel='noreferrer'>
                    {child}
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
