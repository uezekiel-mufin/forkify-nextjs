import React from 'react'
import Image from 'next/image'
import {AiOutlineSearch } from 'react-icons/ai';
import {FaRegBookmark } from 'react-icons/fa';
import {FiEdit } from 'react-icons/fi';


const Navbar = () => {
  return (
   <div className='header'>
    <Image src='/img/logo.png' alt='logo' width={150} height={50}/>
    <form className="flex search justify-between gap-4 pl-10 ">
       <input
         type="text"
         placeholder="Search over 1,000,000 recipes..."
         className='h-[23px] text-[1.7rem] flex-1 focus:outline-none '
       />
      <button className="flex w-[173.52px] h-[53px] justify-evenly items-center  text-4xl bg-bgHeaderButton rounded-full text-white font-medium">
        <AiOutlineSearch/>
        <span>Search</span>
      </button>
    </form>
    <nav className='flex' >
        <ul className='flex w-[297.3px] justify-around'>
          <li className='flex cursor-pointer  w-[145px] justify-center gap-4 items-center text-[1.4rem] text-[#615551] font-semibold '>
            <span  className='text-[#f48982]'><FiEdit/></span>
            <span>Add Recipe</span>
          </li>
          <li className='flex cursor-pointer w-[145px] justify-center gap-4 items-center text-[1.4rem] text-[#615551] font-semibold '>
            <span  className='text-[#f48982]'><FaRegBookmark/></span>
            <span>Bookmarks</span>
          </li>
          
        </ul>
     </nav>
   </div>
  )
}

export default Navbar