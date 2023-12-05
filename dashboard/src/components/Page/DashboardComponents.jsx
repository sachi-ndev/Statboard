import React from "react";
import imgpro from './../../assets/iucomponents/media.png'
import fb from './../../assets/iucomponents/facebook.png'
import insta from './../../assets/iucomponents/instagram.png'
import twitter from './../../assets/iucomponents/twitter.png'
import PieChart from "./chart/PieChart";
import LineChart from "./chart/LineChart";
import Table from "./chart/Table";


export default function DashboardComponents() {
  return (
    <div className="w-full   flex flex-col gap-6 ">
      

    <div className=" flex flex-col md:flex-row gap-10  w-[80vw] mx-auto " id="dash1">
    <div className="h-[25rem]  md:w-[50vw] bg-slate-200 ">
      <LineChart/>
    </div>
    <div className="h-[25rem] md:w-[25vw] bg-slate-200">
      
      <PieChart/>
    </div>
    </div>
  


    <div className="flex    flex-col md:flex-row gap-16 mx-auto" id="dash2">
    <div className="md:w-[60vw] h-[22rem] bg-slate-200">
      <Table/>
      
      </div>


    <div className=" bg-white w-[80vw] md:w-[14.5rem] mb-14 flex flex-col items-center rounded-lg">
    <img src={imgpro} className="w-full" alt="" />
    <h1 className="p-2">John don</h1>
    <h1  className="p-2">CEO</h1>
    <div className="p-2 flex w-[8rem] justify-between ">
    <img src={fb} alt="" className="w-[20px]" />
    <img src={insta} alt="" className="w-[20px]" />
    <img src={twitter} alt="" className="w-[20px]" />
    </div>
    </div>

    </div>
    </div>
  );
}
