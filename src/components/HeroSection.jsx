import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import knust_pic from "../assets/knust_pic.jpeg";
import knust_pic2 from "../assets/knust_pic2.jpg";
import aeroplane_img from "../assets/aeroplane_img.jpg";




const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    fade: true, // Fade transition
    arrows: true, // Show navigation arrows
    initialSlide: 0, // Start at the first slide
    adaptiveHeight: true, // Adjust height based on current slide
    centerMode: false, // Center the active slide
    centerPadding: '50px', // Padding on the sides of the centered slide
    variableWidth: false, // Adjust slide width based on content width
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <div className="flex flex-col items-center mt-6 lg:mt-2">
      <Slider {...settings} className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4">
      
      <div >
      <img
        src={knust_pic}
        alt="Knust Pic"
        className="object-cover w-full h-80"
      />
      </div>
      <div >
      <img
        src={knust_pic2}
        alt="Knust Pic1"
        className="object-cover w-full h-80"
      />
      </div>
      <div >
      <img
        src={aeroplane_img}
        alt="Knust Pic2"
        className="object-cover w-full h-80"
      />
      </div>
      </Slider>

      <h1 className="text-2xl sm:text-6xl lg:text-7xl text-center tracking-wide">
      Welcome To
        <span className="bg-gradient-to-r from-yellow-500 to-green-800 text-transparent bg-clip-text">
          {" "}
          CampusCare
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
         A website to ensure that facilities within the College of Engineering are managed efficiently by Facility Managers
      </p>
      <div className="flex justify-center my-10">
        <a
          href="/features"
          className="bg-gradient-to-r from-yellow-500 to-yellow-800 py-3 px-4 mx-3 rounded-md"
        >
          Features
        </a>
        <a href="/testimonials" className="py-3 px-4 mx-3 rounded-md border">
          Testimonials
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
