import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import NextArrow from "./NextArrow";
// import "slick-carousel/slick/slick-theme.css";

const Explore = () => {
   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <span></span>

  };
  return (
    <section className="Explore bg-[#FCF8F3] mb-[67px] py-11">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row gap-10 items-center">
        {/* Left Content */}
        <div className="w-full lg:w-2/5 text-center lg:text-left">
          <h2 className="font-bold font-Poppins text-primary text-[28px] sm:text-[32px] lg:text-[40px] leading-tight">
            50+ Beautiful rooms <br className="hidden sm:block" /> inspiration
          </h2>
          <p className="font-medium font-Poppins text-secondary text-[16px] pt-2 pb-6">
            Our designer already made a lot of beautiful <br className="hidden sm:block" />
            prototipe of rooms that inspire you
          </p>
          <Link
            to="/"
            className="font-semibold font-Poppins text-white bg-brand px-7 py-3 text-[16px] inline-block hover:bg-opacity-90 transition"
          >
            Explore More
          </Link>
        </div>

        {/* Right Slider */}
        <div className="w-full lg:w-3/5">
          <Slider {...settings}>
            <div className="slide_item">
              <img src="/expo-1.png" alt="Room 1" className="w-full h-auto rounded" />
            </div>
            <div className="slide_item">
              <img src="/expo-2.png" alt="Room 2" className="w-full h-auto rounded" />
            </div>
            <div className="slide_item">
              <img src="/expo-3.png" alt="Room 3" className="w-full h-auto rounded" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
    
  )
}

export default Explore

