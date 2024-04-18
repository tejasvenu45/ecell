import React from "react";
import navImage from '/public/pescie_logo.fw_-2.png'; // Replace with the path to your image file
import logoImage from 'E:/ecell/public/20191127-055332_ecell_logo.jpg'; // Replace with the path to your logo image file

function Navbar() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 md:py-6">
        <div className="flex flex-row items-center gap-4 md:gap-8 ml-8 md:ml-20">
          <img src={logoImage} alt="Logo Image" className="h-10 md:h-12 w-10 md:w-12"  />
          <div className="flex flex-row items-center justify-center gap-8 md:gap-20">
            <p className="hover:text-gray-300 cursor-pointer text-lg md:text-xl">Home</p>
            <div className="btn hover:text-gray-300 cursor-pointer text-lg md:text-xl">Events</div>
            <p className="hover:text-gray-300 cursor-pointer text-lg md:text-xl">About Us</p>
            <p className="hover:text-gray-300 cursor-pointer text-lg md:text-xl">Articles</p>
            <p className="hover:text-gray-300 cursor-pointer text-lg md:text-xl">Quiz</p>
          </div>
        </div>
        <img src={navImage} alt="Navbar Image" className="h-10 md:h-12 mr-8 md:mr-20"  />
      </div>
      <div></div>
    </>
  );
}

export default Navbar;