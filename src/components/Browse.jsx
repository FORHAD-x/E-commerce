<<<<<<< HEAD
import React from 'react'

const Browse = () => {
  return (
    <>
    {/* <section className='Browse container py-[56px]'>
        <div className='text-center'>
            <h2 className='text-primary font-Poppins font-bold text-[32px]'>Browse The Range</h2>
            <p className='text-secondary font-Poppins font-normal text-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='flex flex-wrap justify-center gap-5 pt-[62px]'>
          <div>
            <img src="public/Mask Group (1).png" alt="" />
            <h3 className='font-Poppins font-semibold text-primary text-[24px] text-center pt-[30px]'>Dining</h3>
          </div>
          <div>
            <img src="public/Image-living room.png" alt="" />
            <h3 className='font-Poppins font-semibold text-primary text-[24px] text-center pt-[30px]'>Living</h3>
          </div>
          <div>
            <img src="public/Mask Group.png" alt="" />
            <h3 className='font-Poppins font-semibold text-primary text-[24px] text-center pt-[30px]'>Bedroom</h3>
          </div>

        </div>

    </section> */}
    
    <section className="Browse container mx-auto px-4 py-[56px]">
        <div className="text-center">
          <h2 className="text-primary font-Poppins font-bold text-[24px] sm:text-[28px] md:text-[32px]">
            Browse The Range
          </h2>
          <p className="text-secondary font-Poppins font-normal text-[16px] sm:text-[18px] md:text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 pt-[50px]">
          {/* Card 1 */}
          <div className="  text-center">
            <img src="/public/Mask Group (1).png" alt="Dining"  />
            <h3 className="font-Poppins font-semibold text-primary text-[20px] md:text-[24px] pt-[20px]">
              Dining
            </h3>
          </div>

          {/* Card 2 */}
          <div className="  text-center">
            <img src="/public/Image-living room.png" alt="Living" />
            <h3 className="font-Poppins font-semibold text-primary text-[20px] md:text-[24px] pt-[20px]">
              Living
            </h3>
          </div>

          {/* Card 3 */}
          <div className="  text-center">
            <img src="/public/Mask Group.png" alt="Bedroom"  />
            <h3 className="font-Poppins font-semibold text-primary text-[20px] md:text-[24px] pt-[20px]">
              Bedroom
            </h3>
          </div>
        </div>
    </section>

    </>
  )
}

=======
import React from 'react'

const Browse = () => {
  return (
    <>
    <section className='Browse container py-[56px]'>
        <div className='text-center'>
            <h2 className='text-primary font-Poppins font-bold text-[32px]'>Browse The Range</h2>
            <p className='text-secondary font-Poppins font-normal text-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='flex flex-wrap justify-center gap-5 pt-[62px]'>
          <div>
            <img src="public/Mask Group (1).png" alt="" />
            <h3 className='font-Poppins font-semibold text-primary text-[24px] text-center pt-[30px]'>Dining</h3>
          </div>
          <div>
            <img src="public/Image-living room.png" alt="" />
            <h3 className='font-Poppins font-semibold text-primary text-[24px] text-center pt-[30px]'>Living</h3>
          </div>
          <div>
            <img src="public/Mask Group.png" alt="" />
            <h3 className='font-Poppins font-semibold text-primary text-[24px] text-center pt-[30px]'>Bedroom</h3>
          </div>

        </div>

    </section>
    </>
  )
}

>>>>>>> cc0cfb8fd75f72f4a5de9bfb17a1e9eb87c560bf
export default Browse