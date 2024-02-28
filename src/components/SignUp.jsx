import React from 'react'

const SignUp = () => {
  return (
    <div id='courses' className='flex w-11/12 mx-auto justify-center sm:my-5 mt-16  overflow-hidden'>
        <div className="  flex  w-11/12 justify-between sm:justify-around border-0 rounded-xl     shadow relative">
    
        <div className='sm:w-1/3 w-1/2'><p className='sm:w-4/5'>SignUp and Get Exclusive special deals</p></div>
         <button className="block  m-1  select-none rounded-lg  dark:bg-blue-400 bg-p py-3.5 px-4 text-center align-middle font-sans text-sm font-bold  text-white shadow-md shadow-gray-700/10 transition-all hover:shadow-lg hover:bg-rose-600 hover:text-blue-50 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          Sign Up
        </button>
       
        </div>
      
    </div>
  )
}

export default SignUp
