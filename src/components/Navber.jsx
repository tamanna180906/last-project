import React, { useState } from 'react'
import Container from './Container'
import nav from "../assets/nav.png"
import { FaBarsStaggered } from 'react-icons/fa6'
import { RxCross1 } from 'react-icons/rx'

function Navber() {
    let [show,setShow]=useState(false)
    return (
        <div className='py-5 bg-[#FFFFFF]'>
            <Container>
                <div className='lg:flex items-center'>
                    <div className='w-2/12 relative'>
                        <img src={nav}></img>
                    </div>
                    <div className='lg:w-10/12'>
                        <ul className={`lg:flex pt-5 lg:pt-0 justify-center text-center lg:bg-transparent gap-[40px] duration-300 ease-in-out ${show==true?" mt-0 opacity-0":
                            " bg-[#D8D8D8] h-[200px] lg:h-3 opacity-100"}`}>
                            <li className='font-[14px] text-[#767676] font-dm hover:text-[#262626]'>Home</li>
                            <li className='font-[14px] text-[#767676] font-dm hover:text-[#262626]'>Shop</li>
                            <li className='font-[14px] text-[#767676] font-dm hover:text-[#262626]'>About</li>
                            <li className='font-[14px] text-[#767676] font-dm hover:text-[#262626]'>Contacts</li>
                            <li className='font-[14px] text-[#767676] font-dm hover:text-[#262626]'>Journal</li>
                        </ul>
                    </div>
                    <div className='lg:hidden absolute top-[15px] right-2' onClick={()=>setShow(!show)}>
                        {show?  <RxCross1/>:<FaBarsStaggered/>}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navber