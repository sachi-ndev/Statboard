import React, { useState } from 'react'
import { BsList } from "react-icons/bs";
import brifecase from './../../assets/iucomponents/Briefcase.png'
import circlemenu from './../../assets/iucomponents/Circled Menu.png'
import support from './../../assets/iucomponents/Support.png'
import puzzle from './../../assets/iucomponents/Puzzle.png'
import help from './../../assets/iucomponents/Help.png'
import power from './../../assets/iucomponents/Shutdown.png'
import './page.css'

export default function Side_mob() {

    const [activeside,setActiveSide]=useState(1)

    const[modal,setModal]=useState(false)

    // console.log(modal);
  return (
    <div>
      <div className='block md:hidden ' onClick={()=>setModal(!modal)}>
           <BsList/>
        </div>

        <div id={modal==true?'modal':''}  className='hidden w-[]  mt-[4.6rem] bg-white/60 z-40 '>
        {/* <div className=" w-[14rem] h-[120vh] flex flex-col bg-slate-700 items-center shadow-2xl shadow-slate-700/20  overflow-hidden" > */}
      <div className="w-full h-[14rem] flex flex-col justify-center items-center py-9 shadow-lg shadow-slate-700/20 ">
        <div className="h-[6rem] w-[6rem]  ">
            <img src={brifecase} alt="" />
            <h1 className="text-white">STATBOARD</h1>
        </div>

      </div>
      <div className="flex flex-col h-full items-center justify-between">

      <div className="ml-16">
        <aside
          className="flex w-[12rem] flex-col mt-4 space-y-8  border-gray-200  p-2"
          
          x-show="asideOpen"
        >
          <a
            // href="#"
            className="flex items-center space-x-1 rounded-md px-2 py-3 text-lg text-white hover:text-black bg-slate-800 font-semibold hover:bg-[rgb(255,255,255)]   hover:border-2 border-2 border-gray-700/5 "
            onClick={()=>setActiveSide(1)}
            id={activeside===1?'activesidebar':''}
          
          >
            <span className="text-2xl ">
              <i className="bx bx-home " />
            </span>
            <span className="flex justify-between gap-3"><img src={circlemenu} alt=""  className="w-[20px]"/> Dashboard</span>
          </a>
          <a
            // href="#"
            className="flex items-center space-x-1 rounded-md px-2 py-3 text-lg text-white hover:text-black bg-slate-800 font-semibold hover:bg-[rgb(255,255,255)]  border-2 border-gray-700/5 hover:border-0"
            onClick={()=>setActiveSide(2)}
            id={activeside===2?'activesidebar':''}
          
          >
            <span className="text-2xl">
              <i className="bx bx-cart" />
            </span>
            <span className="flex justify-between gap-3"><img src={support} alt=""  className="w-[20px]"/> Support</span>
          </a>
          <a
            // href="#"
            className="flex items-center space-x-1 rounded-md px-2 py-3 text-lg text-white hover:text-black bg-slate-800 font-semibold hover:bg-[rgb(255,255,255)]  border-2 border-gray-700/5 hover:border-0"
            onClick={()=>setActiveSide(3)}
            id={activeside===3?'activesidebar':''}
          >
            <span className="text-2xl">
              <i className="bx bx-shopping-bag" />
            </span>
            <span className="flex justify-between gap-3"><img src={puzzle} alt=""  className="w-[20px]" /> Plugin</span>
          </a>
          <a
            // href="#"
            className="flex items-center space-x-1 rounded-md px-2 py-3 text-lg text-white hover:text-black bg-slate-800 font-semibold hover:bg-[rgb(255,255,255)]  border-2 border-gray-700/5 hover:border-0"
            onClick={()=>setActiveSide(4)}
            id={activeside===4?'activesidebar':''}
          >
            <span className="text-2xl">
              <i className="bx bx-heart" />
            </span>
            <span className="flex justify-between gap-3"><img src={help} alt="" className="w-[20px]" /> Help</span>
          </a>
       
        </aside>
      </div>

            <div className="w-[14rem] bg-white text-center py-5 flex justify-center gap-5 text-orange-400 items-center">
               <img src={power} alt="" className="w-[20px]"/>
                Logout
            </div>
    </div>
    </div>
    </div>
  )
}
