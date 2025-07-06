import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Home/Navbar'
import Footer from './components/Home/Footer'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout