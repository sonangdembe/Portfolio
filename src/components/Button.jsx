import React from 'react'

const Button = ({ text, className,onClick}) => {
  return (
    <>
    <button className={className} onClick={onClick}>
      {text} {/* Display the button text */}
    </button>
    </>
  )
}

export default Button