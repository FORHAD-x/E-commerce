import { AiFillDelete } from "react-icons/ai"; 
import React from 'react'
import Banner from '../components/Shop/Banner'
import PageBanner from '../components/PageBanner'
import Feature from '../components/Feature'

const Cart = () => {
  return (
    <>
     <PageBanner title={"Cart"}/>
        <div className="container py-18">
            <div >
                <ul className='w-[800px] bg-[#F9F1E7] font-Poppins font-medium text-base flex gap-35 py-4 px-35'>
                    <li className='flex gap-27'>
                        <p>Product</p>
                        <p>Price</p>
                    </li>
                    <li className='flex gap-9'>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                    </li>
                </ul>
            </div>
            <div className='pt-[55px] flex items-center'>
                <div className='w-25 overflow-hidden'>
                    <img src="public/product2.png" alt="" />
                </div>
                <div className='flex items-center font-Poppins font-normal text-base text-primary pl-[40px] gap-[69px]'>
                    <p>Asgaard sofa</p>
                    <p>Rs. 250,000.00</p>
                </div>
                <div className='flex items-center pl-[114px] gap-[69px]'>
                    <p className="py-1 px-3 border-1 border-primary rounded-lg">1</p>
                    <p className="font-Poppins font-normal text-base text-black">Rs. 250,000.00</p>
                    <AiFillDelete color="#B88E2F" size={25}/>
                </div>
            </div>
        </div>
     <Feature/>
    </>
  )
}

export default Cart