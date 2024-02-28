import React from 'react'
import comp from "../assets/com.png"
import Rating from './Rating'
const MainCard = ({item}) => {
  return (
    <>
    
    <div id='web' className='w-full h-auto relative '>
    { item.topname?<div className=' bg-orange-500 h-10 w-40 flex items-center justify-center gap-3 text-white  rounded-md border-r-2 -top-5   absolute z-10'> <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16">
  <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935M3.504 1q.01.775.056 1.469c.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.5.5 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667q.045-.694.056-1.469z"/>
</svg></span>  <span> {item.topname} </span></div>:null
}
<div className='  rounded-full borderd-0 top-8 bg-white px-3 py-1 -ml-[1rem]  shadow absolute z-10'>{item.id}</div>
    <div  class="flex flex-col py-10  items-center justify-evenly bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-100 dark:bg-gray-300 dark:hover:bg-gray-200">
   <div> <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={item.imgsrc} alt=""/></div>
    <div class="flex flex-col justify-between sm:w-1/2 leading-normal">
        <h5 class="mb-2  tracking-tight text-gray-900 "><span className='font-semibold' >{item.title}</span>-{item.topContent}</h5>
        
        <p className=' font-bold'>Main HighLights:-</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-900">{item.bottomContent}</p>
        
      {item.list?<div className='bg-[#eacecede] rounded-lg p-1'>
            {item.list.map((listItem,index)=>(
            <div key={index} className='flex gap-5 my-1 '><><button className='bg-slate-200 px-2  font-medium border-0 rounded-lg'>{listItem.value}</button> <p>{listItem.data}</p></></div>
            ))}
      </div>:null}
      {item.love?<>Why we Love it
            {item.love.map((listItem,index)=>(
            <div key={index} className='flex gap-5 my-1 '><><span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
</svg></span> <p>{listItem}</p></></div>
            ))}
      </>:null}
         <div className='space-y-3' >
                <span> <label className='text-blue-400'>Show more</label><select name='United States' className='text-blue-400 bg-transparent'></select></span>
            </div>
    </div>
    <div className='flex flex-col justify-between sm:gap-20 gap-5 items-stretch'>
        <div  className='flex flex-col justify-evenly items-center rounded-lg mx-3 p-3 bg-blue-100 '>
            <div>{item.Rating}</div>
            <div><Rating/></div>
            <div>{item.Review}</div>
            




        </div>
       <button className="block w-11/12 mx-1  select-none rounded-lg  dark:bg-blue-400 bg-p py-3.5 px-4 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-700/10 transition-all hover:shadow-lg hover:bg-rose-600 hover:text-blue-50 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          View
        </button>
    </div>
</div></div>
 </>
  
  )
}

export default MainCard
