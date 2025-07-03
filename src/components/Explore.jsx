import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Explore = () => {
   var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <section className='Explore bg-[#FCF8F3] mb-[67px] py-11'>
      <div className="container flex gap-[42px] items-center">
        <div>
          <h2 className='font-bold font-Poppins text-primary text-[40px] leading-14'>50+ Beautiful rooms <br /> inspiration</h2>
          <p className='font-medium font-Poppins text-secondary text-[16px] pt-2 pb-6'>Our designer already made a lot of beautiful <br /> prototipe of rooms that inspire you</p>
          <div className='font-semibold font-Poppins text-white bg-brand px-9 py-3 text-[16px] inline-block'>
            <Link to={"/"} >Explore More</Link>
          </div>
        </div>
    
         <div className='relative'>
          <img src="public/expo-1.png" alt="" className=''/>
          <div>
            <div className='absolute left-[24px] bottom-[24px] px-5 py-8 bg-[rgba(255,255,255,0.72)] '>
              <h3 className='font-Poppins font-medium text-secondary text-[16px]'>01 —— Bed Room</h3>
              <h3 className='font-Poppins font-semibold text-primary text-[28px]'>Inner Peace</h3>
            </div>

            <div>
              <button className='absolute left-[231px] bottom-[24px] p-4 bg-brand text-white'><BsArrowRight size={24}/></button>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Explore