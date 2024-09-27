import React from 'react'



const Experience = () => {

  const techs =[
    {
      id:1,
      src:'./images/html.png',
      title:'HTML',
      style:'shadow-orange-500'
    },
    {
      id:2,
      src:'./images/css.png',
      title:'CSS',
      style:'shadow-blue-500'
    },
    {
      id:3,
      src:'./images/js.png',
      title:'JavaScript',
      style:'shadow-yellow-500'
    },
    {
      id:4,
      src:'./images/reactImg.png',
      title:'React',
      style:'shadow-blue-600',
    },
    {
      id:5,
      src:'./images/github.png',
      title:'Github',
      style:'shadow-gray-400'
    },
    {
      id:6,
      src:'./images/tailwind.png',
      title:'Tailwind',
      style:'shadow-sky-400'
    }
  ]
  return (
    <>
<div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
  <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
    <div className='mt-8 sm:mt-16 pb-8'>
      <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Experience</p>
      <p className='py-6'>I have gained experience in these technologies</p>
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
        {techs.map(({ id, src, title, style }) => (
          <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt={title} className='w-20 mx-auto' />
            <p className='mt-4'>{title}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Experience