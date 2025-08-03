import React from 'react'
import Navber from '../components/Navber'
import Header from '../components/Header'
import Sale from '../components/Sale'
import Banner from '../components/Banner'
import Icone from '../components/Icone'
import Arrivals from '../components/Arrivals'
import Offers from '../components/Offers'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <Banner/>
    <Icone/>
    <Sale/>
    <Arrivals/>
    <Offers/>
    </>
  )
}

export default Home