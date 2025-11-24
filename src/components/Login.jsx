import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {

const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [privacyCheck, setPrivacyCheck] = useState(false);
  const [conditoinsCheck, setConditoinsCheck] = useState(false);

  const location = useNavigate();

  

  const API_URL = "http://localhost:3000"; // Tumhare backend ka URL

  const handleLogin = async () => {

    if (email === "" && password === "") {
      toast.error("please write email and password");
      location('/')
      return;
    } else if (email === "") {
      toast.error("please write email");
      location('/')
    } else if (password === "") {
      location('/')
      toast.error("please write password");
    } else if (password.length < 4) {
      location('/')
      toast.error("password is less then 4");
      return;
    } else if (password.length > 10) {
      location('/')
      toast.error("password is greater then 10");
      return;
    } else if (!privacyCheck && !conditoinsCheck) {
      location('/')
      toast.error("please accept privacy and terms");
      return;
    } else if (!conditoinsCheck) {
      location('/')
      toast.error("please accept terms");
    } else if (!privacyCheck) {
      toast.error("please accept privacy");
      location('/')
      return;
   
    }else{
         location('/home')
    }

    

    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (data.token) {
      toast.success("Login successfull");
      localStorage.setItem("token", data.token);
    } else {
      toast.error("not correct");
    }
  };


  
  return (
    <>
      <div
        className="absolute inset-0 bg-[url('/bg.png')]  bg-gray-400 bg-cover bg-center bg-fixed blur-3xl brightness-50"
      ></div>
    <div className='p-5 pt-10 text-center flex flex-col items-center text-gray-300 text-xs sm:text-sm md:text-[16px] relative z-10'>
      <ToastContainer />
      <img className='w-35 sm:w-50 ' src='/logo.png' alt='logo' />
      <div className='flex items-center flex-col pt-10 gap-1'>
        <img className='w-9 sm:w-15' src='/user.png' alt='User Icon' />
        <h1 className='text-white text-xs sm:text-sm font-semibold'>LOG IN</h1>
      </div>
      <div className='flex flex-col sm:min-w-120  w-full sm:max-w-1/2 max-w-100'>
        <input
          className=' outline-none w-full  rounded-[5px] sm:rounded-[10px] px-3 py-1.5 sm:py-3 sm:px-5 bg-white/20 mt-5 border-b-2 border-[rgb(131,105,70)]'
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className=' outline-none w-full  rounded-[5px] sm:rounded-[10px] px-3  py-1.5 sm:py-3 sm:px-5 bg-white/20 mt-3 border-b-2 border-[rgb(131,105,70)]'
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className='self-end text-[10px] sm:text-sm'>Forgot Password?</p>

        <div className='flex items-center gap-2 cursor-pointer select-none mt-2'>
          <input
            name='privacy'
            onChange={(e) => setPrivacyCheck(e.target.checked)}
            type='checkbox'
            className='shrink-0 peer appearance-none h-5 w-5 rounded-full border border-[#A98754] 
           bg-gray-200 checked:bg-[#D0A84A] checked:border-[#D0A84A] '
          />
          <FaCheck className='absolute w-3 h-3 text-white hidden peer-checked:block ml-1' />
          <span>I accept privacy policy.</span>
        </div>
        <div className='flex items-center gap-2 cursor-pointer select-none mt-2'>
          <input
            name='privacy'
            onChange={(e) => setConditoinsCheck(e.target.checked)}
            type='checkbox'
            className=' shrink-0 peer appearance-none h-5 w-5 rounded-full border border-[#A98754] 
           bg-gray-200 checked:bg-[#D0A84A] checked:border-[#D0A84A]'
          />
          <FaCheck className='absolute w-3 h-3 text-white hidden peer-checked:block ml-1 ' />
          <span>I accept the terms and conditions.</span>
        </div>
          <button
            onClick={handleLogin}
            className='rounded-[5px] bg-[#967e48]  hover:bg-[#5f4e27] hover:text-[#ccbfa1] w-full text-center py-2 mt-5 font-semibold'
          >
            Next
          </button>
        <p className='font-semibold mt-3'>Or</p>
        <div className='flex flex-col gap-2 mt-3'>
          <div    className='flex bg-white/20 p-1 sm:p-2 rounded-[5px] items-center cursor-pointer'>
            <p className='border border-white w-5 h-5 sm:h-8 sm:w-8 rounded-[3px] sm:rounded-[5px] text-[15px] sm:text-[20px]'>
              in
            </p>
            <p className='flex-1 text-center'>Continue with Linkedin</p>
          </div>
          <div    className='flex bg-white/20 p-1 sm:p-2 rounded-[5px] items-center cursor-pointer'>
            <p className='border border-white w-5 h-5 sm:h-8 sm:w-8 rounded-[3px] sm:rounded-[5px] text-[15px] sm:text-[20px]'>
              G
            </p>
            <p className='flex-1 text-center'>Continue with Google</p>
          </div>
          <div    className='flex bg-white/20 p-1 sm:p-2 rounded-[5px] items-center cursor-pointer'>
            <p className='border border-white w-5 h-5 sm:h-8 sm:w-8 rounded-[3px] sm:rounded-[5px] text-[15px] sm:text-[20px]'>
              f
            </p>
            <p className='flex-1 text-center'>Continue with Facebook</p>
          </div>
          <div    className='flex bg-white/20 p-1 sm:p-2 rounded-[5px] items-center cursor-pointer'>
            <p className='border border-white w-5 h-5 sm:h-8 sm:w-8 rounded-[3px] sm:rounded-[5px] text-[15px] sm:text-[20px]'>
              t
            </p>
            <p className='flex-1 text-center '>Continue with Twitter</p>
          </div>
          <a
            href=''
            className='font-semibold text-[#c49019] mt-5 sm:mt-10 underline'
          >
            Setup a new account
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
