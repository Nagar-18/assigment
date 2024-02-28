import React from 'react'
import MainCard from './MainCard'
import comp from "../assets/com.png"

 const items = [
    { id:'1', topname:"Best Choice", imgsrc: comp, Rating: "9.5", Review: "Exceptional", imgRating:"3.5", title:"WixPro 72-Inch Responsive Website Builder", topContent: "Comprehensive Digital Platform Creation Tool, Streamlined InterFace for professional Websites and Online Stores (black/blue) ",bottomContent: "[What You Get]: recive the Wixpro website builder suite, acess to premium design templates , an extensive library of widgets and apps , and detailed step-by-step guides. " },
    { id:'2', topname:"Best Value", imgsrc: comp, Rating: "9.4",Review: "Excellent",imgRating:"3.5",title:"SiteCraft 68-inch ultimate web design Studio" ,topContent: " Advanced site  creation toolkit ,intuitive drag and frop Editor for dynamic websites and e-commerce Platforms (Green/white)",bottomContent: "[What You Get]: Gain acess to siteCraft design studio, fraturing a robost selection of desugn elemnets, SEO otimizing tools and e-commerce Intregations" },
   
    { id:'3',  topname:"",imgsrc: comp, Rating: "9.7",Review: "Good",imgRating:"3.5", title:"WixPro 72-Inch Responsive Website Builder", topContent: "Comprehensive Digital Platform Creation Tool, Streamlined InterFace for professional Websites and Online Stores (black/blue) ",bottomContent: "[What You Get]: recive the Wixpro website builder suite, acess to premium design templates , an extensive library of widgets and apps , and detailed step-by-step guides. "  },
    { id:'4',  topname:"",imgsrc: comp, Rating: "9.8",Review: "Bravo",imgRating:"3.5", title:"CDK Responsive Website Builder", topContent: " an extensive library of widgets and apps , and detailed step-by-step guides ",bottomContent: "", list:[{value:"9.9",data:"Building Responsive"},{value:"8.9",data:"Cool"},{value:"7.9",data:"Docs"}],love:["Documentation","Easy to use","Out of Box"]}
 ]
const Main = () => {
  return (
    <div id='courses' className='flex w-11/12 mx-auto justify-center sm:my-5 mt-16  overflow-hidden '>
        <div className="  grid sm:col-span-3   w-11/12 justify-center sm:justify-around border-0 rounded-xl bg-[#cdcedc]     shadow relative">
           {items.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row my-5 justify-center   sm:justify-around w-full">
              
               
                  <MainCard item={item} />
                
              
            </div>
          ))}
        </div>
      </div >
  )
}

export default Main
