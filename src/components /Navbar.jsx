import React, {useState} from "react";

function Navbar(){

  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return(
    
    <>

      <nav className="flex items-center justify-between gap-8 w-full p-3 bg-blue-100 font-semibold">

        <div className="flex flex-row relative">
        <img src='./public/images/celle.png' className="pl-10 sm:pl-24 flex h-20"></img>
        </div>
        
        <div className="hidden xl:flex gap-10 flex-row">
        <p className=" hover:text-blue-600 transition duration-700 ease-in-out cursor-pointer pl-19">Home</p>
        <p className=" text-gray-400">|</p>
        <p className=" hover:text-blue-600 transition duration-700 ease-in-out cursor-pointer">Events</p>
        <p className=" text-gray-400">|</p>
        <p className=" hover:text-blue-600 transition duration-700 ease-in-out cursor-pointer">About Us</p>
        <p className=" text-gray-400">|</p>
        <p className=" hover:text-blue-600 transition duration-700 ease-in-out cursor-pointer">Articles</p>
        </div>

        <div className="flex">
        <button className="hidden xl:flex rounded-xl bg-blue-300 px-5 py-3 hover:bg-blue-700 hover:text-white transition duration-700">Get Started</button>
        </div>

        <button onClick={toggleMenu}><img src='./public/images/menu.png' className="h-10 w-10 xl:hidden"/></button>

      </nav>

      <div className={`absolute right-full top-0 h-full bg-white w-64 ${isOpen ? 'translate-x-0' : 'translate-x-full'} duration-300 ease-in-out xl:hidden`}>
        <div className="flex flex-col h-full p-4 gap-4 shadow-lg bg-gray-200">
          <img src='./public/images/peslogo.png' className="h-20 w-40 xl:hidden"/>
          <p className="hover:text-blue-600 transition duration-700 ease-in-out cursor-pointer">Home</p>
          <p className="hover:text-blue-600 transition duration-700 ease-in-out cursor-pointer">Events</p>
          <p className="hover:text-blue-600 transition duration-700 ease-in-out cursor-pointer">About Us</p>
          <p className="hover:text-blue-600 transition duration-700 ease-in-out cursor-pointer">Articles</p>
          <br></br>
          <button className="rounded-xl bg-blue-300 py-2 pr-3 hover:bg-blue-700 hover:text-white transition duration-700">Get Started</button>
        </div>
      </div>

    </>

  )
}

export default Navbar;