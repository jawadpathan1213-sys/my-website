import React from "react";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='overflow-x-hidden px-5 sm:px-0 text-xs sm:text-sm md:text-base'>
      {/* firstion section  */}
      <div className='flex py-5 sm:py-10 sm:px-15 bg-[#FFF4E9] flex-col-reverse sm:flex-row gap-10 sm:gap-0 overflow-x-hidden'>
        <div className='w-full sm:w-1/2 flex items-center '>
          <div className='flex flex-col gap-2 sm:gap-5'>
            <h1 className='leading-[10vw] text-[10vw] sm:leading-[6vw] sm:text-[6vw] text-[#532822] font-bold  '>
              Navigating Ideas, Sharing Insights.
            </h1>
            <p className='text-gray-600'>
              Unlock invaluable wisdom personalized for you in our top-notch
              podcast. Dive into episodes designed to deliver relevant insights
              that cater to your interests and needs.
            </p>
            <button className='flex items-center gap-5 sm:gap-7 w-fit px-4 py-2 rounded-3xl bg-[#FFD25A] hover:bg-[#c9a542] cursor-pointer'>
              <span>Listen Now</span>
              <FaPlay className=' text-[#532822] w-7 h-7 p-2 rounded-full bg-[#FFF4E9]' />
            </button>
          </div>
        </div>
        <div className='w-full sm:w-1/2 px-2 sm:px-5'>
          <img className='' src='/firstsec.png' alt='img' />
        </div>
      </div>

      {/* second section  */}
      <div className='sm:px-15 py-5 sm:py-10'>
        <div className='flex justify-between flex-wrap items-center overflow-x-hidden gap-5 sm:gap-10'>
          <h1 className='md:text-[50px] md:leading-[50px] sm:text-[40px] sm:leading-[41px] text-[10vw] leading-[10vw] text-[#532822] font-bold space-x-1 shrink-0'>
            Weekly Podcast
          </h1>
          <button className='px-10 py-3 text-xs sm:text-sm font-semibold text-[#FFD25A] border border-[#FFD25A] rounded-3xl'>
            See All
          </button>
        </div>
        <div className='flex py-5 sm:py-10 gap-5 overflow-x-auto'>
          <div className='bg-[#F8F8F8] rounded-2xl p-2 flex gap-2 min-w-[200px] sm:min-w-[400px] relative'>
            <div className='relative rounded-2xl'>
              <img className="w-20" src="image1.png" alt="" />
            </div>
            <div>
              <p className='text-[13px] sm:text-[20px] font-semibold'>Quarter-life crisis</p>
              <p className='text-xs sm:text-sm'>Allen John</p>
              <p className='font-semibold text-[15px]'>23:30</p>
              <FaPlay className='absolute right-3 bottom-3 p-2 rounded-full w-8 h-8 bg-[#FFD25A] text-[#532822]' />
            </div>
          </div>
          <div className='bg-[#F8F8F8] rounded-2xl p-2 flex gap-2 min-w-[200px] sm:min-w-[400px] relative'>
            <div className='relative rounded-2xl'>
             <img className="w-20" src="image2.png" alt="" />
            </div>
            <div>
              <p className='text-[13px] sm:text-[20px] font-semibold'>Finance Gen Z</p>
              <p className='text-xs sm:text-sm'>Brock Leslar</p>
              <p className='font-semibold  text-[15px]'>45:00</p>
              <FaPlay className='absolute right-3 bottom-3 p-2 rounded-full w-8 h-8 bg-[#FFD25A] text-[#532822]' />
            </div>
          </div>
          <div className='bg-[#F8F8F8] rounded-2xl p-2 flex gap-2 min-w-[200px] sm:min-w-[400px] relative'>
            <div className='relative rounded-2xl'>
             <img className="w-20" src="image3.png" alt="img" />
            </div>
            <div>
              <p className='text-[13px] sm:text-[20px] font-semibold'>Love, Family, dan</p>
              <p className='text-xs sm:text-sm'>Aidan & Friends</p>
              <p className='font-semibold text-[15px]'>16:20</p>
              <FaPlay className='absolute right-3 bottom-3 p-2 rounded-full w-8 h-8 bg-[#FFD25A] text-[#532822]' />
            </div>
          </div>
        </div>
      </div>
      {/* third section  */}
      <div className='flex flex-col justify-center items-center gap-10 pb-10 sm:px-15'>
        <h1 className='md:text-[50px] md:leading-[50px] sm:text-[40px] sm:leading-[41px] text-[10vw] leading-[10vw] font-bold text-[#532822] w-fit sm:w-100 text-center'>
          Top Podcasters of the Week
        </h1>
        <div className='w-[95vw] [@media(min-width:500px)]:w-[102vw] overflow-hidden text-center'>
          <img className='w-[95vw] [@media(min-width:500px)]:w-[102vw]' src='/castfram.png' alt='img' />
        </div>
        <div className='flex flex-col sm:flex-row items-center pt-5 sm:pt-10 gap-2'>
          <h1 className='min-text-[20px] text-[8vw] sm:text-[4vw] sm:leading-[4vw] leading-[8vw] text-[#532822] font-bold'>
            Our podcast dives into diverse topics like life, finances,
            <span className='text-[#a39c9c]'>
              and personal experiences, offering valuable insights and practical
              advice.
            </span>
          </h1>
          <img className='w-full h-full sm:w-[27vw] sm:h-[27vw]' src='\frameg.png' alt='img' />
        </div>
        <div className='flex flex-col sm:flex-row justify-between w-full items-center'>
          <div className='flex flex-col items-center'>
            <h1 className='text-[#FF854B] text-[15vw] sm:text-[6vw] font-bold'>5+</h1>
            <p className='text-gray-600'>Awards Gained</p>
          </div>
          <div className='flex flex-col items-center'>
            <h1 className='text-[#FF854B] text-[15vw] sm:text-[6vw] font-bold'>12+</h1>
            <p className='text-gray-600'>Years of experience</p>
          </div>
          <div className='flex flex-col items-center'>
            <h1 className='text-[#FF854B] text-[15vw] sm:text-[6vw] font-bold'>236</h1>
            <p className='text-gray-600'>Podcasters</p>
          </div>
          <p className='w-full sm:w-[27vw] text-gray-600'>
            Unlock invaluable wisdom personalized for you in our top-notch
            podcast. Dive into episodes designed to deliver relevant insights
            that cater to your interests and needs.
          </p>
        </div>
        <div className='py-5 sm:py-10 flex flex-col sm:flex-row items-center gap-[8vw]'>
          <img className='w-full sm:w-[42vw]' src='/different.png' alt='img' />
          <div className='w-full sm:w-[40vw] flex flex-col gap-2 sm:gap-5'>
            <h1 className='text-[10vw] sm:text-[4vw] sm:leading-[4vw] leading-[10vw] text-center sm:text-start text-[#532822] font-bold'>
              What makes us different from other
            </h1>
            <p className='text-gray-600'>
              Our commitment is to keep you comfortable by delivering quality
              podcast content, trusted sources, and useful material.
            </p>
            <div className='flex gap-2 items-center'>
              <img className='w-6 sm:w-8' src='/tik.png' alt='img' />
              <p className='text-gray-800 text-[18px] '>Content Relevance</p>
            </div>
            <div className='flex gap-2 items-center'>
              <img className='w-6 sm:w-8' src='/tik.png' alt='img' />
              <p className='text-gray-800 text-[18px] '>Depth of Insight</p>
            </div>
            <div className='flex gap-2 items-center'>
              <img className='w-6 sm:w-8' src='/tik.png' alt='img' />
              <p className='text-gray-800 text-[18px] '>
                Combination of Information and Entertainment
              </p>
            </div>
            <div className='flex gap-2 items-center'>
              <img className='w-6 sm:w-8' src='/tik.png' alt='img' />
              <p className='text-gray-800 text-[18px] '>
                Reliable Source of Knowledge
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row bg-[#532822] p-2  sm:p-15 w-full rounded-[7vw] items-center gap-5 sm:gap-15'>
          <img className='w-[70vw] sm:w-[35vw]' src='/bgbrown.png' alt='img' />
          <div className='flex flex-col text-white gap-2 sm:gap-5 w-full sm:w-[40vw]'>
            <h1 className='text-[10vw] sm:text-[4vw] sm:leading-[6.2vw] leading-[10vw] font-bold'>
              Listen to the latest and exciting podcast content
            </h1>
            <p>
              Don't miss the valuable updates in each session and listen
              existing podcast{" "}
            </p>
            <button className='flex items-center gap-2 sm:gap-7 w-fit px-4 py-2 rounded-3xl bg-[#FFD25A] hover:bg-[#c9a542] cursor-pointer'>
              <span>Listen Now </span>
              <FaPlay className=' text-[#532822] w-5 h-5 sm:w-7 sm:h-7 p-1 sm:p-2 rounded-full bg-[#FFF4E9]' />
            </button>
          </div>
        </div>
        <div className='flex flex-col justify-center gap-5 sm:gap-15 w-full'>
          <h1 className='text-center text-[7vw] sm:text-[3.5vw] font-semibold text-[#532822]'>
            <span>Unlock invaluable wisdom personalized for</span>
            <br />
            <span className="text-[#8a757296]">you in our top-notch podcast.</span>
          </h1>
          <ul className="flex flex-col sm:flex-row gap-3 sm:text-sm items-center justify-between w-full text-xs text-[#532822]">
            <li>About</li>
            <li>Subscribe</li>
            <div className='flex gap-1 items-center'>
              <img
                className='h-3 bg-[#FFD25A] p-1 rounded-full'
                src='/logo1.png'
                alt='logo'
              />
              <img className='w-25' src='/logo2.png' alt='logo' />
            </div>
            <li>Episode</li>
            <li>Insiders</li>
          </ul>
          <hr className="text-gray-400"/>
          <div className="flex flex-col sm:flex-row justify-center gap-5 sm:3 w-full items-center">
            <button className=" w-25 flex gap-2 px-3 py-2 items-center border-[1.5px] border-[#532822] rounded-3xl">
              <img className="w-3" src="/twit.png" alt="img" />
              <p className="text-xs">Twitter</p>
            </button>
            <button className="flex w-25 gap-2 px-3 py-2 items-center border-[1.5px] border-[#532822] rounded-3xl">
              <img className="w-3" src="/insta.png" alt="img" />
              <p className="text-xs">Instagram</p>
            </button>
            <button className="flex w-25 gap-2 px-3 py-2 items-center border-[1.5px] border-[#532822] rounded-3xl">
              <img className="w-3" src="/face.png" alt="img" />
              <p className="text-xs">Facebook</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
