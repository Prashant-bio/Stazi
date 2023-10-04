import React from 'react'
import CarCard from './CarCard'
const CarList = ({cars}) => {
  
  return (
    <div className='flex flex-wrap w-[100%] h-[100%] gap-4 my-4 px-20'>
        {cars.map((car)=>(
            <CarCard key={car.id} car={car}/>
        ))}
    </div>
  )
}

export default CarList