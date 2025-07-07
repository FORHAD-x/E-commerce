import React from 'react'
import { GoTrophy } from "react-icons/go";
import { BsPatchCheck } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineSupportAgent } from "react-icons/md";


const Feature = () => {
  return (
    <>
    <section className='Feature bg-[#FAF3EA] py-[100px]'>
        <div className="container flex items-center justify-between gap-6">
            <div className='flex items-center gap-2.5 '>
                <GoTrophy className='w-15 h-15'/>
                <div>
                    <p className='font-Poppins font-semibold text-[#242424] text-[20px]'>High Quality</p>
                    <p className='font-Poppins font-medium text-[#898989] text-[16px]'>crafted from top materials</p>
                </div>
            </div>

             <div className='flex items-center gap-2.5 '>
                <BsPatchCheck className='w-15 h-15'/>
                <div>
                    <p className='font-Poppins font-semibold text-[#242424] text-[20px]'>Warranty Protection</p>
                    <p className='font-Poppins font-medium text-[#898989] text-[16px]'>crafted from top materials</p>
                </div>
            </div>
             <div className='flex items-center gap-2.5 '>
                <LiaShippingFastSolid className='w-15 h-15'/>
                <div>
                    <p className='font-Poppins font-semibold text-[#242424] text-[20px]'>Free Shipping</p>
                    <p className='font-Poppins font-medium text-[#898989] text-[16px]'>crafted from top materials</p>
                </div>
            </div>
             <div className='flex items-center gap-2.5 '>
                <MdOutlineSupportAgent className='w-15 h-15'/>
                <div>
                    <p className='font-Poppins font-semibold text-[#242424] text-[20px]'>24 / 7 Support</p>
                    <p className='font-Poppins font-medium text-[#898989] text-[16px]'>crafted from top materials</p>
                </div>
            </div>
        </div>

    </section>
    </>
  )
}

export default Feature