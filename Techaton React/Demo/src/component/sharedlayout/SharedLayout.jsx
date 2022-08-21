import React from 'react'
import {Outlet} from 'react-router-dom'
import NavBar from '../navbar/NavBar'
import Footer from './Footer'

const SharedLayout = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default SharedLayout