import React from 'react'
import Container from './Container'
import sale1 from "../assets/sale1.png"
import sale2 from "../assets/sale2.png"
import sale3 from "../assets/sale3.png"

function Sale() {
  return (
    <div className='py-[100px]'>
        <Container>
            <div className='flex justify-between gap-5'>
                <div className='w-6/12'>
                <img src={sale1}></img>
                </div>
                <div className='w-6/12'>
                <div className=''>
                    <img className='w-full' src={sale2}></img>
                </div>
                <div className="pt-8">
                    <img className='w-full' src={sale3}></img>
                </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Sale