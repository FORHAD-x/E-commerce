import React from 'react'
import { Link } from 'react-router-dom'

const ProductItems = () => {
 
  return (
    <div className='cursor-pointer'>
      <div className='relative group'>
        <img src="/product1.png" alt="product" className='w-full' />
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[rgba(58,58,58,0.3)] group scale-0 group-hover:scale-100 transition-normal '>
          <button className='font-semibold font-Poppins text-brand cursor-pointer bg-white px-12 py-3 text-[16px] inline-block'>Add to cart</button>
        </div>
      </div>
        <Link to={"/shop/Details"} className='px-4 pt-5 pb-8 w-full inline-block bg-[#80808025]'>
            <h3 className='font-Poppins font-semibold text-primary text-[24px]'>Syltherine</h3>
            <p className='font-Poppins font-medium text-[#898989] text-[16px] py-2'>Stylish cafe chair</p>
            <div className='flex items-center gap-4 font-Poppins font-semibold text-primary text-[20px]'>
                <p>Rp 2.500.000</p>
                <p className='font-normal text-[#B0B0B0] text-[16px] line-through'>Rp 3.500.000</p>
            </div>
        </Link>
    </div>
  )
}

export default ProductItems