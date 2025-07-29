import React, { useContext, useEffect } from 'react'
import Container from './Container'
import Slider from "react-slick";
import arr1 from "../assets/arr1.png"
import arr2 from "../assets/arr2.png"
import arr3 from "../assets/arr3.png"
import arr4 from "../assets/arr4.png"
import arr5 from "../assets/arr5.png"
import arr6 from "../assets/arr6.png"
import arr7 from "../assets/arr7.png"
import arr8 from "../assets/arr8.png"
import abs from "../assets/abs.png"
import { FaAngleRight, FaHeart } from 'react-icons/fa6';
import { HiOutlineRefresh } from 'react-icons/hi';
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaShoppingCart } from 'react-icons/fa';
import axios from 'axios';
import { ApiData } from './ContextApi';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
        >
            <FaLongArrowAltRight className='h-[50px] w-[50px] bg-[#00000033] rounded-[50%] absolute top-[35%] right-[20px] text-[#FFFFFF]' />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
        >
            <FaLongArrowAltLeft className='h-[50px] w-[50px] bg-[#00000033] rounded-[50%] absolute top-[35%] left-[0px] text-[#FFFFFF] z-100' />
        </div>
    );
}


function Arrivals() {
    // var settings = {
    //     dots: false,
    //     infinite: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     initialSlide: 0,
    //     nextArrow: <SampleNextArrow />,
    //     prevArrow: <SamplePrevArrow />,
    // };

    let data = useContext(ApiData)
    const newProduct = {
        slidesToShow: 4,
        slidesToScroll: 5,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }


    return (
        <div>
            <Container>
                <div className='text-[39px] font-bold font-dm'>New Arrivals</div>
                <div className="pt-10">
                    <Slider {...newProduct}>
                        {data.map((item) => (
                            <div className='w-3/12 pr-4 relative'>
                                <div className=' relative group'>
                                    <img src={item.thumbnail}></img>
                                    <div className='w-full right-0 bottom-0 p-[20px] absolute bg-[#FFFFFF] opacity-0 group-hover:opacity-100
                                 duration-300 ease-in-out'>
                                        <div className='flex justify-end gap-3 items-center'>
                                            <p className='text-[#767676] text-[16px] font-dm'>Add to Wish List</p>
                                            <FaHeart />
                                        </div>
                                        <div className='flex justify-end pt-3'>
                                            <HiOutlineRefresh />
                                        </div>
                                        <div className='flex justify-end items-center gap-3 pt-3'>
                                            <p className='font-bold text-[16px] font-dm'>Add to Cart</p>
                                            <FaShoppingCart />
                                        </div>
                                    </div>
                                </div>
                                <h1 className='top-[20px] left-[20px] absolute py-[7px] px-[20px] bg-[#262626] text-[#FFFFFF] font-dm '>10%</h1>
                                <div className='flex justify-between items-center pt-4'>
                                    <h2 className='text-[18px] font-dm font-medium'>{item.title}</h2>
                                    <p className='text-[14px] text-[#767676] font-dm'>${item.price}</p>
                                </div>
                                <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Container>
        </div>


        // <div>
        //     <Container>
        //         <div className='text-[39px] font-bold font-dm'>New Arrivals</div>
        //         <div className="pt-10">
        //             <Slider {...settings}>
        //                 <div className='w-3/12 pr-4 relative'>
        //                     <div className=' relative group'>
        //                         <img src={arr1}></img>
        //                         <div className='w-full right-0 bottom-0 p-[20px] absolute bg-[#FFFFFF] opacity-0 group-hover:opacity-100
        //                          duration-300 ease-in-out'>
        //                             <div className='flex justify-end gap-3 items-center'>
        //                                 <p className='text-[#767676] text-[16px] font-dm'>Add to Wish List</p>
        //                                 <FaHeart />
        //                             </div>
        //                             <div className='flex justify-end pt-3'>
        //                                 <HiOutlineRefresh />
        //                             </div>
        //                             <div className='flex justify-end items-center gap-3 pt-3'>
        //                                 <p className='font-bold text-[16px] font-dm'>Add to Cart</p>
        //                                 <FaShoppingCart />
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <h1 className='top-[20px] left-[20px] absolute py-[7px] px-[20px] bg-[#262626] text-[#FFFFFF] font-dm '>10%</h1>
        //                     <div className='flex justify-between items-center pt-4'>
        //                         <h2 className='text-[18px] font-dm font-medium'>Basic Crew  Neck Tee</h2>
        //                         <p className='text-[14px] text-[#767676] font-dm'>$44.00</p>
        //                     </div>
        //                     <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
        //                 </div>
        //                 <div className='w-3/12 pr-4 relative'>
        //                     <div className=' relative group'>
        //                         <img src={arr2}></img>
        //                         <div className='w-full right-0 bottom-0 p-[20px] absolute bg-[#FFFFFF] opacity-0 group-hover:opacity-100 duration-300 ease-in-out'>
        //                             <div className='flex justify-end gap-3 items-center'>
        //                                 <p className='text-[#767676] text-[16px] font-dm'>Add to Wish List</p>
        //                                 <FaHeart />
        //                             </div>
        //                             <div className='flex justify-end pt-3'>
        //                                 <HiOutlineRefresh />
        //                             </div>
        //                             <div className='flex justify-end items-center gap-3 pt-3'>
        //                                 <p className='font-bold text-[16px] font-dm'>Add to Cart</p>
        //                                 <FaShoppingCart />
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <h1 className='top-[20px] left-[20px] absolute py-[7px] px-[20px] bg-[#262626] text-[#FFFFFF] font-dm '>New</h1>
        //                     <div className='flex justify-between items-center pt-4'>
        //                         <h2 className='text-[18px] font-dm font-medium'>Basic Crew  Neck Tee</h2>
        //                         <p className='text-[14px] text-[#767676] font-dm'>$44.00</p>
        //                     </div>
        //                     <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
        //                 </div>
        //                 <div className='w-3/12 pr-4 relative'>
        //                     <div className=' relative group'>
        //                         <img src={arr3}></img>
        //                         <div className='w-full right-0 bottom-0 p-[20px] absolute bg-[#FFFFFF] opacity-0 group-hover:opacity-100 duration-300 ease-in-out'>
        //                             <div className='flex justify-end gap-3 items-center'>
        //                                 <p className='text-[#767676] text-[16px] font-dm'>Add to Wish List</p>
        //                                 <FaHeart />
        //                             </div>
        //                             <div className='flex justify-end pt-3'>
        //                                 <HiOutlineRefresh />
        //                             </div>
        //                             <div className='flex justify-end items-center gap-3 pt-3'>
        //                                 <p className='font-bold text-[16px] font-dm'>Add to Cart</p>
        //                                 <FaShoppingCart />
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <h1 className='top-[20px] left-[20px] absolute py-[7px] px-[20px] bg-[#262626] text-[#FFFFFF] font-dm '>New</h1>
        //                     <div className='flex justify-between items-center pt-4'>
        //                         <h2 className='text-[18px] font-dm font-medium'>Basic Crew  Neck Tee</h2>
        //                         <p className='text-[14px] text-[#767676] font-dm'>$44.00</p>
        //                     </div>
        //                     <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
        //                 </div>
        //                 <div className='w-3/12 pr-4 relative'>
        //                     <div className=' relative group'>
        //                         <img src={arr4}></img>
        //                         <div className='w-full right-0 bottom-0 p-[20px] absolute bg-[#FFFFFF] opacity-0 group-hover:opacity-100 duration-300 ease-in-out'>
        //                             <div className='flex justify-end gap-3 items-center'>
        //                                 <p className='text-[#767676] text-[16px] font-dm'>Add to Wish List</p>
        //                                 <FaHeart />
        //                             </div>
        //                             <div className='flex justify-end pt-3'>
        //                                 <HiOutlineRefresh />
        //                             </div>
        //                             <div className='flex justify-end items-center gap-3 pt-3'>
        //                                 <p className='font-bold text-[16px] font-dm'>Add to Cart</p>
        //                                 <FaShoppingCart />
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <h1 className='top-[20px] left-[20px] absolute py-[7px] px-[20px] bg-[#262626] text-[#FFFFFF] font-dm '>New</h1>
        //                     <div className='flex justify-between items-center pt-4'>
        //                         <h2 className='text-[18px] font-dm font-medium'>Basic Crew  Neck Tee</h2>
        //                         <p className='text-[14px] text-[#767676] font-dm'>$44.00</p>
        //                     </div>
        //                     <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
        //                 </div>
        //                 <div className='w-3/12 pr-4 relative'>
        //                     <div className=' relative group'>
        //                         <img src={arr5}></img>
        //                         <div className='w-full right-0 bottom-0 p-[20px] absolute bg-[#FFFFFF] opacity-0 group-hover:opacity-100 duration-300 ease-in-out'>
        //                             <div className='flex justify-end gap-3 items-center'>
        //                                 <p className='text-[#767676] text-[16px] font-dm'>Add to Wish List</p>
        //                                 <FaHeart />
        //                             </div>
        //                             <div className='flex justify-end pt-3'>
        //                                 <HiOutlineRefresh />
        //                             </div>
        //                             <div className='flex justify-end items-center gap-3 pt-3'>
        //                                 <p className='font-bold text-[16px] font-dm'>Add to Cart</p>
        //                                 <FaShoppingCart />
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <h1 className='top-[20px] left-[20px] absolute py-[7px] px-[20px] bg-[#262626] text-[#FFFFFF] font-dm '>New</h1>
        //                     <div className='flex justify-between items-center pt-4'>
        //                         <h2 className='text-[18px] font-dm font-medium'>Basic Crew  Neck Tee</h2>
        //                         <p className='text-[14px] text-[#767676] font-dm'>$44.00</p>
        //                     </div>
        //                     <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
        //                 </div>
        //                 <div className='w-3/12 pr-4 relative'>
        //                     <div className=' relative group'>
        //                         <img src={arr6}></img>
        //                         <div className='w-full right-0 bottom-0 p-[20px] absolute bg-[#FFFFFF] opacity-0 group-hover:opacity-100 duration-300 ease-in-out'>
        //                             <div className='flex justify-end gap-3 items-center'>
        //                                 <p className='text-[#767676] text-[16px] font-dm'>Add to Wish List</p>
        //                                 <FaHeart />
        //                             </div>
        //                             <div className='flex justify-end pt-3'>
        //                                 <HiOutlineRefresh />
        //                             </div>
        //                             <div className='flex justify-end items-center gap-3 pt-3'>
        //                                 <p className='font-bold text-[16px] font-dm'>Add to Cart</p>
        //                                 <FaShoppingCart />
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <h1 className='top-[20px] left-[20px] absolute py-[7px] px-[20px] bg-[#262626] text-[#FFFFFF] font-dm '>New</h1>
        //                     <div className='flex justify-between items-center pt-4'>
        //                         <h2 className='text-[18px] font-dm font-medium'>Basic Crew  Neck Tee</h2>
        //                         <p className='text-[14px] text-[#767676] font-dm'>$44.00</p>
        //                     </div>
        //                     <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
        //                 </div>
        //                 <div className='w-3/12 pr-4 relative'>
        //                     <div className=' relative group'>
        //                         <img src={arr7}></img>
        //                         <div className='w-full right-0 bottom-0 p-[20px] absolute bg-[#FFFFFF] opacity-0 group-hover:opacity-100 duration-300 ease-in-out'>
        //                             <div className='flex justify-end gap-3 items-center'>
        //                                 <p className='text-[#767676] text-[16px] font-dm'>Add to Wish List</p>
        //                                 <FaHeart />
        //                             </div>
        //                             <div className='flex justify-end pt-3'>
        //                                 <HiOutlineRefresh />
        //                             </div>
        //                             <div className='flex justify-end items-center gap-3 pt-3'>
        //                                 <p className='font-bold text-[16px] font-dm'>Add to Cart</p>
        //                                 <FaShoppingCart />
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <h1 className='top-[20px] left-[20px] absolute py-[7px] px-[20px] bg-[#262626] text-[#FFFFFF] font-dm '>New</h1>
        //                     <div className='flex justify-between items-center pt-4'>
        //                         <h2 className='text-[18px] font-dm font-medium'>Basic Crew  Neck Tee</h2>
        //                         <p className='text-[14px] text-[#767676] font-dm'>$44.00</p>
        //                     </div>
        //                     <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
        //                 </div>
        //                 <div className='w-3/12 pr-4 relative'>
        //                     <div className=' relative group'>
        //                         <img src={arr8}></img>
        //                         <div className='w-full right-0 bottom-0 p-[20px] absolute bg-[#FFFFFF] opacity-0 group-hover:opacity-100 duration-300 ease-in-out'>
        //                             <div className='flex justify-end gap-3 items-center'>
        //                                 <p className='text-[#767676] text-[16px] font-dm'>Add to Wish List</p>
        //                                 <FaHeart />
        //                             </div>
        //                             <div className='flex justify-end pt-3'>
        //                                 <HiOutlineRefresh />
        //                             </div>
        //                             <div className='flex justify-end items-center gap-3 pt-3'>
        //                                 <p className='font-bold text-[16px] font-dm'>Add to Cart</p>
        //                                 <FaShoppingCart />
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <h1 className='top-[20px] left-[20px] absolute py-[7px] px-[20px] bg-[#262626] text-[#FFFFFF] font-dm '>New</h1>
        //                     <div className='flex justify-between items-center pt-4'>
        //                         <h2 className='text-[18px] font-dm font-medium'>Basic Crew  Neck Tee</h2>
        //                         <p className='text-[14px] text-[#767676] font-dm'>$44.00</p>
        //                     </div>
        //                     <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
        //                 </div>
        //             </Slider>
        //         </div>

        //         <div className='pt-[100px]'>
        //             <img src={abs}></img>
        //         </div>
        //     </Container>
        // </div>
    )
}

export default Arrivals