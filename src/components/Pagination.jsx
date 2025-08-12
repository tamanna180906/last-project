import React from 'react'

function Pagination({ pageNumbbr,paginate,next,prev,currentPage}) {

  return (
    <nav aria-label="Page navigation example">
      <ul class="inline-flex -space-x-px text-base h-10">
        <li onClick={prev}>
          <a class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Previous</a>
        </li>
        {pageNumbbr.map((item,i) => (
          <li onClick={()=>paginate(i) }>
            <a class={`${
              currentPage==i+1
              ?"flex items-center justify-center px-4 h-10 leading-tight text-[#FFFFFF] bg-[#262626] border border-gray-300"
              :"flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300"
            }`}>
              {item}
            </a>
          </li>
        ))}
        <li onClick={next}>
          <a class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">Next</a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination