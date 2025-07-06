import React from 'react'
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const Filter = () => {
  return (
    <>
    <section className='Filter bg-[#F9F1E7] py-9'>
        <div className="container">
            <div className='flex items-center gap-5'>
                <p className="flex items-center gap-3 font-Poppins font-normal text-[20px]  text-black"><HiAdjustmentsHorizontal /><span>Filter</span></p>
                <p className="font-Poppins font-normal text-[16px] text-black pl-5 border-l-1 border-[#9F9F9F]">Showing 1–16 of 32 results</p>
            </div>

        </div>
    </section>
    </>
  )
}

export default Filter