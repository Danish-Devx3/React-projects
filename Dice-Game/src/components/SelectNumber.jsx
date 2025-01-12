import React, { useState } from 'react'

const SelectNumber = ({selectedNumber,setselectedNumber,error}) => {
   
    const numbers = [1,2,3,4,5,6]
  return (
    <div  >
        <p className='text-red-600' >{error}</p>
        <div className='flex gap-3'>
        {numbers.map((val,i)=> <div onClick={()=>setselectedNumber(val)} key={i } className={`h-[72px] w-[72px] border-solid border-2 border-black grid place-items-center text-2xl font-bold cursor-pointer ${val===selectedNumber?'bg-black text-white':'bg-white'}`}>
        {val}
      </div>)}
        </div>
      <p className='text-end text-xl font-semibold' >Select a number</p>
    </div>
  )
}

export default SelectNumber
