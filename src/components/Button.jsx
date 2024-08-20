import React from 'react';

const Button = ({ text, className, onClick, children }) => {
  return (
    <button className={`flex items-center ${className}`} >
      {children}
      {text}
    </button>
  );
};

export default Button;
