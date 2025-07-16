import React from 'react'

const RecentPost = ({img ,title ,date}) => {
  return (
    <div className='flex gap-3 items-center'>
        <img src={img} alt="image" />
        <div className='font-Poppins font-sm text-base text-black'>
            <h3>{title}</h3>
            <p className='text-[12px] text-secondary'>{date}</p>
        </div>
    </div>
  )
}

export default RecentPost