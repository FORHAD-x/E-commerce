import { AiFillDelete } from "react-icons/ai"; 
import React from 'react'
import Banner from '../components/Shop/Banner'
import PageBanner from '../components/PageBanner'
import Feature from '../components/Feature'
import CartItem from "../components/Cart/CartItem";
import CartButton from "../components/Cart/CartButton";

const Cart = () => {
  return (
    <>
     <PageBanner title={"Cart"}/>
        <div className="container py-18 flex gap-8">
            <div>
                <div className='w-[800px] bg-[#F9F1E7] font-Poppins font-medium text-base flex gap-28 py-4 px-35'>
                    <div className='flex gap-27'>
                        <p>Product</p>
                        <p>Price</p>
                    </div>
                    <div className='flex gap-9'>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                    </div>
                </div>
                <CartItem/>
                <CartItem/>
            </div>          
            <div className="w-[393px] h-[393px] bg-[#F9F1E7]">
                <h3 className="font-Poppins font-semibold text-[32px] pt-4 text-center text-black">Cart Totals</h3>
                <div className="flex justify-between px-[75px] pt-15 pb-8  ">
                    <p className="font-Poppins font-medium text-base  text-black">Subtotal</p>
                    <span className="font-Poppins font-normal text-base  text-secondary">Rs. 250,000.00</span>
                </div>

                <div className="flex px-[75px] pb-12 items-center justify-between ">
                    <p className="font-Poppins font-medium text-base  text-black">Total</p>
                    <span className="font-Poppins font-medium text-[20px]  text-brand">Rs. 250,000.00</span>
                </div>
                <div className="text-center">
                   <CartButton  path={"/Checkout"} title={"Checkout"} /> 
                </div>
                

            </div>
        </div>
     <Feature/>
    </>
  )
}

export default Cart