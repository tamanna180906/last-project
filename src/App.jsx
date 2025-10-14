import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Shop from './pages/Shop'
import Leyouts from './components/Leyouts'
import ProductDetails from './components/ProductDetails'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import About from './pages/About'
import Journal from './pages/Journal'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Checkout from './pages/Checkout'


let router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route element={<Leyouts/>}>
      <Route index element={<Home/>}></Route>
      <Route path='/shop' element={<Shop/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/journal' element={<Journal/>}></Route>
      <Route path='/shop/:id' element={<ProductDetails/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/checkout' element={<Checkout/>}></Route>
    </Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
  </>
))

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
