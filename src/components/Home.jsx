import React from 'react'

const Home = () => {
  return (
    <>
    <div  id='cat' className='flex w-11/12 mx-auto justify-center sm:my-4  mt-16 bg-[#ffffff] overflow-hidden'>
        <div className=" w-11/12 grid sm:col-span-3 mx-2 py-4 justify-center sm:justify-around border-0 rounded-xl  bg-[#e7d6d677]   shadow relative">
           <h1 className='sm:text-3xl ml-3 font-semibold'>Best Website Builders in the US </h1>
           <br className='border-1 w-full bg-black'/>
           <div className='border-t-2 flex  sm:gap-32 border-b-2 py-2 border-[#000000]'>
            <div className='flex  '><span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
</svg></span>
<span className='mr-5'>Last Updated -Febraruy 22,2024 </span>
<span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>
</span>
<span>Advertising Disclosure</span>

</div>
<div className='space-y-3' >
                <span> <label>Top relevent</label><select name='United States' className='bg-transparent'></select></span>
            </div>
  
           </div>
             <br /> 
              <div className='flex  sm:flex-row flex-col  justify-evenly my-2'>
      <div className='flex  justify-center gap-1  sm:w-5/12 sm:justify-between  my-1'><button className='py-1 sm:px-3 px-1 font-semibold bg-white rounded-lg '>Tools</button>
      <button className='py-1 sm:px-3 px-1 font-semibold bg-white rounded-lg '>Aws Builder</button>
      <button className='py-1 sm:px-3 px-1 font-semibold bg-white rounded-lg '>Start Build</button></div>
     <div className='flex justify-center  text-[14px] sm:text-[16px] gap-1 sm:w-1/2 sm:justify-between my-1'> <button className='py-0 sm:px-3 px-1 font-semibold bg-white rounded-lg '>Build Supplies</button>
      <button className='py-1 sm:px-3 px-1 font-semibold bg-white rounded-lg '>Tooling</button>
      <button className='py-1 sm:px-3 px-1 font-semibold bg-white rounded-lg '>BlueHosting</button></div>


    </div>
    <br />
    <div className='sm:ml-0 ml-10'>
      <span className=' font-mono text-[12px] sm:text-[16px]'>Home  {`>`}  Hosting for all  {`>`}  Hosting  {`>`}  Hosting6  {`>`}  Hosting5 </span>
    </div>
         </div>

         {/* buttons */}
   

         
      </div >
    </>
  )
}

export default Home
