import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

function Leyouts() {
    return (
        <>
            <Navbar/>
            <Header />
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Leyouts