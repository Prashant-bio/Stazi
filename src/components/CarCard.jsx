import React from 'react'
import { GoPeople } from "react-icons/go"
import { BsFuelPumpDiesel } from "react-icons/bs"
import { GiSpeedometer } from "react-icons/gi"
import { IoCarSportOutline } from "react-icons/io5"
import { AiOutlineHeart } from 'react-icons/ai'
const CarCard = ({ car }) => {
  return (


    <div className="w-[370px] h-[100%] px-8 rounded-2xl border-gray-300 text-[#555555]">
      <div className="bg-white w-[100%] h-[100%] rounded-xl px-2 ">
        <img src={car.image} alt={car.name} className='pt-2 object-cover rounded-2xl' />
        <div className='flex justify-between'>
          <p>{car.name}</p>
          <p>year</p>
        </div>
        <div>
          <div className='flex gap-6'>
            <div className='flex items-center gap-2'>
              <GoPeople />
              <p>4 People</p>
            </div>
            <div className='flex items-center gap-2'>
              <BsFuelPumpDiesel />
              <p>4 Hybrid</p>
            </div>
          </div>
          <div className='flex gap-6'>
            <div className='flex items-center gap-2'>
              <GiSpeedometer />
              <p>7.7km/ 1-litre</p>
            </div>
            <div className='flex items-center gap-2'>
              <IoCarSportOutline />
              <p> Automatic</p>
            </div>
          </div>
        </div>
        <hr className='px-2 my-2'/>
        <div className='flex justify-between py-4'>
          <p>${car.price}/month</p>
          <div className='flex gap-4 items-center'>
            <div className='bg-[#cad7f6]  rounded-md'>
            <AiOutlineHeart size={20} className='mx-2 my-1'/>
            </div>
            <div className='bg-[#2338f3] text-white rounded-md px-2 py-1'>
              <button>Rent Now</button>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default CarCard