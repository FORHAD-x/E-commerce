import { AiFillCloseCircle } from "react-icons/ai"; 
import React from 'react'

const SideBarItem = () => {
  return (
    <div className="flex items-center justify-between pb-5">
        <div className='w-25 rounded-xl overflow-hidden'>
            <img src="/product1.png" alt="" />
        </div>
        <div>
            <h3 className="font-Poppins font-normal text-black text-base pb-2">Asgaard sofa</h3>
            <p>1  X  <span className="font-Poppins font-medium text-brand text-[12px]">Rs. 250,000.00</span></p>
        </div>
        <AiFillCloseCircle color="#9F9F9F" size={20} cursor={"pointer"}/>
    </div>
  )
}

export default SideBarItem