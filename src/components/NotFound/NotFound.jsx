import React from 'react'
import "../NotFound/NotFound.css"
const NotFound = () => {
  return (
    <>
        <div className=" py-[200px] bg-[url(/error.jpeg)] bg-cover bg-center">
            <h2 className='text-9xl text-amber-50 text-center font-Poppins font-semibold'>404
                <p className='text-7xl py-5 text-center font-Poppins font-semibold'>Page not found</p>
                <p className='text-3xl text-center font-Poppins font-semibold'>Sorry, we couldn’t find the page you’re looking for.</p>
            </h2>
        </div>
    </>
  )
}

export default NotFound
