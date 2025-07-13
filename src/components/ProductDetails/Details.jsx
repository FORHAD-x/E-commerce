import { AiFillStar } from "react-icons/ai"; 
import React from 'react'
import ProductSlide from "product-slide";

const API = {
  images: [
    "https://i.imgur.com/QkIa5tT.jpeg",
    "https://i.imgur.com/jb5Yu0h.jpeg",
    "https://i.imgur.com/UlxxXyG.jpeg",
    "https://i.imgur.com/UlxxXyG.jpeg",
  ],
};

const Details = () => {
  const settings = {
  direction: "vertical", // or "horizontal"
  zoom: true,          // or false
};
  return (
    <section className='pt-9 pb-14'>
        <div className="container flex gap-20">
            <div className='w-1/2'>
                <ProductSlide settings={settings} api={API.images} />
            </div>
            <div className='w-1/2'>
            <h2 className='font-Poppins font-normal text-[42px] text-black'>Asgaard sofa</h2>
            <p className='font-Poppins font-medium text-[24px] text-secondary'>Rs. 250,000.00</p>
            <div className="flex items-center gap-5">
                <ul className="flex items-center gap-1.5 text-[#FFC700] py-4 ">
                    <li><AiFillStar  size={20}/></li>
                    <li><AiFillStar  size={20}/></li>
                    <li><AiFillStar  size={20}/></li>
                    <li><AiFillStar  size={20}/></li>
                    <li><AiFillStar size={20} /></li>
                </ul>
                <p className="pl-5  border-l-1  border-primary font-Poppins font-normal text-base text-primary">5 Customer Review</p>
            </div>
            <p className="w-[422px] font-Poppins font-normal text-base text-black">Setting the bar as one of the loudest speakers
               in its class, the Kilburn is a compact, 
               stout-hearted hero with a well-balanced
               audio which boasts a clear midrange and extended highs for a sound.
            </p>
            <div className="py-5">
                <p className="font-Poppins font-normal text-base text-secondary">Size</p>
                <div className="flex gap-4">
                    <label className="w-[30px] h-[30px] flex items-center justify-center font-Poppins font-normal text-base bg-[#F9F1E7] rounded-lg text-black">L</label>
                    <label className="w-[30px] h-[30px] flex items-center justify-center font-Poppins font-normal text-base bg-[#F9F1E7] rounded-lg text-black">XL</label>
                    <label className="w-[30px] h-[30px] flex items-center justify-center font-Poppins font-normal text-base bg-[#F9F1E7] rounded-lg text-black">XS</label>

                </div>
            </div>
            
            </div>
        </div>
    </section>
  )
}

export default Details