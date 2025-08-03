import React from 'react'
import Header from './Header'
import Navber from './Navber'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Leyouts() {
    return (
        <>
            <Navber />
            <Header />
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Leyouts