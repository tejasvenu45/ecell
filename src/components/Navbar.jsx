import React from 'react';
import pesLogo from './images/peslog.png'; 
import ecellLogo from './images/ecelllogo1.png'; 
import heroImage1 from './images/hero1.png';
import heroImage2 from './images/hero 2.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Navbar = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <nav className="flex flex-row items-center justify-between w-full gap-10 bg-gradient-to-r from-teal-700 to-emerald-400 p-5 font-sans serif text-white">
        <a href='https://www.pesuacademy.com/Academy/' target='_blank' title='Go to Pesuacademy website'>
          <img src={pesLogo} className='h-10 md:h-12' alt='Pesuacademy Logo' />
        </a>
        <div className="flex gap-2 items-center">
          <a href='https://pes.edu/' target='_blank' title='Go to Pesu website' className="hover:text-gray-200 mx-5">Home</a>
          <a href='https://pes.edu/about-us/' target='_blank' title='Go to Pesu About Us' className="hover:text-gray-200 mx-5">About Us</a>
          <a href='https://pes.edu/about-us/' target='_blank' title='Go to Pesu Contact' className="hover:text-gray-200 mx-5">Contact</a>
          <a href='https://pes.edu/about-us/' target='_blank' title='Go to Pesu Events' className="hover:text-gray-200 mx-5">Events</a>
          <a href='https://pes.edu/about-us/' target='_blank' title='Go to Pesu Articles' className="hover:text-gray-200 mx-5">Articles</a>
        </div>
        <a href='https://pes.edu/' target='_blank'  title='Go to Ecell website'>
          <img src={ecellLogo} className='h-20 w-20' alt='Ecell Logo' />
        </a>
      </nav>
      <Slider {...settings} className="hero-section">
        <div>
          <img src={heroImage1} alt="Hero" className="w-full h-auto" />
        </div>
        <div>
          <img src={heroImage2} alt="Hero" className="w-full h-auto" />
        </div>
      </Slider>
    </>
  );
}

export default Navbar;
