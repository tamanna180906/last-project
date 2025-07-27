
import Container from './Container'
import off1 from "../assets/off1.png"
import off2 from "../assets/off2.png"
import off3 from "../assets/off3.png"
import off4 from "../assets/off4.png"
import React, { useState } from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
        >
            <FaAngleRight className='h-[50px] w-[50px] bg-[#00000033] rounded-[50%] absolute top-[35%] right-[20px] text-[#FFFFFF]' />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
        >
            <FaAngleLeft  className='h-[50px] w-[50px] bg-[#00000033] rounded-[50%] absolute top-[35%] left-[0px] text-[#FFFFFF] z-100' />
        </div>
    );
}


function Offers() {
    const [display, setDisplay] = useState(true);
    const [width, setWidth] = useState(600);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };



    return (
        <div className='py-[100px]'>
            <Container>
                <div className='text-[39px] font-bold font-dm'>Special Offers</div>
                <div className='pt-10'>
                    <Slider {...settings}>
                        <div className='w-3/12 pr-4 relative'>
                            <div className=' relative'>
                                <img src={off1}></img>
                            </div>
                            <h1 className='top-[20px] left-[20px] absolute py-[7px] px-[20px] bg-[#262626] text-[#FFFFFF] font-dm '>New</h1>
                            <div className='flex justify-between items-center pt-4'>
                                <h2 className='text-[18px] font-dm font-medium'>Basic Crew  Neck Tee</h2>
                                <p className='text-[14px] text-[#767676] font-dm'>$44.00</p>
                            </div>
                            <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
                        </div>
                        <div className='w-3/12 pr-4 relative'>
                            <div className=' relative'>
                                <img src={off2}></img>
                            </div>
                            <h1 className='top-[20px] left-[20px] absolute py-[7px] px-[20px] bg-[#262626] text-[#FFFFFF] font-dm '>New</h1>
                            <div className='flex justify-between items-center pt-4'>
                                <h2 className='text-[18px] font-dm font-medium'>Basic Crew  Neck Tee</h2>
                                <p className='text-[14px] text-[#767676] font-dm'>$44.00</p>
                            </div>
                            <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
                        </div>
                        <div className='w-3/12 pr-4 relative'>
                            <div className=' relative'>
                                <img src={off3}></img>
                            </div>
                            <h1 className='top-[20px] left-[20px] absolute py-[7px] px-[20px] bg-[#262626] text-[#FFFFFF] font-dm '>New</h1>
                            <div className='flex justify-between items-center pt-4'>
                                <h2 className='text-[18px] font-dm font-medium'>Basic Crew  Neck Tee</h2>
                                <p className='text-[14px] text-[#767676] font-dm'>$44.00</p>
                            </div>
                            <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
                        </div>
                        <div className='w-3/12 pr-4 relative'>
                            <div className=' relative'>
                                <img src={off4}></img>
                            </div>
                            <h1 className='top-[20px] left-[20px] absolute py-[7px] px-[20px] bg-[#262626] text-[#FFFFFF] font-dm '>New</h1>
                            <div className='flex justify-between items-center pt-4'>
                                <h2 className='text-[18px] font-dm font-medium'>Basic Crew  Neck Tee</h2>
                                <p className='text-[14px] text-[#767676] font-dm'>$44.00</p>
                            </div>
                            <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
                        </div>
                        <div className='w-3/12 pr-4 relative'>
                            <div className=' relative'>
                                <img src={off1}></img>
                            </div>
                            <h1 className='top-[20px] left-[20px] absolute py-[7px] px-[20px] bg-[#262626] text-[#FFFFFF] font-dm '>New</h1>
                            <div className='flex justify-between items-center pt-4'>
                                <h2 className='text-[18px] font-dm font-medium'>Basic Crew  Neck Tee</h2>
                                <p className='text-[14px] text-[#767676] font-dm'>$44.00</p>
                            </div>
                            <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
                        </div>
                        <div className='w-3/12 pr-4 relative'>
                            <div className=' relative'>
                                <img src={off2}></img>
                            </div>
                            <h1 className='top-[20px] left-[20px] absolute py-[7px] px-[20px] bg-[#262626] text-[#FFFFFF] font-dm '>New</h1>
                            <div className='flex justify-between items-center pt-4'>
                                <h2 className='text-[18px] font-dm font-medium'>Basic Crew  Neck Tee</h2>
                                <p className='text-[14px] text-[#767676] font-dm'>$44.00</p>
                            </div>
                            <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
                        </div>
                    </Slider>
                </div>
            </Container>
        </div>
    )
}

export default Offers