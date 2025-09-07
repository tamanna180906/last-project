import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import { MdChevronLeft } from 'react-icons/md'
import { HiOutlineRefresh, HiPlusSm } from 'react-icons/hi'
import { FaCaretDown, FaCaretUp, FaHeart, FaMinus } from 'react-icons/fa6'
import { AiOutlineBars } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'
import Post from './Post'
import Pagination from './Pagination'
import { ApiData } from './ContextApi'


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
  let [category, setCategory] = useState([])
  let [brand, setBrand] = useState([])
  let [filterCategory, setFilterCategory] = useState([])
  let [active, setActive] = useState("")
  let [low,setLow]=useState()
  let [high,setHigh]=useState()


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

  useEffect(() => {
    setCategory([...new Set(info.map((item) => item.category))])
    setBrand([...new Set(info.map((item) => item.brand))])
  }, [info])


  let handleCaregoty = (citem) => {
    let filteritem = info.filter((item) => item.category == citem)
    setFilterCategory(filteritem);
  }

  let handleActive = () => {
    setActive("active");

  }

  console.log(active);



  let handleAllProduct = () => {
    setFilterCategory([]);
  }

  let handleBrand=(bitem)=>{
    let filterBrand=info.filter((item)=>item.brand==bitem)
    setFilterCategory(filterBrand);
    
  }

  let handlePrice=(value)=>{
    setLow(value.low);
    setHigh(value.high);
    let priceFilter=info.filter((item)=>item.price>value.low && item.price<value.high)
    setFilterCategory(priceFilter);
    
    
  }
  
  





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
              <h2 on onClick={() => setShow(!show)} className='text-[#262626] text-[20px] font-dm'>Shop by Category</h2>
              {show ? <FaMinus /> : <HiPlusSm />}
            </div>

            {show && (
              <ul className='pt-4'>
                <li className='py-4 border-b-2 border-[#F0F0F0]'>
                  <div className='flex justify-between items-center'>
                    <h2 onClick={handleAllProduct} className='text-[#767676] text-[16px] font-dm capitalize'>All Product</h2>
                    <HiPlusSm />
                  </div>
                </li>
                {category.map((item) => (
                  <li className='py-4 border-b-2 border-[#F0F0F0]'>
                    <div className='flex justify-between items-center'>
                      <h2 onClick={() => handleCaregoty(item)}
                        className='text-[#767676] text-[16px] font-dm capitalize'>{item}</h2>
                      <HiPlusSm />
                    </div>
                  </li>
                ))}
              </ul>
            )
            }

            <div className='pt-[50px] flex justify-between items-center'>
              <h2 onClick={() => setShowTwo(!showTwo)} className='text-[#262626] text-[20px] font-dm'>Shop by Color</h2>
              {showTwo ? <FaMinus /> : <HiPlusSm />}
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
              <h2 onClick={() => setShowThr(!showThr)} className='text-[#262626] text-[20px] font-dm'>Shop by Brand</h2>
              {showThr ? <FaMinus /> : <HiPlusSm />}
            </div>
            <div className=''>
              {showThr &&
                <ul className='pt-4'>
                  {brand.map((item) => (
                    <li className='py-4 border-b-2 border-[#F0F0F0]'>
                      <h2 onClick={()=>handleBrand(item)} className='text-[#767676] text-[16px] pl-[10px] font-dm'>{item}</h2>
                    </li>
                  ))}
                </ul>
              }
            </div>
            <div className='pt-[50px] flex justify-between items-center'>
              <h2 onClick={() => setShowFour(!showFour)} className='text-[#262626] text-[20px] font-dm'>Shop by Price</h2>
              {showFour ? <FaMinus /> : <HiPlusSm />}
            </div>
            <div className=''>
              {showFour &&
                <ul className='pt-4'>
                  <li className='py-4 border-b-2 border-[#F0F0F0]'>
                    <h2 onClick={()=>handlePrice({low:0,high:10})} className='text-[#767676] text-[16px] pl-[10px] font-dm'>$0.00 - $9.99</h2>
                  </li>
                </ul>
              }
            </div>
          </div>
          <div className='w-[74%]'>
            <div className='flex justify-between'>
              <div className='w-[10%] flex justify-between items-center'>
                <div onClick={() => setActive("")} className={`${active == "active"
                    ? "h-[35px] w-[35px] border-2 border-[#F0F0F0] relative"
                    : "h-[35px] w-[35px] text-[#F0F0F0] bg-[#262626] border-2 border-[#F0F0F0] relative"
                  }`}>
                  < TbGridDots className='absolute top-[10px] left-[10px]' />
                </div>
                <div onClick={handleActive}
                  className={`${active == "active"
                      ? "h-[35px] w-[35px] bg-[#262626] text-[#F0F0F0] border-2 border-[#F0F0F0] relative"
                      : "h-[35px] w-[35px] border-2 border-[#F0F0F0] relative"
                    }`}>
                  <AiOutlineBars className='absolute top-[10px] left-[9px]' />
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
            <div className="pt-10">
              <Post allPage={allPage} filterCategory={filterCategory} active={active} />
            </div>
            <div className='mt-[50px]'>
              <Pagination pageNumbbr={pageNumbbr} paginate={paginate} next={next} prev={prev}
                currentPage={currentPage} filterCategory={filterCategory} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Products