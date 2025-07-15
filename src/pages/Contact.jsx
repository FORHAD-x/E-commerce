import { BsClockFill } from "react-icons/bs"; 
import { HiPhone } from "react-icons/hi"; 
import { MdLocationOn } from "react-icons/md"; 
import React from 'react'
import PageBanner from '../components/Utilities/PageBanner'
import Feature from "../components/Utilities/Feature";

const Contact = () => {
  return (
    <>
      <section>
        <PageBanner/>
        <div className="container py-20">
            {/* title */}
          <div className="text-center">
            <h2 className="font-poppins font-semibold text-[36px] text-black ">
              Get In Touch With Us
            </h2>
            <p className="font-poppins font-normal text-[16px] pt-2 text-[#9F9F9F] w-[644px] flex mx-auto ">
              For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
            </p>
          </div>
          {/* info */}
          <div className="flex justify-evenly pt-20">
            {/* contact_info */}
            <div className="contact_info flex flex-col gap-10">
                <div className="flex items-baseline gap-4 ">
                    <MdLocationOn size={20}/>
                    <div>
                        <h3 className='font-Poppins font-medium text-[24px] text-black'>Address</h3>
                        <p className='w-[170px] font-normal text-[16px]'>236 5th SE Avenue, New York NY10000, United States</p>
                    </div>
                </div>

                <div className="flex items-baseline gap-4 ">
                    <HiPhone  size={20}/>
                    <div>
                        <h3 className='font-Poppins font-medium text-[24px] text-black'>Phone</h3>
                        <p className='w-[170px] font-normal text-[16px]'>Mobile: +(84) 546-6789 Hotline: +(84) 456-6789</p>
                    </div>
                </div>

                <div className="flex items-baseline gap-4 ">
                    <BsClockFill size={20}/>
                    <div>
                        <h3 className='font-Poppins font-medium text-[24px] text-black'>Working Time</h3>
                        <p className='w-[170px] font-normal text-[16px]'>Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00</p>
                    </div>
                </div>
            </div>
            {/* input box */}
            <div className="flex flex-col gap-9">
                <input className="border-1 border-secondary rounded-xl p-5  w-100" type="text"  placeholder="Your name"/>
                <input className="border-1 border-secondary rounded-xl p-5  w-100" type="text"  placeholder="Email address"/>
                <input className="border-1 border-secondary rounded-xl p-5  w-100" type="text"  placeholder="Subject"/>
                <textarea className="border-1 border-secondary rounded-xl p-5  w-100" type="Message"  placeholder="Message"/>
                <div>
                    <button className="px-20 py-4 bg-brand rounded-lg font-Poppins font-normal text-base text-white">Submit</button>
                </div>
            </div>

          </div>
        </div>
        <Feature/>
      </section>
    </>
  )
}

export default Contact
