import React, { useContext } from 'react'
import pro1 from "../assets/pro1.png"
import { FaHeart } from 'react-icons/fa6'
import { HiOutlineRefresh } from 'react-icons/hi'
import { FaShoppingCart } from 'react-icons/fa'
import { ApiData } from './ContextApi'


function Post({allPage,filterCategory}) {

    
    


    return (
        <>
        {filterCategory.length> 0 ?
               filterCategory.map((item)=>(
            <div className='lg:w-[32%]  relative'>
                <div className=' relative group'>
                    <img src={item.thumbnail} className='w-full' />
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
                <h1 className='top-[20px] left-[20px] absolute py-[7px] px-[20px] bg-[#262626] text-[#FFFFFF] font-dm '>{item.discountPercentage}</h1>
                <div className='flex justify-between items-center pt-4'>
                    <h2 className='text-[18px] font-dm font-medium'>{item.title}</h2>
                    <p className='text-[14px] text-[#767676] font-dm'>${item.price}</p>
                </div>
                <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
            </div>
        ))
        :allPage.map((item)=>(
            <div className='lg:w-[32%]  relative'>
                <div className=' relative group'>
                    <img src={item.thumbnail} className='w-full' />
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
                <h1 className='top-[20px] left-[20px] absolute py-[7px] px-[20px] bg-[#262626] text-[#FFFFFF] font-dm '>{item.discountPercentage}</h1>
                <div className='flex justify-between items-center pt-4'>
                    <h2 className='text-[18px] font-dm font-medium'>{item.title}</h2>
                    <p className='text-[14px] text-[#767676] font-dm'>${item.price}</p>
                </div>
                <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
            </div>
        ))}
        {/* {allPage.map((item)=>(
            <div className='lg:w-[32%]  relative'>
                <div className=' relative group'>
                    <img src={item.thumbnail} className='w-full' />
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
                <h1 className='top-[20px] left-[20px] absolute py-[7px] px-[20px] bg-[#262626] text-[#FFFFFF] font-dm '>{item.discountPercentage}</h1>
                <div className='flex justify-between items-center pt-4'>
                    <h2 className='text-[18px] font-dm font-medium'>{item.title}</h2>
                    <p className='text-[14px] text-[#767676] font-dm'>${item.price}</p>
                </div>
                <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
            </div>
        ))} */}
        </>
    )
}

export default Post