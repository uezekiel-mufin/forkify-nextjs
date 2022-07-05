import React from 'react'
import Image from 'next/image'

const SearchResults = ({fetchedRecipes}) => {

  // const {recipes} = fetchedRecipes

  return (
  <div className='sidebar'>
    <ul className='flex flex-1 flex-col py-[3rem]'>
     {fetchedRecipes?.slice(0,10).map((item,index)=>(
           <li key={item.id}>
            <a  className='flex  gap-8 py-[1.5rem] px-[3.25rem] items-center hover:bg-[#f2efee] cursor-pointer'>
              <Image src={`${item.image_url}`} alt='item__image' width={56} height={56} className='rounded-full'/>
              <div>
                <h3 className='text-[#f38e82] max-w-[20rem] text-[1.45rem] overflow-hidden text-ellipsis whitespace-nowrap uppercase'>{item.title}</h3>
                <h2 className='text-[#918581] text-[1.15rem] uppercase font-semibold'>{item.publisher}</h2>
              </div>
            </a>
         </li>
     ))}
    </ul>
    <div className='flex justify-around items-end h-[31px]'>
     <button className='bg-[#f9f5f3] text-[#f38e82] text-[1.3rem] py-[0.5rem] px-[1.8rem] capitalize font-semibold rounded-full flex gap-3 items-center justify-center transition-all '><span>page 1</span></button>
     <button className='bg-[#f9f5f3] text-[#f38e82] text-[1.3rem] py-[0.5rem] px-[1.8rem] capitalize font-semibold rounded-full flex gap-3 items-center justify-center transition-all '><span>page 2</span></button>
    </div>
  </div>
  )
}

export default SearchResults