import { AiFillStar } from "react-icons/ai"; 
import React, { useState } from 'react'
import ProductSlide from "product-slide";
import CartButton from "../Cart/CartButton";

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

const [Size, setSize] = useState(null)
const [color, setColor] = useState("")
const [quantity, setQuantity] = useState(1)

  return (
    <section className='pt-9 pb-17 border-b-1 border-[#D9D9D9]'>
        <div className="container flex gap-20">
            <div className='w-1/2'>
                <ProductSlide settings={settings} api={API.images} />
            </div>
            <div className='w-1/2 border-b-1 border-[#D9D9D9]'>
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
                <p className="pl-5  border-l-1  border-[#9F9F9F] font-Poppins font-normal text-base text-primary">5 Customer Review</p>
            </div>
            <p className="w-[422px] font-Poppins font-normal text-base text-black">Setting the bar as one of the loudest speakers
               in its class, the Kilburn is a compact, 
               stout-hearted hero with a well-balanced
               audio which boasts a clear midrange and extended highs for a sound.
            </p>
            {/* size */}
            <div className="py-5">
                <p className="font-Poppins font-normal text-base text-secondary pb-3">Size</p>
                <div className="flex gap-4">
                    <label 
                     className={`${Size === "L" ? "bg-brand" : "bg-[#F9F1E7]"} w-[30px] h-[30px] cursor-pointer flex items-center justify-center font-Poppins font-normal text-base bg-[#F9F1E7] rounded-lg text-black`}>L 
                     <input onChange={(e) =>{setSize(e.target.value)}} className="hidden" type="radio" id="L" name="size" value="L"/>
                     </label>

                    <label 
                     className={`${Size === "XL" ? "bg-brand" : "bg-[#F9F1E7]"} w-[30px] h-[30px] cursor-pointer flex items-center justify-center font-Poppins font-normal text-base bg-[#F9F1E7] rounded-lg text-black`}>XL  
                     <input onChange={(e) =>{setSize(e.target.value)}} className="hidden" type="radio" id="XL" name="size" value="XL"/>
                     </label>

                    <label 
                     className={`${Size === "XS" ? "bg-brand" : "bg-[#F9F1E7]"} w-[30px] h-[30px] cursor-pointer flex items-center justify-center font-Poppins font-normal text-base bg-[#F9F1E7] rounded-lg text-black`}>XS 
                     <input onChange={(e) =>{setSize(e.target.value)}} className="hidden" type="radio" id="XS" name="size" value="XS"/>
                     </label>

                </div>
            </div>

             {/* color */}
            <div className="py-5">
                <p className="font-Poppins font-normal text-base text-secondary pb-3">Color</p>
                <div className="flex gap-4 items-center">

                  <label 
                     className={`w-8 h-8 p-1 ${color === "blue" && "border-2 border-[#ffafaf]"} rounded-full`} style={{background:"blue"}}> 
                     <input onChange={(e) =>{setColor(e.target.value)}} className="hidden" type="radio" id="blue" name="color" value="blue"/>
                     </label>

                    <label 
                     className={`w-8 h-8 p-1 ${color === "black" && "border-2 border-[#ffafaf]"} rounded-full`} style={{background:"black"}}> 
                     <input onChange={(e) =>{setColor(e.target.value)}} className="hidden" type="radio" id="black" name="color" value="black"/>
                     </label>

                    <label 
                     className={`w-8 h-8 p-1 ${color === "green" && "border-2 border-[#ffafaf]"} rounded-full`} style={{background:"green"}}>  
                     <input onChange={(e) =>{setColor(e.target.value)}} className="hidden" type="radio" id="green" name="color" value="green"/>
                     </label>

                </div>
            </div>
            {/* cart */}
            <div className="flex items-center gap-5 pt-3 pb-15">
              <div className="flex px-7.5 py-1.5 gap-5 cursor-pointer border-1 border-[#D9D9D9] rounded-[50px] font-Poppins font-normal text-base text-black w-fit">
                <button onClick={() => {quantity > 1 && setQuantity(quantity - 1)}}>-</button>
                <p className="font-medium w-5 flex  items-center justify-center">{quantity}</p>
                <button onClick={() => {setQuantity(quantity + 1)}}>+</button>
              </div>
              <div>
                <CartButton path={"/Add_to_cart"} title={"Add To Cart"}/>
              </div>
              <div>
                <CartButton path={"/Compare"} title={"+ Compare"}/>
              </div>
            </div>
            
            </div>
        </div>
    </section>
  )
}

export default Details