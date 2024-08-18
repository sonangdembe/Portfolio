import React from 'react'

const AboutMe = () => {
  return (
    <>
      <img
                src="./images/pic.jpg"
                alt="pic of me"
                className="w-full max-w-xl rounded-lg shadow-lg mb-4"
                style={{ maxHeight: 'calc(83vh - 4rem)', objectFit: 'cover' }}
              />
    </>
  )
}

export default AboutMe