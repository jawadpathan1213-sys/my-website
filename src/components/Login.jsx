import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Login = () => {
  return (
    <div className='p-5 pt-10 text-center flex flex-col items-center text-white text-xs sm:text-sm md:text-[16px]'>
         <img className='w-35 sm:w-50 '  src="/logo.png" alt="logo" />
         <div className='flex items-center flex-col pt-10 gap-1'>
         <img className='w-9 sm:w-15'  src="/user.png" alt="User Icon" />
         <h1 className='text-white text-xs sm:text-sm font-semibold'>LOG IN</h1>
         </div>
         <div className='flex flex-col sm:min-w-120  w-full sm:max-w-1/2 max-w-100'>
         <input className=' outline-none w-full  rounded-[5px] sm:rounded-[10px] px-3 py-1.5 sm:py-3 sm:px-5 bg-white/20 mt-5 border-b-2 border-[rgb(196,160,108)]' type="email" placeholder='Email' />

         <input className=' outline-none w-full  rounded-[5px] sm:rounded-[10px] px-3  py-1.5 sm:py-3 sm:px-5 bg-white/20 mt-3 border-b-2 border-[rgb(196,160,108)]' type="password" placeholder='Password' />
         <p className='self-end text-[10px] sm:text-sm'>Forgot Password?</p>
        
         <div className='flex items-center gap-2 cursor-pointer select-none' >
  <input 
  name='privacy'
    type="checkbox"
    class="peer appearance-none h-4 w-4 sm:h-5 sm:w-5 rounded-full border border-[#A98754] 
           bg-gray-200 checked:bg-[#D0A84A] checked:border-[#D0A84A]"
  /> 
  <FaCheck class="absolute w-2 sm:w-3 h-2 sm:h-3 text-white hidden peer-checked:block ml-1"/>
  <span>
    I accept privacy policy.
  </span>
     </div>
         <div className='flex items-center gap-2 cursor-pointer select-none' >
  <input 
  name='conditions'
    type="checkbox"
    class="peer appearance-none h-4 w-4 sm:h-5 sm:w-5 rounded-full border border-[#A98754] 
           bg-gray-200 checked:bg-[#D0A84A] checked:border-[#D0A84A]"
  /> 
  <FaCheck class="absolute w-2 sm:w-3 h-2 sm:h-3 text-white hidden peer-checked:block ml-1"/>
  <span>
    I accept privacy policy.
  </span>
     </div>
 

         </div>
        
    </div>
  )
}

export default Login
