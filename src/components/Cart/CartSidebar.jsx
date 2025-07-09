import { IoIosCloseCircleOutline } from "react-icons/io"; 
import React from 'react'
import SideBarItem from "./SideBarItem";
import CartButton from "./CartButton";

const CartSidebar = ({close}) => {
  return (
    <>
    <div className=" fixed top-0 right-0  bg-[rgba(0,0,0,0.4)] w-full h-full">
        <div className=" py-7 px-9 w-fit ml-auto bg-white h-[570px] ">
          <div className="flex gap-[152px] items-center mb-10 pb-7 border-b-1 border-[#D9D9D9]">
            <h3 className="font-Poppins font-semibold text-black text-[24px]">Shopping Cart</h3>
            <IoIosCloseCircleOutline onClick={()=> close(false)} className="text-[#9F9F9F] cursor-pointer text-[25px]" />
          </div>
          <div className="h-70 overflow-y-scroll">
            <SideBarItem/>
            <SideBarItem/>
            <SideBarItem/>
            <SideBarItem/>
          </div>
          <div className="flex items-center pt-7 gap-25 font-Poppins font-semibold text-base pb-6 border-b border-primary">
            <p className="font-normal">Subtotal</p>
            <p className="text-brand">Rs. 520,000.00</p>
          </div>

          <div className=" flex items-center justify-center my-7 gap-3.5">
            <CartButton path={"/Cart"} title={"Cart"}/>
            <CartButton path={"/Checkout"} title={"Checkout"}/>
          </div>

        </div>
    </div>
    </>
  )
}

export default CartSidebar