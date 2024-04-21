import React,{useState} from 'react'


const Navbar = () => {
const [isopen, setisopen]=useState(true)
const Openmenu=()=>{
  setisopen(!isopen)

}

  return (
    <>
    <div className="flex flex-row items-center justify-between w-full gap-10 bg-gradient-to-r from-yellow-400 to-red-700
 p-5 font-extrabold">
    <a href='https://www.pesuacademy.com/Academy/'target='_blank' title='Goes to Pesuacademy website'><img src='peslog.png' className='flex h-20 w-30'/> </a>
      <p className='hidden xl:flex hover:text-blue-600 cursor-pointer text-lg md:text-xl'><a href='https://pes.edu/'target='_blank' title='Goes to Pes Main website'>Home</a></p>
      <p className="hidden xl:flex text-gray-900">|</p>
      <p className='hidden xl:flex hover:text-blue-600 cursor-pointer text-lg md:text-xl'><a href='https://pes.edu/about-us/'target='_blank' title='Goes to Pes Main website'>Events</a></p>
      <p className="hidden xl:flex text-gray-900">|</p>
      <p className='hidden xl:flex hover:text-blue-600 cursor-pointer text-lg md:text-xl'><a href='https://pes.edu/about-us/'target='_blank'title='Goes to Pes Main website'>About Us</a></p>
      <p className="hidden xl:flex text-gray-900">|</p>
      <p className='hidden xl:flex hover:text-blue-600 cursor-pointer text-lg md:text-xl'><a href='https://pes.edu/about-us/'target='_blank'title='Goes to Pes Main website'>Articles</a></p>
      <p className="hidden xl:flex text-gray-900">|</p>
      <p className='hidden xl:flex hover:text-blue-600 cursor-pointer text-lg md:text-xl'><a href='https://pes.edu/about-us/'target='_blank'title='Goes to Pes Main website'>Quiz</a></p>
      <p className="hidden xl:flex text-gray-900">|</p>
      

      <img src='E-removebg-preview.png' className='flex h-20 w-20'/>
      <button onClick={Openmenu} className='xl:hidden'>Click Here</button>
      
      
    </div>
   <div className={` ${isopen ? 'block' : 'hidden'} xl:hidden`}>
    <p className=' hover:text-blue-600 cursor-pointer text-lg md:text-xl font-extrabold'><a href='https://pes.edu/'target='_blank' title='Goes to Pes Main website'>Home</a></p>
    <p className=' hover:text-blue-600 cursor-pointer text-lg md:text-xl font-extrabold'><a href='https://pes.edu/'target='_blank' title='Goes to Pes Main website'>Events</a></p>
    <p className=' hover:text-blue-600 cursor-pointer text-lg md:text-xl font-extrabold'><a href='https://pes.edu/'target='_blank' title='Goes to Pes Main website'>About us</a></p>
    <p className=' hover:text-blue-600 cursor-pointer text-lg md:text-xl font-extrabold'><a href='https://pes.edu/'target='_blank' title='Goes to Pes Main website'>Articles</a></p>
    <p className=' hover:text-blue-600 cursor-pointer text-lg md:text-xl font-extrabold'><a href='https://pes.edu/'target='_blank' title='Goes to Pes Main website'>Quiz</a></p>

   </div>
      
    
  </>
  )
}

export default Navbar 