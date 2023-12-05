import React, { useState } from 'react'
import DashboardComponents from './DashboardComponents'
import './page.css'
import profileimg from './../../assets/iucomponents/Rectangle 10.png'
import Pagnination from './Pagnination'

export default function Dashboard() {

  const [activedash,setActiveDash]=useState(1)



  return (
    <div className=' w-[90vw] h-[100vh] md:w-[calc(100vw-10rem)]  ml-9 md:ml-0 flex flex-col' >
      <div className=' w-[85vw]  mx-auto flex items-center justify-between px-8 py-5 '>
        <h1 className=' text-[5vw] sm:text-[1rem] md:text-[2vw] font-Poppins font-semibold '>Good Morning !🌞</h1>

        <div className="my-2 p-1 bg-white flex border border-gray-200 shadow-lg rounded">
                        <div className="flex flex-auto flex-wrap"></div>
                        <div  className="p-1 px-2  appearance-none outline-none flex flex-col items-center w-full  text-gray-800 ">
                        <h1>
                           John Don
                          </h1>
                          <h1 className='text-[.7rem]'>
                         johndon@gmail.com                            
                          </h1>
                          </div>  
                        <div className="text-gray-300  py-1 pl-2 pr-1 border-l flex items-center  border-gray-200">
                            <img src={profileimg} className='w-16'  alt="" />
                        </div>
                    </div>
      </div>

      <div className='w-full flex items-center justify-center '>
        <DashboardComponents/>
      </div>
      <div className='mx-auto'>
        <Pagnination/>
      </div>
    </div>
  )
}
