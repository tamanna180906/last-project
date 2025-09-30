import React, { useEffect, useState } from 'react'
import Container from './Container'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import dtl from "../assets/dtl.png"
import { CiStar } from 'react-icons/ci'
import { FaMinus } from 'react-icons/fa6'
import { HiPlusSm } from 'react-icons/hi'
import { ApiData } from './ContextApi'
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io'
import { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from './slice/productSlice'

function ProductDetails() {
    window.scrollTo(0, 0)
    let [show, setShow] = useState(false)
    let [showTo, setShowTo] = useState(false)
    let [singleProducts, setSingleProducts] = useState([])
    let productId = useParams()
    let info = useContext(ApiData)
    let dispatch = useDispatch()

    let singleProduct = () => {
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
            setSingleProducts(response.data);

        })
    }


    useEffect(() => {
        singleProduct()
    }, [])


    let clientRating = Array.from({ length: 5 }, (_, index) => {
        let number = index + 0.5
        return (
            singleProducts.rating > index + 1 ? <IoMdStar />
                : singleProducts.rating > number ? <IoMdStarHalf /> :
                    <IoMdStarOutline />
        )
    })

    let mainPrice = (singleProducts.price / 100) * singleProducts.discountPercentage;

    let mulPrice = singleProducts.price - mainPrice


    // let handleCart = (item) => {

    //     dispatch(addToCart({ ...item, qun: 1 }))
    // }

    let handleAddtoCart = (item) => {
        dispatch(addToCart({ ...item, qun: 1 }))

    }


    return (
        <>
            <div className='py-[100px]'>
                <Container>
                    <div>
                        <div className='w-[30%] mx-auto'>
                            <img src={singleProducts.thumbnail}></img>
                            <h2 className='font-dm font-bold text-[16px] text-[#262626] text-center'>
                                {singleProducts.title}
                            </h2>
                        </div>
                        <div className='w-[13%] pt-[100px] flex justify-between items-center'>
                            <div className='flex justify-between text-amber-300'>
                                {clientRating}
                                {/* <IoMdStar/>
                        <IoMdStarHalf/>
                        <IoMdStarOutline/> */}
                            </div>
                            <div className='font-dm text-[14px] text-[#767676] '>1 Review</div>
                        </div>
                        <div className='w-[13%] pt-[10px] flex justify-between items-center'>
                            <h2 className='font-dm text-[16px] text-[#767676]'>${mulPrice.toFixed(2)}</h2>
                            <h1 className='font-dm font-bold text-[20px] text-[#262626]'>${singleProducts.price}</h1>
                        </div>
                        <div className='border-[#F0F0F0] w-[50%] border-b-2 py-5'></div>
                        <div className='w-[20%] pt-[30px] flex justify-between items-center'>
                            <h2 className='font-dm font-bold text-[16px] text-[#262626] '>QUANTITY:</h2>
                            <div className='py-2 px-4 w-[130px] border-2 border-[#F0F0F0] flex justify-between rounded-1xl'>
                                <p className='text-[16px] text-[#767676] font-dm'>-</p>
                                <p className='text-[16px] text-[#767676] font-dm'>1</p>
                                <p className='text-[16px] text-[#767676] font-dm'>+</p>
                            </div>
                        </div>
                        <div className='border-[#F0F0F0] w-[50%] border-b-2 py-5'></div>
                        <div className='w-[13%] pt-[30px] flex justify-between items-center'>
                            <h2 className='font-dm font-bold text-[16px] text-[#262626]'>STATUS:</h2>
                            <p className='font-dm text-[16px] text-[#767676]'>In stock</p>
                        </div>
                        <div className='border-[#F0F0F0] w-[50%] border-b-2 py-5'></div>
                        <div className='pt-[50px] w-[35%] flex justify-between'>
                            <p className='border-1 border-[#262626] py-4 px-2 w-[200px] text-center bg-[#FFFF] text-black font-dm
                    hover:bg-[#262626] hover:text-[#FFFFFF] duration-300 ease-in-out'>Add to Wish List</p>
                                <p onClick={() => handleAddtoCart(singleProducts)}
                                    className='border-1 border-[#262626] py-4 px-2 w-[200px] text-center bg-[#FFFF] text-black font-dm
                    hover:bg-[#262626] hover:text-[#FFFFFF] duration-300 ease-in-out'>Add to Cart</p>
                        </div>
                        <div className='mt-10 w-[50%]'>
                            <div className='border-t-2 border-b-2 border-[#F0F0F0] py-5'>
                                <div className='flex justify-between'>
                                    <h2 onClick={() => setShow(!show)} className='font-dm font-bold text-[16px] text-[#262626]'>FEATURES  & DETAILS</h2>
                                    {show ? <FaMinus /> : <HiPlusSm />}
                                </div>
                                {show &&
                                    <p className='pt-3 text-[16px] text-[#767676] font-dm'>  Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>}
                            </div>
                            <div className='border-b-2 border-[#F0F0F0] py-5'>
                                <div className='flex justify-between'>
                                    <h2 onClick={() => setShowTo(!showTo)} className='font-dm font-bold text-[16px] text-[#262626]'>FEATURES  & DETAILS</h2>
                                    {showTo ? <FaMinus /> : <HiPlusSm />}
                                </div>
                                {showTo &&
                                    <p className='pt-3 text-[16px] text-[#767676] font-dm'>  Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>}
                            </div>
                        </div>
                        <div className='pt-[100px] w-[20%] flex justify-between'>
                            <p className='text-[20px] text-[#767676] font-dm'>Description</p>
                            <h2 className='font-dm font-bold text-[20px] text-[#262626] '>Reviews (1) </h2>
                        </div>
                        <div className='mt-10'>
                            <p className='text-[14px] text-[#767676] font-dm py-4'>1 review for Product</p>
                            <div className='border-y-2 border-[#F0F0F0] py-4'>
                                <div className='flex justify-between items-center pt-2'>
                                    <div className='flex justify-between items-center w-[15%]'>
                                        <h2 className='font-dm text-[16px] text-[#262626]'>John Ford</h2>
                                        <div className='flex justify-between items-center'>
                                            <p><CiStar /></p>
                                            <p><CiStar /></p>
                                            <p><CiStar /></p>
                                            <p><CiStar /></p>
                                            <p><CiStar /></p>
                                        </div>
                                    </div>
                                    <p className='text-[16px] text-[#767676] font-dm'>6 months ago</p>
                                </div>
                                <p className='text-[14px] text-[#767676] font-dm pt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </p>
                            </div>
                        </div>
                        <div className='w-[50%] pt-[50px]'>
                            <h2 className='font-dm font-bold text-[20px] text-[#262626]'>Add a Review</h2>
                            <div className='pt-[45px]'>
                                <h2 className='font-dm text-[16px] text-[#262626]'>Name</h2>
                                <input placeholder='Your name here' className='border-b-2 border-[#F0F0F0] w-full pb-3 font-dm text-[14px]'></input>
                            </div>
                            <div className='pt-[30px]'>
                                <h2 className='font-dm text-[16px] text-[#262626]'>Email</h2>
                                <input placeholder='Your email here' className='border-b-2 border-[#F0F0F0] w-full pb-3 font-dm text-[14px]'></input>
                            </div>
                            <div className='pt-[30px]'>
                                <h2 className='font-dm text-[16px] text-[#262626]'>Review</h2>
                                <input placeholder='Your review here' className='border-b-2 border-[#F0F0F0] w-full pb-3 font-dm text-[14px]'></input>
                            </div>
                            <button className='mt-10 py-2 px-2 w-[200px] text-center font-dm text-[14px] text-[#FFFFFF] bg-[#262626]'>Post</button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default ProductDetails