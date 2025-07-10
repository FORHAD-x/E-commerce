import React from 'react'
import { AiFillDelete } from 'react-icons/ai'

const CartItem = () => {
  return (
    <>
    <div>      
        <div className='pt-[55px] flex items-center'>
            <div className='w-25 overflow-hidden'>
                <img src="public/product2.png" alt="" />
            </div>
        <div className='flex items-center font-Poppins font-normal text-base text-primary pl-[40px] gap-[69px]'>
            <p>Asgaard sofa</p>
            <p>Rs. 250,000.00</p>
        </div>
        <div className='flex items-center pl-12 gap-[69px]'>
            <p className="py-1 px-3 border-1 border-primary rounded-lg ">1</p>
            <p className="font-Poppins font-normal text-base text-black">Rs. 250,000.00</p>
            <AiFillDelete color="#B88E2F" size={25}/>
        </div>
        </div>
    </div>
        
    </>
  )
}

export default CartItem