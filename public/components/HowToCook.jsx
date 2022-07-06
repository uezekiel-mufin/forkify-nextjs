import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

const HowToCook = ({recipeDetails}) => {
  return (
    <div className='h-[293px] px-[10rem] py-[5rem]'>
      <div className='flex flex-col gap-6 items-center'>

      <h2 className='mb-[2.5rem] text-[#f38e82] text-[2rem] font-bold'>How to Cook</h2>
      <p className='mb-[3.5rem] text-[1.7rem] text-center text-[#918581]'>This recipe was carefully designed and tested by All Recipes. Please check out directions at their website.</p>
      <a href={`${recipeDetails?.source}`} target='_blank' rel='noreferrer'>
      <button className='flex gap-2 items-center text-[1.4rem] bg-bgDirectionBtn rounded-full py-[1.25rem] px-[2.25rem] font-semibold transition-all ease-in duration-300 hover:scale-110 text-white'>
        <span className='text-[1.5rem]'>Directions</span>
      <span>
      <BsArrowRight/>
      </span>
      </button>
      </a>
      </div>

    </div>
  )
}

export default HowToCook