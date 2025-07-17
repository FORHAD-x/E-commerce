import React from 'react'
import Hero from '../components/Home/Hero'
import Browse from '../components/Home/Browse'
import Products from '../components/Home/Products'
import Explore from '../components/Home/Explore'
import Furniture from '../components/Home/Furniture'


const Home = () => {
  return (
    <>
    <Hero/>
    <Browse/>
    <Products/> 
    <Explore/>
    <Furniture/>
    {/* <Footer/> */}
    </>
  )
}

export default Home