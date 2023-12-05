import React from 'react'
import './page.css'

import SideBar from './SideBar'
import Dashboard from './Dashboard'
import Side_mob from './Side_mob'

export default function MainPage() {
  return (
    <div className=' w-[100vw]  '>

        <div className='flex '>
          <div className=' h-5 w-5 relative'></div>
          <div className='absolute inset-0 w-[12rem] top-6 left-4 h-full md:z-0 z-30 overflow-hidden'>

          <Side_mob/>
          </div>
         <div className='hidden md:block -ml-5 z-10'>
        <SideBar/>
        </div>   
         <div >
        <Dashboard/>
        </div>  
   
        </div>
      
    </div>
  )
}
