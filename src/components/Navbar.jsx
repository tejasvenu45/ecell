import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroBackgroundImage from "./kingkohli.jpg";

function Navbar() {
    const loginOrRegister = () => {
        
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const sliderStyle = {
        backgroundColor: ''
    };

    const sliderHoverStyle = {
        backgroundColor: ''
    };

    return (
        <>
            <div className="flex flex-row items-center justify-left w-full gap-10 bg-red-600 p-1">
                <div className="flex flex-row items-center justify-left w-full gap-10 bg-red-600 p-3">
                    <img src='kohlogg.png' className="flex h-16 w-15" alt="Logo"></img>
                    <p className='text-white'><a href="https://www.royalchallengers.com/" target="_blank" rel="noopener noreferrer" title="Home">HOME </a></p>
                    <p>|</p>
                    <p className='text-white'><a href="https://www.royalchallengers.com/rcb-cricket-news" target="_blank" rel="noopener noreferrer" title="News">NEWS</a></p>
                    <p>|</p>
                    <p className='text-white'><a href="https://www.royalchallengers.com/rcb-squad-men" target="_blank" rel="noopener noreferrer" title="Team">TEAM</a></p>
                    <p>|</p>
                    <p className='text-white'><a href="https://www.royalchallengers.com/fixtures" target="_blank" rel="noopener noreferrer" title="Fixtures">FIXTURES</a></p>
                    <p>|</p>
                    <p className='text-white'><a href="https://shop.royalchallengers.com/merchandise" target="_blank" rel="noopener noreferrer" title="Official Merchandise">MERCHANDISE</a></p>
                    <p>|</p>
                    <p className='text-white'><a href="https://shop.royalchallengers.com/ticket" target="_blank" rel="noopener noreferrer" title="Tickets">TICKETS</a></p>
                </div>
                <div className="flex items-center pl-10 p-3 relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className="flex-grow pl-5 py-2 rounded-l-2xl border border-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        className="py-2 px-4 bg-blue-700 text-white rounded-none border-white rounded-2x1 hover:bg-yellow-500 transition"
                    >
                        Go
                    </button>
                    <button
                        className="py-2 px-9 ml-4 bg-blue-700 text-white rounded-2xl border-white rounded-2x1 hover:bg-yellow-500 transition"
                        onClick={loginOrRegister} // Call loginOrRegister function on button click
                    >
                        Login/Register
                    </button>
                </div>
                <div className="flex flex-row items-center justify-end w-full gap-12 bg-red-650 p-1">
                    <img src='rcblog.jpg' className="flex h-20 w-30" alt="Logo"></img>
                </div>
            </div>
            <div className="flex items-center justify-center bg-yellow-500" style={{ backgroundImage: `url(${heroBackgroundImage})`, backgroundSize: 'cover', paddingTop: '50%' }}>
                <h1 className="text-5xl font-bold text-white absolute"></h1>
            </div>
            
            {/* Carousel slider */}
            <Slider {...settings} style={sliderStyle}>
                <a href="https://en.wikipedia.org/wiki/Royal_Challengers_Bangalore" style={sliderHoverStyle}>
                    <h2 className="text-center text-3xl font-bold text-gray-800">HISTORY</h2>
                </a>
                <a href="https://en.wikipedia.org/wiki/Virat_Kohli" style={sliderHoverStyle}>
                    <h2 className="text-center text-3xl font-bold text-gray-800">VIRAT KOHLI</h2>
                </a>
                <a href="https://en.wikipedia.org/wiki/AB_de_Villiers" style={sliderHoverStyle}>
                    <h2 className="text-center text-3xl font-bold text-gray-800">AB DE VILLIERS</h2>
                </a>
            </Slider>
        </>
    );
}

export default Navbar;
