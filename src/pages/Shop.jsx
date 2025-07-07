import React from 'react'
import Banner from '../components/Shop/Banner'
import Filter from '../components/Filter'
import AllProducts from '../components/Shop/AllProducts'
import { Features } from 'tailwindcss'
import Feature from '../components/Feature'

const Shop = () => {
  return (
    <>
    <Banner/>
    <Filter/>
    <AllProducts itemsPerPage={8}/>
    <Feature/>
    </>
  )
}

export default Shop