import React from 'react'
import Banner from '../components/Shop/Banner'
import Filter from '../components/Utilities/Filter'
import AllProducts from '../components/Shop/AllProducts'
import Feature from '../components/Utilities/Feature'

const Shop = () => {
  return (
    <>
    <Banner title={"Shop"}/>
    <Filter/>
    <AllProducts itemsPerPage={12}/>
    <Feature/>
    </>
  )
}

export default Shop