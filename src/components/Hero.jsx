import React from 'react'

const Hero = () => {
  return (
    <>
    <section className='Hero bg-[url(/hero.png)] pt-[150px] pb-[116px] '>
    <div className='container'>
       <div className='w-1/2 bg-[#FFF3E3] ml-auto pt-[60px] pb-[37px] px-[40px] rounded-[10px]'>
          <h3 className='font-Poppins font-semibold text-primary text-[16px] tracking-[3px]'>New Arrival</h3>
          <h1 className='font-Poppins font-bold text-brand text-[52px] leading-[65px] pb-4'>Discover Our <br /> New Collection</h1>
          <p className='font-Poppins font-medium text-primary text-[16px] pb-[46px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> elit tellus, luctus nec ullamcorper mattis.</p>
          <button className='font-Poppins cursor-pointer font-bold text-white text-[18px] py-[25px] px-[72px] bg-brand '>BUY NOW</button>
       </div>
    </div>
    </section>
    </>
  )
}

export default Hero