import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from './Container'
import { FaBarsProgress, FaCaretDown, FaUser } from 'react-icons/fa6'
import { TiChevronRight } from 'react-icons/ti'
import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ApiData } from './ContextApi'
import { useNavigate } from 'react-router-dom'

function Header() {
    let cateRef = useRef()
    let accRef = useRef()
    let colRef = useRef()
    let [show, setShow] = useState(false)
    let [accshow, setAccShow] = useState(false)
    let [colshow, setColRef] = useState(false)
    let [filterProduct, setFilterProduct] = useState([])
    let [searchModel, setSearchModel] = useState(false)
    let navigate = useNavigate()

    let cartdata = useSelector((state) => state.product.cartItem)




    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (cateRef.current.contains(e.target) == true) {
                setShow(!show)
            } else {
                setShow(false)
            }
            if (accRef.current.contains(e.target) == true) {
                setAccShow(!accshow)
            } else {
                setAccShow(false)
            }
            if (colRef.current.contains(e.target) == true) {
                setColRef(!colshow)
            } else {
                setColRef(false)
            }

        })
    }, [show])



    let handleSearch = (e) => {
        if (e.target.value) {
            setSearchModel(true)
            let productFilter = info.filter((item) =>
                item.title.toLowerCase().includes(e.target.value.toLowerCase())

            )
            setFilterProduct(productFilter);
        } else {
            setSearchModel(false)

        }
    }

    let { info } = useContext(ApiData)


    let handleMove = (id) => {
        navigate(`/shop/${id}`);
        window.location.reload()

    }





    return (
        <div className='py-[20px] bg-[#F5F5F3]'>
            <Container>
                <div className='flex justify-between items-center'>
                    <div className='w-2/12 relative'>
                        <div ref={cateRef} className='flex items-center gap-x-2 font-dm font-[14px] text-[#262626]'>
                            <FaBarsProgress />
                            <h2 className='hidden lg:block'>Shop by Category</h2>
                        </div>
                        {show &&
                            <div className='bg-[#262626] lg:py-3 absolute top-[38px] left-0 w-[200px] lg:w-full z-100'>
                                <ul className='14px'>
                                    <li className='text-[#FFFFFFB2] duration-300 ease-in-out p-2 hover:pl-4 hover:text-[#FFFFFF]'>
                                        <div className='flex justify-between items-center'>
                                            <span>Accesories</span>
                                            <TiChevronRight />
                                        </div>
                                    </li>
                                    <li className='text-[#FFFFFFB2] duration-300 ease-in-out p-2 hover:pl-4 hover:text-[#FFFFFF]'>
                                        <div className='flex justify-between items-center'>
                                            <span>Furniture</span>
                                            <TiChevronRight />
                                        </div>
                                    </li>
                                    <li className='text-[#FFFFFFB2] duration-300 ease-in-out p-2 hover:pl-4 hover:text-[#FFFFFF]'>
                                        <div className='flex justify-between items-center'>
                                            <span>Electronics</span>
                                            <TiChevronRight />
                                        </div>
                                    </li>
                                    <li className='text-[#FFFFFFB2] duration-300 ease-in-out p-2 hover:pl-4 hover:text-[#FFFFFF]'>
                                        <div className='flex justify-between items-center'>
                                            <span>Clothes</span>
                                            <TiChevronRight />
                                        </div>
                                    </li>
                                    <li className='text-[#FFFFFFB2] duration-300 ease-in-out p-2 hover:pl-4 hover:text-[#FFFFFF]'>
                                        <div className='flex justify-between items-center'>
                                            <span>Bags</span>
                                            <TiChevronRight />
                                        </div>
                                    </li>
                                    <li className='text-[#FFFFFFB2] duration-300 ease-in-out p-2 hover:pl-4 hover:text-[#FFFFFF]'>
                                        <div className='flex justify-between items-center'>
                                            <span>Home appliances</span>
                                            <TiChevronRight />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        }
                    </div>
                    <div className='w-6/12 relative'>
                        <div className=''>
                            <input onChange={handleSearch} type='text' placeholder='Search Products'
                                className='w-full py-2 pl-4 rounded-full bg-[#FFFFFF] outline-0'></input>
                            <div className="top-[50%] translate-y-[-50%] right-4 absolute">
                                <FaSearch />
                            </div>
                        </div>
                        {searchModel &&
                            <div className='w-full h-[330px] border border-b-gray-500 overflow-y-scroll
                            top-[40px] left-0 absolute z-100'>
                                {filterProduct.map((item) => (
                                    <button className='w-full' onClick={() => handleMove(item.id)}>
                                        <div className='flex flex-wrap items-center gap-5'>
                                            <img className='w-[100px]' src={item.thumbnail}></img>
                                            <div>
                                                <h2>{item.title}</h2>
                                                <p>{item.price}</p>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>}
                    </div>
                    <div className='w-2/12 relative'>
                        <div className='flex gap-8 items-center justify-end'>
                            <div ref={accRef} className='flex items-center'>
                                <FaUser />
                                <FaCaretDown />
                            </div>
                            <Link to="/cart">
                                <div ref={colRef} className=' relative'>
                                    <div className='top-[-15px] right-[-20px] absolute'>
                                        <div className='bg-[#D8D8D8] h-[25px] w-[25px] rounded-full text-center text-[16px] font-bold z-0'>
                                            {cartdata.length}
                                        </div>
                                    </div>
                                    <FaShoppingCart className=' relative z-100'/>
                                </div>
                            </Link>
                        </div>
                        {accshow &&
                            <div className='bg-[#FFFFFF] lg:mt-3 absolute top-[38px] left-0 w-full z-100'>
                                <ul>
                                    <li className='hover:bg-[#2B2B2B] hover:text-[#FFFFFF] py-3 text-center font-dm
                                 font-[14px] duration-300 ease-in-out'>My Account</li>
                                    <li className='hover:bg-[#2B2B2B] hover:text-[#FFFFFF] py-3 text-center font-dm 
                                font-[14px] duration-300 ease-in-out'>Log Out</li>
                                </ul>
                            </div>
                        }
                        {/* {colshow &&
                            <div className='w-[300px] mt-3 absolute lg:top-[38px] right-3 z-100'>
                                <div className='flex p-[10px] justify-between bg-[#F5F5F3] items-center'>
                                    <div className='h-[50px] w-[50px] bg-[#979797]'></div>
                                    <div className='font-dm font-bold text-[14px]'>
                                        <h2>Black Smart Watch</h2>
                                        <h2>$44.00</h2>
                                    </div>
                                    <RxCross2 />
                                </div>
                                <div className='p-[10px]'>
                                    <div className='flex'>
                                        <h2 className='text-[14px] font-dm text-[#767676]'>Subtotal:<span className='font-bold
                                     text-[#262626]'> $44.00</span></h2>
                                    </div>
                                    <div className='pt-5'>
                                        <ul className='flex justify-between'>
                                            <li className='border-2 border-[#2B2B2B] py-4 px-8 text-[14px] font-bold font-dm
                                         hover:text-[#FFFFFF] hover:bg-[#262626] '>View Cart</li>
                                            <li className='border-2 border-[#2B2B2B] py-4 px-8 text-[14px] font-bold font-dm
                                         hover:text-[#FFFFFF] hover:bg-[#262626] '>Checkout</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        } */}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header