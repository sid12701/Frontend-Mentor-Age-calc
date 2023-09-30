"use client";
import Image from 'next/image'
import { useState } from 'react';
import { set } from 'zod';

export default function Home() {
  return (
    <div className='grid h-screen bg-cream'>
    <div className='card  place-self-center rounded-l-xl rounded-tr-xl rounded-br-[160px] h-fit-content w-1/2 py-5 divide-grey relative'>
    <div className="flex flex-row p-5">
      <div className='flex flex-col'>
        <label className="font-400 px-2 upper-card tracking-widest ">DAY</label>
        <input placeholder="DD" type="text" className="border text-[20px] font-extrabold  border-grey rounded-md h-12 w-1/2 p-5"></input>
      </div>
      <div className='flex flex-col relative right-20'>
      <label className="font-400 px-2 upper-card tracking-widest">MONTH</label>
      <input placeholder="MM"    className="border text-[20px] font-extrabold border-grey rounded-md h-12 w-1/2 p-5 " type="text"></input>
      </div>
      <div className='flex flex-col relative right-40'>
        <label className="font-400 px-2 upper-card tracking-widest">YEAR</label>
        <input placeholder="YYYY"  className="border text-[20px] font-extrabold border-grey rounded-md h-12 w-1/2 p-5 " type="text"></input>
        </div>
    </div>
      <div className="divide-grey">
        <hr className="bg-grey my-10 mx-5 w-10/12 "></hr>

        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="44"
      viewBox="0 0 46 44"

      className="bg-purple rounded-full h-[80px] w-[80px] p-3 relative bottom-[80px] left-[650px] hover:bg-[#000000]" 
    >
      <g fill="none" stroke="#FFF" stroke-width="2">
        <path
          d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"
        />
      </g>
    </svg>
</div>


  <div className=' flex justify-start flex-col px-10 '>
    <div className="flex flex-row text-[75px]">
      <p className="text-purple lower-card tracking-widest">--</p>
      <p className="text-black lower-card">years</p>
    </div>
    <div className="flex flex-row text-[75px]">
      <p className="text-purple lower-card tracking-widest">--</p>
      <p className="text-black lower-card">months</p>
    </div>
    <div className="flex flex-row text-[75px]">
      <p className="text-purple lower-card tracking-widest ">--</p>
      <p className="text-black lower-card ">days</p>
    </div>
  </div>
  </div>
  </div>
  )
}



