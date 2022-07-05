import Image from 'next/image'
import React from 'react'
import {BsBookmark} from 'react-icons/bs'
import {BsClock} from 'react-icons/bs'
import {BsPeople} from 'react-icons/bs'
import {IoMdAddCircleOutline} from 'react-icons/io'
import {AiOutlineMinusCircle} from 'react-icons/ai'
import {FcCheckmark} from 'react-icons/fc'


const RecipeViews = () => {
  return (
    <div className='main' >
      <div className='h-[320px] w-full relative'>
      <Image src='/img/pizza.jpg' alt='sample' width={840} height={310} className=''/>
       <div className='absolute h-[70.9px] recipe__title bg-bgRecipeTitlepy justify-center items-center px-[2rem]'>
        <span className='text-[3.25rem] text-center h-full  '>Valentine Pizza</span>
       </div>
      </div>
      <div className='h-[155px] flex justify-around items-center '>
      <div className='flex gap-40'>
        <div  className='flex gap-4 items-center'>
          <span className='text-[2.75rem] uppercase text-[#f38e82]'><BsClock/></span>
          <span className='text-[1.75rem] uppercase'>75 Minutes</span>        
        </div >
        <div  className='flex gap-4 items-center'>
          <span className='text-[2.75rem] uppercase text-[#f38e82]'><BsPeople/></span>
          <span className='text-[1.75rem] uppercase'>4 servings</span>        
          <span className='text-[2.5rem] text-[#f38e82]'><AiOutlineMinusCircle/></span>        
          <span className='text-[2.5rem] text-[#f38e82]'><IoMdAddCircleOutline/></span>        
        </div>
      </div>
        
          <span className='text-[2rem] uppercase bg-[#f38e82] text-white p-4 rounded-full cursor-pointer font-bold' ><BsBookmark/></span>           
      </div>
      <div className=' bg-[#f2efee] py-[3rem] px-[8rem] '>
        <div className='text-center '>
          <span className='text-[2rem] text-[#f38e82] uppercase font-bold tracking-[0.3rem]'>recipe ingredients</span>
          <ul className='  grid grid-cols-2 gap-4 px-4'>
            <li className='flex items-center pl-20 gap-4  text-[1.6rem]'>
              <span><FcCheckmark/></span>
              <span className='text-[#615551] font-normal'>3 cups of bread flour</span>
            </li>
            <li className='flex items-center pl-20 gap-4  text-[1.6rem]'>
              <span><FcCheckmark/></span>
              <span className='text-[#615551] font-normal'>3 cups of bread flour</span>
            </li>
            <li className='flex items-center pl-20 gap-4  text-[1.6rem]'>
              <span><FcCheckmark/></span>
              <span className='text-[#615551] font-normal'>3 cups of bread flour</span>
            </li>
            <li className='flex items-center pl-20 gap-4  text-[1.6rem]'>
              <span><FcCheckmark/></span>
              <span className='text-[#615551] font-normal'>3 cups of bread flour</span>
            </li>
            <li className='flex items-center pl-20 gap-4  text-[1.6rem]'>
              <span><FcCheckmark/></span>
              <span className='text-[#615551] font-normal'>3 cups of bread flour</span>
            </li>
            <li className='flex items-center pl-20 gap-4  text-[1.6rem]'>
              <span><FcCheckmark/></span>
              <span className='text-[#615551] font-normal'>3 cups of bread flour</span>
            </li>
            <li className='flex items-center pl-20 gap-4  text-[1.6rem]'>
              <span><FcCheckmark/></span>
              <span className='text-[#615551] font-normal'>3 cups of bread flour</span>
            </li>
            <li className='flex items-center pl-20 gap-4  text-[1.6rem]'>
              <span><FcCheckmark/></span>
              <span className='text-[#615551] font-normal'>3 cups of bread flour</span>
            </li>
            <li className='flex items-center pl-20 gap-4  text-[1.6rem]'>
              <span><FcCheckmark/></span>
              <span className='text-[#615551] font-normal'>3 cups of bread flour</span>
            </li>
            <li className='flex items-center pl-20 gap-4  text-[1.6rem]'>
              <span><FcCheckmark/></span>
              <span className='text-[#615551] font-normal'>3 cups of bread flour</span>
            </li>
            <li className='flex items-center pl-20 gap-4  text-[1.6rem]'>
              <span><FcCheckmark/></span>
              <span className='text-[#615551] font-normal'>3 cups of bread flour</span>
            </li>
          </ul>
          </div>

      </div>
    </div>
  )
}

export default RecipeViews