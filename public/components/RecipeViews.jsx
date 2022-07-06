import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {BsBookmark} from 'react-icons/bs'
import {BsBookmarkFill} from 'react-icons/bs'
import {BsClock} from 'react-icons/bs'
import {BsPeople} from 'react-icons/bs'
import {IoMdAddCircleOutline} from 'react-icons/io'
import {AiOutlineMinusCircle} from 'react-icons/ai'
import {FcCheckmark} from 'react-icons/fc'


const RecipeViews = ({recipeDetails, setRecipeDetails, recipeIngredients, setRecipeIngredients, setRecipeServings, recipeServings,bookmark,setBookMark}) => {
const [isClicked,setIsClicked]=useState(false)



const handleClick=()=>{
setRecipeIngredients(recipeIngredients.forEach((item)=>(
  item.quantity = item.quantity * ((recipeServings + 1) / recipeServings)
 )))
}

const handleBookmark=()=>{
if( recipeDetails ){
  bookmark.push(recipeDetails)
  localStorage.setItem('bookmarks',JSON.stringify(bookmark))
  setIsClicked(!isClicked)
}
}

useEffect(()=>{
  setIsClicked(false)
},[recipeDetails])

  return (
    <div className='main' >
      <div className='h-[320px] w-full relative'>
      <Image src={`${recipeDetails?.image}`} alt='sample' width={840} height={310} className=''/>
       <div className='absolute h-[70.9px] recipe__title bg-bgRecipeTitlepy justify-center text-center items-center px-[2rem]'>
        <span className='text-[3rem] text-center h-full leading-[3rem] '>{recipeDetails?.title}</span>
       </div>
      </div>
      <div className='h-[155px] flex justify-around items-center '>
      <div className='flex gap-40'>
        <div  className='flex gap-4 items-center'>
          <span className='text-[2.75rem] uppercase text-[#f38e82]'><BsClock/></span>
          <span className='text-[1.75rem] uppercase'>{recipeDetails?.time} Minutes</span>        
        </div >
        <div  className='flex gap-4 items-center'>
          <span className='text-[2.75rem] uppercase text-[#f38e82]'><BsPeople/></span>
          <span className='text-[1.75rem] uppercase'>{recipeServings} servings</span>        
          <span className='text-[2.5rem] text-[#f38e82] cursor-pointer'><AiOutlineMinusCircle/></span>        
          <span onClick={handleClick}  className='text-[2.5rem] text-[#f38e82] cursor-pointer'><IoMdAddCircleOutline/></span>        
        </div>
      </div>
        
          <span onClick={()=>handleBookmark()} className='text-[2rem] uppercase bg-[#f38e82] text-white p-4 rounded-full cursor-pointer font-bold' >
            {isClicked? <BsBookmarkFill/> :
            <BsBookmark />}</span>           
      </div>
      <div className=' bg-[#f2efee] py-[3rem] px-[4rem] '>
        <div className=' '>
          <span className='text-[2rem] text-[#f38e82] uppercase flex justify-center mb-8 font-bold tracking-[0.3rem]'>recipe ingredients</span>
          <ul className='  grid grid-cols-2 gap-4 px-4'>
            {recipeIngredients?.map((item,index)=>(
              <li key={index} className='flex items-start  gap-2  text-[1.6rem]'>
                 <span><FcCheckmark/></span>
                {item.quantity && <span className='text-[#615551] font-normal'>{item.quantity}</span>}
                {item.unit && <span className='text-[#615551] font-normal'>{item.unit}</span>}
                {item.description && <span className='text-[#615551] font-normal'>{item.description}</span>}
                 
              </li>
            ))}
         
            
          </ul>
          </div>

      </div>
    </div>
  )
}

export default RecipeViews