import React, { useState } from 'react'
import img1 from "./7264660.jpg"


const Navbar = () => {
  const [isopen, setisopen] = useState(true)
  const Openmenu = () => {
    setisopen(!isopen)

  }

  return (
    <>
      <div className="flex flex-row items-center justify-between w-full gap-10 bg-gradient-to-r from-yellow-400 to-red-700
 p-5 font-extrabold">
        <a href='https://www.pesuacademy.com/Academy/' target='_blank' title='Goes to Pesuacademy website'><img src='peslog.png' className='flex h-20 w-30' /> </a>
        <p className='hidden xl:flex hover:text-blue-600 cursor-pointer text-lg md:text-xl'><a href='https://pes.edu/' target='_blank' title='Goes to Pes Main website'>Home</a></p>
        <p className="hidden xl:flex text-gray-900">|</p>
        <p className='hidden xl:flex hover:text-blue-600 cursor-pointer text-lg md:text-xl'><a href='https://pes.edu/about-us/' target='_blank' title='Goes to Pes Main website'>Events</a></p>
        <p className="hidden xl:flex text-gray-900">|</p>
        <p className='hidden xl:flex hover:text-blue-600 cursor-pointer text-lg md:text-xl'><a href='https://pes.edu/about-us/' target='_blank' title='Goes to Pes Main website'>About Us</a></p>
        <p className="hidden xl:flex text-gray-900">|</p>
        <p className='hidden xl:flex hover:text-blue-600 cursor-pointer text-lg md:text-xl'><a href='https://pes.edu/about-us/' target='_blank' title='Goes to Pes Main website'>Articles</a></p>
        <p className="hidden xl:flex text-gray-900">|</p>
        <p className='hidden xl:flex hover:text-blue-600 cursor-pointer text-lg md:text-xl'><a href='https://pes.edu/about-us/' target='_blank' title='Goes to Pes Main website'>Quiz</a></p>
        <p className="hidden xl:flex text-gray-900">|</p>


        <img src='E-removebg-preview.png' className='flex h-20 w-20' />
        <button onClick={Openmenu} className='xl:hidden'>Click Here</button>


      </div>
      <div className={` ${isopen ? 'block' : 'hidden'} xl:hidden`}>
        <p className=' hover:text-blue-600 cursor-pointer text-lg md:text-xl font-extrabold'><a href='https://pes.edu/' target='_blank' title='Goes to Pes Main website'>Home</a></p>
        <p className=' hover:text-blue-600 cursor-pointer text-lg md:text-xl font-extrabold'><a href='https://pes.edu/' target='_blank' title='Goes to Pes Main website'>Events</a></p>
        <p className=' hover:text-blue-600 cursor-pointer text-lg md:text-xl font-extrabold'><a href='https://pes.edu/' target='_blank' title='Goes to Pes Main website'>About us</a></p>
        <p className=' hover:text-blue-600 cursor-pointer text-lg md:text-xl font-extrabold'><a href='https://pes.edu/' target='_blank' title='Goes to Pes Main website'>Articles</a></p>
        <p className=' hover:text-blue-600 cursor-pointer text-lg md:text-xl font-extrabold '><a href='https://pes.edu/' target='_blank' title='Goes to Pes Main website'>Quiz</a></p>

      </div>


      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>


      <div className="carousel w-full">
        <div id="slide1" className="flex carousel-item relative h-full w-fit">
          <img src="4670751.jpg" className='flex h-auto w-auto' />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="flex carousel-item relative h-full w-fit">
          <img src="7264660.jpg" className='flex h-auto w-auto' />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="flex carousel-item relative h-full w-fit">
          <img src="cr.jpg" className='flex h-auto w-auto' />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>

      </div>


      <footer className="footer p-10 bg-neutral text-neutral-content">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>


    </>
  )
}

export default Navbar 