<<<<<<< HEAD
import React from 'react'

const Productitems = () => {
  return (
    <div className='relative group'>
        <img src="public/product1.png" alt="product" className='w-full' />
        <div className='px-4 pt-5 pb-8 w-full'>
            <h3 className='font-Poppins font-semibold text-primary text-[24px]'>Syltherine</h3>
            <p className='font-Poppins font-medium text-[#898989] text-[16px] py-2'>Stylish cafe chair</p>
            <div className='flex items-center gap-4 font-Poppins font-semibold text-primary text-[20px]'>
                <p>Rp 2.500.000</p>
                <p className='font-normal text-[#B0B0B0] text-[16px] line-through'>Rp 3.500.000</p>
            </div>
        </div>

        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[rgba(58,58,58,0.3)] group scale-0 group-hover:scale-100 transition-normal '>
          <button className='font-semibold font-Poppins text-brand cursor-pointer bg-white px-12 py-3 text-[16px] inline-block'>Add to cart</button>
        </div>

    </div>
  )
}

=======
import React from 'react'

const Productitems = () => {
  return (
    <div className='relative group'>
        <img src="public/product1.png" alt="product" className='w-full' />
        <div className='px-4 pt-5 pb-8 w-full'>
            <h3 className='font-Poppins font-semibold text-primary text-[24px]'>Syltherine</h3>
            <p className='font-Poppins font-medium text-[#898989] text-[16px] py-2'>Stylish cafe chair</p>
            <div className='flex items-center gap-4 font-Poppins font-semibold text-primary text-[20px]'>
                <p>Rp 2.500.000</p>
                <p className='font-normal text-[#B0B0B0] text-[16px] line-through'>Rp 3.500.000</p>
            </div>
        </div>

        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[rgba(58,58,58,0.3)] group scale-0 group-hover:scale-100 transition-normal '>
          <button className='font-semibold font-Poppins text-brand cursor-pointer bg-white px-12 py-3 text-[16px] inline-block'>Add to cart</button>
        </div>

    </div>
  )
}

>>>>>>> cc0cfb8fd75f72f4a5de9bfb17a1e9eb87c560bf
export default Productitems