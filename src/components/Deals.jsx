import React from 'react'
import Card from './Card';
import comp from "../assets/com.png"
  const items = [
    { imgsrc: comp, discountPrice: "$39.96", originalPrice: "$49.96", off:"20%", content: " Computer Modern classic with wix support" },
    { imgsrc: comp, discountPrice: "$39.96",originalPrice: "$49.96",off:"20%", content: " Computer Modern classic with wix support" },
   
    { imgsrc: comp, discountPrice: "$39.96",originalPrice: "$49.96",off:"20%", content: " Computer Modern classic with wix support" }
  ];
   const numRows = Math.ceil(items.length / 3);
  const itemRows = [];
  for (let i = 0; i < numRows; i++) {
    itemRows.push(items.slice(i * 3, (i + 1) * 3));
  }
const Deals = () => {
   
  return (
   <div id='deal' className='flex w-11/12 mx-auto  justify-center sm:my-5 mt-16 bg-[#ffffff77] overflow-hidden'>
        <div className="  grid sm:col-span-3  w-11/12 justify-center  sm:justify-evenly border-0 rounded-xl  bg-[#e7d6d677]   shadow relative">
            <h2 className='font-semibold text-2xl m-2'>Related deals you might like for</h2>
          {itemRows.map((row, index) => (
            <div key={index} className="flex flex-col sm:flex-row justify-center   sm:justify-around w-full">
              {row.map((item, itemIndex) => (
               
                  <Card item={item} />
                
              ))}
            </div>
          ))}
        </div>
      </div >
  )
}

export default Deals
