import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    const [visible, setVisible] = useState(false)
  return (
    <div className='flex flex-col items-center bg-[#FFF4E9] px-5 sm:px-15 py-5 sm:py-5 w-full gap-5 '>
    <div className='flex flex-col [@media(min-width:300px)]:flex-row items-center gap-5 justify-between  w-full'>
      <div className='flex gap-2 items-center'>
        <img className='h-5 bg-[#FFD25A] p-1 rounded-full' src="/logo1.png" alt="logo" />
        <img className=' w-30 sm:w-35' src="/logo2.png" alt="logo" />
      </div>
      <ul className='md:flex gap-5 text-gray-500 font-semibold hidden '>
        <a className='cursor-pointer hover:text-gray-700'>Subscribe</a>
        <a className='cursor-pointer hover:text-gray-700'>About</a>
        <a className='cursor-pointer hover:text-gray-700'>Episode</a>
        <a className='cursor-pointer hover:text-gray-700'>Insiders</a>
      </ul>
      <button className=' px-2 sm:px-5 sm:py-2 py-1 border rounded-3xl cursor-pointer hover:text-white hover:bg-black font-semibold mr-0 [@media(min-width:300px)]:mr-10'>Subcribe Now</button>
    <div className='fixed pt-3 md:hidden '>
    <FaBars className=' right-3 top-2 fixed [@media(min-width:300px)]:[top-4 right-5]' onClick={() =>setVisible(!visible)}/>
      <ul className={`${visible?'flex': 'hidden'} fixed right-5 top-10 gap-2 flex-col sm:gap-5 text-gray-500 font-semibold md:hidden bg-white p-2 `}>
        <a className='cursor-pointer hover:text-gray-700'>Subscribe</a>
        <a className='cursor-pointer hover:text-gray-700'>About</a>
        <a className='cursor-pointer hover:text-gray-700'>Episode</a>
        <a className='cursor-pointer hover:text-gray-700'>Insiders</a>
      </ul>
      </div>
    </div>
      </div>
  )
}

export default Navbar
