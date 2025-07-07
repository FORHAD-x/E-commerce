import React from 'react'
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const Filter = () => {
  return (
    <>
    <section className='Filter bg-[#F9F1E7] py-9'>
        <div className="container flex justify-between items-center">
            <div className='flex items-center gap-5'>
                <p className="flex items-center gap-3 font-Poppins font-normal text-[20px]  text-black"><HiAdjustmentsHorizontal /><span>Filter</span></p>
                <p className="font-Poppins font-normal text-[16px] text-black pl-5 border-l-1 border-[#9F9F9F]">Showing 1–16 of 32 results</p>
            </div>
            <div className='flex items-center gap-8'>
              <div>
                <label className="font-Poppins font-normal text-[20px]  text-black pr-4">Show</label>
                <input type="number" defaultValue="16" className='py-4 w-[55px] bg-white font-Poppins font-normal text-[20px] outline-0 text-center text-[#9F9F9F]'/>
              </div>
              <div className='flex gap-4 items-center'>
                <label className="font-Poppins font-normal text-[20px]  text-black">Short by</label>
                <select className='py-3 pl-8 pr-10 bg-white'>
                  <option value="Default" className='text-[#9F9F9F] font-Poppins font-normal text-[20px]'>Default</option>
                </select>
              </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default Filter