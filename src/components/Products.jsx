import React from 'react'
import Container from './Container'
import { MdChevronLeft } from 'react-icons/md'
import { HiOutlineRefresh, HiPlusSm } from 'react-icons/hi'
import { FaCaretDown, FaCaretUp, FaHeart } from 'react-icons/fa6'
import { AiOutlineBars } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'
import pro1 from "../assets/pro1.png"
import pro2 from "../assets/pro2.png"
import off3 from "../assets/off3.png"
import off2 from "../assets/off2.png"
import off1 from "../assets/off1.png"
import off4 from "../assets/off4.png"
import pro5 from "../assets/pro5.png"
import arr8 from "../assets/arr8.png"
import arr1 from "../assets/arr1.png"
import { FaShoppingCart } from 'react-icons/fa'

function Products() {
  return (
    <div className='py-[100px]'>
      <Container>
        <div className=''>
          <h2 className='text-[#262626] font-dm text-[45px] font-bold'>Products</h2>
          <div className='flex items-center'>
            <p className='text-[#767676] font-dm text-[12px]'>Home</p>
            <MdChevronLeft />
            <p className='text-[#767676] font-dm text-[12px]'>Products</p>
          </div>
        </div>
        <div className='flex justify-between pt-[100px]'>
          <div className='w-[23%]'>
            <h2 className='text-[#262626] text-[20px] font-dm'>Shop by Category</h2>
            <div className=''>
              <ul className='pt-4'>
                <li className='py-4 border-b-2 border-[#F0F0F0]'>
                  <div className='flex justify-between items-center'>
                    <h2 className='text-[#767676] text-[16px] font-dm'>Category 1</h2>
                    <HiPlusSm />
                  </div>
                </li>
                <li className='py-4 border-b-2 border-[#F0F0F0]'>
                  <div className='flex justify-between items-center'>
                    <h2 className='text-[#767676] text-[16px] font-dm'>Category 2</h2>
                    <HiPlusSm />
                  </div>
                </li>
                <li className='py-4 border-b-2 border-[#F0F0F0]'>
                  <div className='flex justify-between items-center'>
                    <h2 className='text-[#767676] text-[16px] font-dm'>Category 3</h2>
                    <HiPlusSm />
                  </div>
                </li>
                <li className='py-4 border-b-2 border-[#F0F0F0]'>
                  <div className='flex justify-between items-center'>
                    <h2 className='text-[#767676] text-[16px] font-dm'>Category 4</h2>
                    <HiPlusSm />
                  </div>
                </li>
                <li className='py-4 border-b-2 border-[#F0F0F0]'>
                  <div className='flex justify-between items-center'>
                    <h2 className='text-[#767676] text-[16px] font-dm'>Category 5</h2>
                    <HiPlusSm />
                  </div>
                </li>
              </ul>
            </div>
            <div className='pt-[50px] flex justify-between items-center'>
              <h2 className='text-[#262626] text-[20px] font-dm'>Shop by Color</h2>
              <FaCaretUp />
            </div>
            <div className=''>
              <ul className='pt-4'>
                <li className='py-4 border-b-2 border-[#F0F0F0]'>
                  <div className='flex items-center'>
                    <div className='bg-[#000000] h-[10px] w-[10px] rounded-full '></div>
                    <h2 className='text-[#767676] text-[16px] pl-[10px] font-dm'>Color 1</h2>
                  </div>
                </li>
                <li className='py-4 border-b-2 border-[#F0F0F0]'>
                  <div className='flex items-center'>
                    <div className='bg-[#FF8686] h-[10px] w-[10px] rounded-full '></div>
                    <h2 className='text-[#767676] text-[16px] pl-[10px] font-dm'>Color 2</h2>
                  </div>
                </li>
                <li className='py-4 border-b-2 border-[#F0F0F0]'>
                  <div className='flex items-center'>
                    <div className='bg-[#7ED321] h-[10px] w-[10px] rounded-full '></div>
                    <h2 className='text-[#767676] text-[16px] pl-[10px] font-dm'>Color 3</h2>
                  </div>
                </li>
                <li className='py-4 border-b-2 border-[#F0F0F0]'>
                  <div className='flex items-center'>
                    <div className='bg-[#B6B6B6] h-[10px] w-[10px] rounded-full '></div>
                    <h2 className='text-[#767676] text-[16px] pl-[10px] font-dm'>Color 4</h2>
                  </div>
                </li>
                <li className='py-4 border-b-2 border-[#F0F0F0]'>
                  <div className='flex items-center'>
                    <div className='bg-[#15CBA5] h-[10px] w-[10px] rounded-full '></div>
                    <h2 className='text-[#767676] text-[16px] pl-[10px] font-dm'>Color 5</h2>
                  </div>
                </li>
              </ul>
            </div>
            <div className='pt-[50px] flex justify-between items-center'>
              <h2 className='text-[#262626] text-[20px] font-dm'>Shop by Brand</h2>
              <FaCaretUp />
            </div>
            <div className=''>
              <ul className='pt-4'>
                <li className='py-4 border-b-2 border-[#F0F0F0]'>
                  <h2 className='text-[#767676] text-[16px] pl-[10px] font-dm'>Brand 1</h2>
                </li>
                <li className='py-4 border-b-2 border-[#F0F0F0]'>
                  <h2 className='text-[#767676] text-[16px] pl-[10px] font-dm'>Brand 2</h2>
                </li>
                <li className='py-4 border-b-2 border-[#F0F0F0]'>
                  <h2 className='text-[#767676] text-[16px] pl-[10px] font-dm'>Brand 3</h2>
                </li>
                <li className='py-4 border-b-2 border-[#F0F0F0]'>
                  <h2 className='text-[#767676] text-[16px] pl-[10px] font-dm'>Brand 4</h2>
                </li>
                <li className='py-4 border-b-2 border-[#F0F0F0]'>
                  <h2 className='text-[#767676] text-[16px] pl-[10px] font-dm'>Brand 5</h2>
                </li>
              </ul>
            </div>
            <div className='pt-[50px] flex justify-between items-center'>
              <h2 className='text-[#262626] text-[20px] font-dm'>Shop by Price</h2>
              <FaCaretUp />
            </div>
            <div className=''>
              <ul className='pt-4'>
                <li className='py-4 border-b-2 border-[#F0F0F0]'>
                  <h2 className='text-[#767676] text-[16px] pl-[10px] font-dm'>$0.00 - $9.99</h2>
                </li>
                <li className='py-4 border-b-2 border-[#F0F0F0]'>
                  <h2 className='text-[#767676] text-[16px] pl-[10px] font-dm'>$10.00 - $19.99</h2>
                </li>
                <li className='py-4 border-b-2 border-[#F0F0F0]'>
                  <h2 className='text-[#767676] text-[16px] pl-[10px] font-dm'>$20.00 - $29.99</h2>
                </li>
                <li className='py-4 border-b-2 border-[#F0F0F0]'>
                  <h2 className='text-[#767676] text-[16px] pl-[10px] font-dm'>$30.00 - $39.99</h2>
                </li>
                <li className='py-4 border-b-2 border-[#F0F0F0]'>
                  <h2 className='text-[#767676] text-[16px] pl-[10px] font-dm'>$40.00 - $69.99</h2>
                </li>
              </ul>
            </div>
          </div>
          <div className='w-[74%]'>
            <div className='flex justify-between'>
              <div className='w-[10%] flex justify-between items-center'>
                <div className='h-[35px] w-[35px] bg-[#262626] relative'>
                  <AiOutlineBars className='text-[#FFFFFF] absolute top-[10px] left-[10px]' />
                </div>
                <div className='h-[35px] w-[35px] bg-[#FFFFFF] border-2 border-[#F0F0F0] relative'>
                  <TbGridDots className='text-[#262626] absolute top-[10px] left-[9px]' />
                </div>
              </div>
              <div className='w-[55%] flex justify-between items-center'>
                <div className='flex items-center relative'>
                  <h2 className='text-[#767676] font-dm text-[16px]'>Sort by:</h2>
                  <input type='text' className='py-2 w-[200px] border-2 border-[#F0F0F0] rounded-1xl ml-3'></input>
                  <FaCaretDown className="top-[50%] translate-y-[-50%] right-4 absolute" />
                </div>
                <div className='flex items-center relative'>
                  <h2 className='text-[#767676] font-dm text-[16px]'>Show:</h2>
                  <input type='text' className='py-2 w-[150px] border-2 border-[#F0F0F0] rounded-1xl ml-3'></input>
                  <FaCaretDown className="top-[50%] translate-y-[-50%] right-4 absolute" />
                </div>
              </div>
            </div>
            <div className='py-[50px] flex flex-wrap justify-between'>
              <div className='lg:w-[32%]  relative'>
                <div className=' relative group'>
                  <img src={pro1} className='w-full' />
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
                  <h2 className='text-[18px] font-dm font-medium'>Basic Crew Neck Tee</h2>
                  <p className='text-[14px] text-[#767676] font-dm'>$44.00</p>
                </div>
                <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
              </div>
              <div className='lg:w-[32%] relative'>
                <div className=' relative group'>
                  <img src={off3} className='w-full' />
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
                  <h2 className='text-[18px] font-dm font-medium'>Basic Crew Neck Tee</h2>
                  <p className='text-[14px] text-[#767676] font-dm'>$44.00</p>
                </div>
                <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
              </div>
              <div className='lg:w-[32%]  relative'>
                <div className=' relative group'>
                  <img src={off2} className='w-full' />
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
                  <h2 className='text-[18px] font-dm font-medium'>Basic Crew Neck Tee</h2>
                  <p className='text-[14px] text-[#767676] font-dm'>$44.00</p>
                </div>
                <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
              </div>
              <div className='lg:w-[32%]  relative'>
                <div className=' relative group'>
                  <img src={off1} className='w-full' />
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
                  <h2 className='text-[18px] font-dm font-medium'>Basic Crew Neck Tee</h2>
                  <p className='text-[14px] text-[#767676] font-dm'>$44.00</p>
                </div>
                <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
              </div>
              <div className='lg:w-[32%]  relative'>
                <div className=' relative group'>
                  <img src={pro5} className='w-full' />
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
                  <h2 className='text-[18px] font-dm font-medium'>Basic Crew Neck Tee</h2>
                  <p className='text-[14px] text-[#767676] font-dm'>$44.00</p>
                </div>
                <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
              </div>
              <div className='lg:w-[32%]  relative'>
                <div className=' relative group'>
                  <img src={arr8} className='w-full' />
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
                  <h2 className='text-[18px] font-dm font-medium'>Basic Crew Neck Tee</h2>
                  <p className='text-[14px] text-[#767676] font-dm'>$44.00</p>
                </div>
                <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
              </div>
              <div className='lg:w-[32%]  relative'>
                <div className=' relative group'>
                  <img src={off4} className='w-full' />
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
                  <h2 className='text-[18px] font-dm font-medium'>Basic Crew Neck Tee</h2>
                  <p className='text-[14px] text-[#767676] font-dm'>$44.00</p>
                </div>
                <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
              </div>
              <div className='lg:w-[32%]  relative'>
                <div className=' relative group'>
                  <img src={off2} className='w-full' />
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
                  <h2 className='text-[18px] font-dm font-medium'>Basic Crew Neck Tee</h2>
                  <p className='text-[14px] text-[#767676] font-dm'>$44.00</p>
                </div>
                <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
              </div>
              <div className='lg:w-[32%]  relative'>
                <div className=' relative group'>
                  <img src={off1} className='w-full' />
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
                  <h2 className='text-[18px] font-dm font-medium'>Basic Crew Neck Tee</h2>
                  <p className='text-[14px] text-[#767676] font-dm'>$44.00</p>
                </div>
                <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
              </div>
              <div className='lg:w-[32%]  relative'>
                <div className=' relative group'>
                  <img src={pro2} className='w-full' />
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
                  <h2 className='text-[18px] font-dm font-medium'>Basic Crew Neck Tee</h2>
                  <p className='text-[14px] text-[#767676] font-dm'>$44.00</p>
                </div>
                <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
              </div>
              <div className='lg:w-[32%]  relative'>
                <div className=' relative group'>
                  <img src={arr1} className='w-full' />
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
                  <h2 className='text-[18px] font-dm font-medium'>Basic Crew Neck Tee</h2>
                  <p className='text-[14px] text-[#767676] font-dm'>$44.00</p>
                </div>
                <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
              </div>
              <div className='lg:w-[32%]  relative'>
                <div className=' relative group'>
                  <img src={off4} className='w-full' />
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
                  <h2 className='text-[18px] font-dm font-medium'>Basic Crew Neck Tee</h2>
                  <p className='text-[14px] text-[#767676] font-dm'>$44.00</p>
                </div>
                <p className='text-[14px] text-[#767676] font-dm pt-3'>Black</p>
              </div>
            </div>
            <div className='w-[30%] pt-[50px] flex justify-between'>
              <div className='w-[35px] h-[35px] bg-[#FFFFFF] text-[#262626] font-dm relative text-[14px] border-2
               border-[#F0F0F0] hover:bg-[#262626] hover:text-[#FFFFFF] '>
                <h2 className='absolute top-[7px] left-[11px]'>1</h2>
              </div>
              <div className='w-[35px] h-[35px] bg-[#FFFFFF] text-[#262626] font-dm relative text-[14px] border-2
               border-[#F0F0F0] hover:bg-[#262626] hover:text-[#FFFFFF] '>
                <h2 className='absolute top-[7px] left-[11px]'>2</h2>
              </div>
              <div className='w-[35px] h-[35px] bg-[#FFFFFF] text-[#262626] font-dm relative text-[14px] border-2
               border-[#F0F0F0] hover:bg-[#262626] hover:text-[#FFFFFF] '>
                <h2 className='absolute top-[7px] left-[11px]'>3</h2>
              </div>
              <div className='w-[35px] h-[35px] bg-[#FFFFFF] text-[#262626] font-dm relative text-[14px] border-2
               border-[#F0F0F0] hover:bg-[#262626] hover:text-[#FFFFFF] '>
                <h2 className='absolute top-[7px] left-[11px]'>4</h2>
              </div>
              <div className='w-[35px] h-[35px] bg-[#FFFFFF] text-[#262626] font-dm relative text-[14px] border-2
               border-[#F0F0F0] hover:bg-[#262626] hover:text-[#FFFFFF] '>
                <h2 className='absolute top-[7px] left-[11px]'>...</h2>
              </div>
              <div className='w-[35px] h-[35px] bg-[#FFFFFF] text-[#262626] font-dm relative text-[14px] border-2
               border-[#F0F0F0] hover:bg-[#262626] hover:text-[#FFFFFF] '>
                <h2 className='absolute top-[7px] left-[11px]'>10</h2>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Products