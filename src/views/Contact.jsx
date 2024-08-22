import React from 'react'

const Contact = () => {
  return (
    <>
    
    <div name='contact'
      className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'> 
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
      <div className='pb-8'>
        <p className='text-4xl text-bold inline border-b-4 '>
          Contact
        </p>
        <p className='py-6'>
          Submit the form below to get in touch with me
        </p>
      </div>
      <div className='flex justify-center item-center'>
            <form 
             action="https://getform.io/f/bkkgxgeb"
             method="POST"
             className="flex flex-col w-full md:w-1/2">
               <input type='text' 
               name='name'
               placeholder='Enter your name'
               className="p-2 bg-transparent border-2 rounded-md text-white " />

                <input
                type='email'
                 placeholder='Email' 
                 name='email'
                className="p-2 my-4 bg-transparent border-2 rounded-md text-white " />
                
                <textarea 
                placeholder='Message'
                 rows="6" 
                 name='textarea'
                 className="p-2 bg-transparent border-2 rounded-md text-white "/>
                 
                 <button 
                 type='button'
                 name='button'
                 className="text-white bg-gradient-to-b from-cyan-500
                 to-blue-500 px-6 py-2 w-35 my-8 mx-auto flex item-center
                  rounded-md hover:scale-110 duration-300 ">send</button>

            </form>
            </div>
        </div>
      </div>
    
    </>
  )
}

export default Contact