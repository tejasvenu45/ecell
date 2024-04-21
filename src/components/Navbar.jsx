import React from 'react'

const Navbar = () => {
  return (
      
      <div className="flex flex-row  items-centre justify-between w-full bg-gradient-to-r from-amber-300 to-amber-500 p-7">
        
        <a href='https://www.pesuacademy.com/Academy/'target='_blank'><img src='logoPesu.png' className='flex flex-row h-13 w-40 pr-7 '></img></a>
      
        <div className='hidden xl:flex flex-row gap-9 pl-14 items-center'>
        <p className='flex font-serif text-blue-900 hover:text-blue-600 transition duration-700 ease-in-out cursor-pointer'>Home</p>
        <p className='flex font-serif text-blue-900 hover:text-blue-600 transition duration-700 ease-in-out cursor-pointer'>Events</p>
        <p className='flex font-serif text-blue-900 hover:text-blue-600 transition duration-700 ease-in-out cursor-pointer'>About</p>
        <p className='flex font-serif text-blue-900 hover:text-blue-600 transition duration-700 ease-in-out cursor-pointer'>Articles</p>
        <p className='flex font-serif text-blue-900 hover:text-blue-600 transition duration-700 ease-in-out cursor-pointer'>Quiz</p>
        </div>



        <div className=' pl-3 hidden xl:flex flex-row items-center gap-6'>
        <img src='bell.png' className='flex flex-row h-11 w-10'></img>
        <button className=' bg-amber-500 px-6 py-4 rounded-xl  text-blue-700 border border-blue-700 border-4'>Log In</button>
        <img src='emptyprofile.png' className='flex flex-row h-16 w-19 '></img>
        </div>
      </div>
        
      

    
  )
}

export default Navbar