import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    {/* <section className='Footer py-10'>
        <div className="container flex gap-[136px] pb-11 border-b-1 border-[#D9D9D9]">
            <div className='left'>
                <h3 className='font-Poppins font-bold text-black text-[24px]'>Funiro.</h3>
                <p className='font-Poppins font-normal text-[#9F9F9F] text-[16px]'>400 University Drive Suite 200 Coral <br /> Gables , <br />FL 33134 USA</p>
            </div>
            <div className='right w-3/4 flex gap-[144px]'>

            <div>
                <h3 className='font-Poppins font-medium text-[#9F9F9F] text-[16px] pb-5'>Links</h3>
                <ul className='flex flex-col gap-3'>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/"}>Shop</Link>
                    <Link to={"/"}>About</Link>
                    <Link to={"/"}>Contact</Link>
                </ul>
            </div>

            <div>
                <h3 className='font-Poppins font-medium text-[#9F9F9F] text-[16px] pb-5'>Help</h3>
                <ul className='flex flex-col gap-3'>
                    <Link to={"/"}>Payment Options</Link>
                    <Link to={"/"}>Returns</Link>
                    <Link to={"/"}>Privacy Policies</Link>
                </ul>
            </div>

            <div>
                <h3 className='font-Poppins font-medium text-[#9F9F9F] text-[16px] pb-5'>Newsletter</h3>
                <div className='flex gap-3'>
                    <input type="email" placeholder='Enter Your Email Address' className='outline-none pb-1 border-b-1' />
                    <button className='pb-1 border-b-1' >SUBSCRIBE</button>
                </div>
            </div>


            </div>
        </div>
        <h3 className='container pt-9'> ©2025 Furniro. All rights reverved</h3>
    </section> */}
    <section className="Footer my-10 bg-white">
  <div className="container mx-auto px-4 pb-11 border-b border-[#D9D9D9] flex flex-col lg:flex-row gap-10 lg:gap-[136px]">
    
    {/* Left Side */}
    <div className="lg:w-1/3">
      <h3 className="font-Poppins font-bold text-black text-[20px] md:text-[24px]">Funiro.</h3>
      <p className="font-Poppins font-normal text-[#9F9F9F] text-[14px] md:text-[16px] mt-3 leading-relaxed">
        400 University Drive Suite 200 <br />
        Coral Gables, <br />
        FL 33134 USA
      </p>
    </div>

    {/* Right Side */}
    <div className="lg:w-2/3 flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-12 lg:gap-[144px]">
      
      {/* Links */}
      <div className="font-Poppins font-medium text-[#000000] text-[16px]">
        <h3 className="font-Poppins font-medium text-[#9F9F9F] text-[16px] pb-4">Links</h3>
        <ul className="flex flex-col gap-4 text-sm">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </ul>
      </div>

      {/* Help */}
      <div className="font-Poppins font-medium text-[#000000] text-[16px]">
        <h3 className="font-Poppins font-medium text-[#9F9F9F] text-[16px] pb-4">Help</h3>
        <ul className="flex flex-col gap-4 text-sm">
          <Link to="/Payment">Payment Options</Link>
          <Link to="/Returns">Returns</Link>
          <Link to="/Privacy">Privacy Policies</Link>
        </ul>
      </div>

      {/* Newsletter */}
      <div className="w-full sm:w-auto ">
        <h3 className="font-Poppins font-medium text-[#9F9F9F] text-[16px] pb-4">Newsletter</h3>
        <div className="flex items-center gap-3 py-1">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="outline-none text-sm w-full bg-transparent pb-1 border-b-1"
          />
          <button className="text-sm font-semibold text-black pb-1 border-b-1">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="container mx-auto px-4 pt-8 font-Poppins font-normal text-[#000000] text-[16px] ">
    ©2025 Furniro. All rights reserved.
  </div>
</section>

    </>
  )
}

export default Footer