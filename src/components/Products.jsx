import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import { MdChevronLeft } from 'react-icons/md'
import { HiOutlineRefresh, HiPlusSm } from 'react-icons/hi'
import { FaCaretDown, FaCaretUp, FaHeart, FaMinus } from 'react-icons/fa6'
import { AiOutlineBars } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'
import { FaShoppingCart } from 'react-icons/fa'
import Post from './Post'
import Pagination from './Pagination'
import { ApiData } from './ContextApi'
import { BsPlus } from 'react-icons/bs'

function Products() {
  let { info } = useContext(ApiData)
  let [perPage, setPerPage] = useState(6)
  let [currentPage, setCurrentPage] = useState(1)
  let lastPage = perPage * currentPage
  let fristPage = lastPage - perPage
  let allPage = info.slice(fristPage, lastPage)
  let [show, setShow] = useState(false)
  let [showTwo, setShowTwo] = useState(false)
  let [showThr, setShowThr] = useState(false)
  let [showFour, setShowFour] = useState(false)
  let [category,setCategory] =useState([])


  let pageNumbbr = [];

  for (let i = 1; i <= Math.ceil(info.length / perPage); i++) {
    pageNumbbr.push(i)
  }

  let paginate = (index) => {
    setCurrentPage(index + 1)
  }

  let next = () => {
    if (currentPage < pageNumbbr.length) {
      setCurrentPage((state) => state + 1)
    }

  }

  let prev = () => {
    if (currentPage > 1) {
      setCurrentPage((state) => state - 1)
    }
  }

  let handlePageNumber = (e) => {
    setPerPage(e.target.value);

  }

  // useEffect(()=>{
  //   setCategory([...new Set(info.map((item)=>item.category))])
  // },[info])
  // console.log(category);
  



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
            <div className=' flex justify-between items-center'>
              <h2 on onClick={()=>setShow(!show)} className='text-[#262626] text-[20px] font-dm'>Shop by Category</h2>
              {show ? <FaMinus/> : <HiPlusSm/> }
            </div>
            <div className=''>
              {show &&
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
              }
              </div>
            <div className='pt-[50px] flex justify-between items-center'>
              <h2 onClick={()=>setShowTwo(!showTwo)} className='text-[#262626] text-[20px] font-dm'>Shop by Color</h2>
             {showTwo ? <FaMinus/> : <HiPlusSm/> }
            </div>
            <div className=''>
              {showTwo &&
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
              }
            </div>
            <div className='pt-[50px] flex justify-between items-center'>
              <h2 onClick={()=>setShowThr(!showThr)} className='text-[#262626] text-[20px] font-dm'>Shop by Brand</h2>
              {showThr ? <FaMinus/> : <HiPlusSm/> }
            </div>
            <div className=''>
              {showThr &&
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
              }
            </div>
            <div className='pt-[50px] flex justify-between items-center'>
              <h2 onClick={()=>setShowFour(!showFour)} className='text-[#262626] text-[20px] font-dm'>Shop by Price</h2>
              {showFour ? <FaMinus/> : <HiPlusSm/> }
            </div>
            <div className=''>
              {showFour&&
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
              }
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
                  <select onChange={handlePageNumber} className='py-2 px-4 w-[150px] border-2 border-[#F0F0F0] rounded-1xl'>
                    <option value="6">6</option>
                    <option value="9">9</option>
                    <option value="12">12</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="pt-10 flex flex-wrap justify-between">
              <Post allPage={allPage} />
            </div>
            <div className='mt-[50px]'>
              <Pagination pageNumbbr={pageNumbbr} paginate={paginate} next={next} prev={prev} currentPage={currentPage} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Products