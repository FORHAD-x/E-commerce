import React from 'react'

const Browse = () => {
  return (
    <>
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
            <img src="/Mask Group (1).png" alt="Dining"  />
            <h3 className="font-Poppins font-semibold text-primary text-[20px] md:text-[24px] pt-[20px]">
              Dining
            </h3>
          </div>

          {/* Card 2 */}
          <div className="  text-center">
            <img src="/Image-living room.png" alt="Living" />
            <h3 className="font-Poppins font-semibold text-primary text-[20px] md:text-[24px] pt-[20px]">
              Living
            </h3>
          </div>

          {/* Card 3 */}
          <div className="  text-center">
            <img src="/Mask Group.png" alt="Bedroom"  />
            <h3 className="font-Poppins font-semibold text-primary text-[20px] md:text-[24px] pt-[20px]">
              Bedroom
            </h3>
          </div>
        </div>
    </section>

    </>
  )
}

export default Browse


