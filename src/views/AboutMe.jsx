import React from 'react'

const AboutMe = () => {
  return (
    <>
     <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-400'>About</p>
        </div>
        <p className='text-xl mt-20'>
        Visible Portion: The smaller negative margin allows the left edge of the list item to be slightly off-screen but ensures that the icon is visible.
Hover Effect: The hover effect will now move the list item more clearly into view without hiding the icon.
Text Label: Adding text next to the icon gives context and ensures better visibility
        </p>
        <br/>
        <p className='text-xl'>
        Reduced Negative Margin:

Changed ml This ensures that a portion of the list item is visible, including part of the icon, even before the user hovers over it.
Added Text Next to Icons:

I included a  with text next to each icon for better visibility and context.
        </p>
      </div>
    </div>
    </>
  )
}

export default AboutMe