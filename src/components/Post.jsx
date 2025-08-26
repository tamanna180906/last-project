import React, { useContext, useEffect, useState } from 'react'
import pro1 from "../assets/pro1.png"
import { FaHeart } from 'react-icons/fa6'
import { HiOutlineRefresh } from 'react-icons/hi'
import { FaShoppingCart } from 'react-icons/fa'
import { ApiData } from './ContextApi'
import { Link } from 'react-router-dom'


function Post({ allPage, filterCategory,active }) {
    let [allFilter, setAllFilter] = useState([])
    let [showAll, setShowAll] = useState(true)
    console.log(active);
    

    useEffect(() => {
        let filterCate = filterCategory.slice(0, 5);
        setAllFilter(filterCate);

    }, [filterCategory])

    let handleShow = () => {
        setAllFilter(filterCategory);
        setShowAll(false)

    }
    let handleLess = () => {
        let filterCate = filterCategory.slice(0, 5);
        setAllFilter(filterCate);
        setShowAll(true)

    }





    return (
        <>
            {filterCategory.length > 0 ? (
                <div>
                    <div className='flex flex-wrap justify-between'>
                        {allFilter.map((item) => (
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
                    </div>
                    {showAll ? filterCategory.length > 5 && <div onClick={handleShow}><h2>Show All</h2> </div> :
                        <div onClick={handleLess}><h2>Less Show</h2></div>}
                </div>
            ) : (
                <div className={`${active=="active"? "w-full" :"flex flex-wrap justify-between"}`}>
                    {allPage.map((item) => (
                        <div className='lg:w-[32%]  relative'>
                            <div className=' relative group'>
                                <Link to={`/shop/${item.id}`}>
                                    <img src={item.thumbnail} className='w-full' />
                                </Link>
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
                </div>
            )
            }
        </>
    )
}

export default Post