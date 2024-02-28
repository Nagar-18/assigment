import React from 'react';
import comp from "../assets/com.png"
const Card = ({ item }) => {
  return (
    <div className="relative m-2 w-11/12  my-5 flex  max-w-[20rem] flex-col   rounded-xl bg-white  text-gray-700 shadow-lg    ">

      
      <div className="relative overflow-hidden text-white    shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40" style={{ height: '12rem' }}> {/* Fixed height for background image */}
        <img src={item.imgsrc} alt="ui/ux review check" style={{ width: '90%', height: '90%', objectFit: 'cover' }} /> {/* Set image dimensions and object fit */}
        
        
        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>

       
        {/* <button className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
            </svg>
          </span>
        </button> */}
      </div>

      <div className="p-1">
        <div className='flex items-center  m-3'><button className='bg-slate-200 mx-1 p-1  font-medium border-0 rounded-lg'>20% off</button>
        <button className='bg-slate-200 p-1 font-medium border-0 rounded-lg'>Limited time</button></div>
        <div className="flex flex-col items-center  mb-3">
          <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-gray-900">
            WebBuilder1
          </h5>
         
        </div>

        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-slate-500">
          {item.content}
        </p>

        <div className="flex  items-center gap-3 align-middle self-center w-full mt-5 group ">
          <h1 className='font-semibold text-2xl
          '>{item.discountPrice}</h1>
          <h3 className='text-slate-400 '>{item.originalPrice}</h3>
          <p className='text-red-600'>({item.off} off)</p>
         
        </div>
      </div>

      <div className="p-3 pt-3">
        <button className="block w-full select-none rounded-lg dark:bg-blue-400 bg-p py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-700/10 transition-all hover:shadow-lg hover:bg-rose-600 hover:text-blue-50 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          View Deal
        </button>
      </div>

    </div>
  )
}

export default Card;
