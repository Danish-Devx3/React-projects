import React, { useState } from 'react'

const Dice = ({currentDice,roleDice}) => {

  return (
    <div className='flex flex-col items-center mt-[48px]' >
      <div onClick={roleDice} className='cursor-pointer' >
        <img src={`/images/dice/dice_${currentDice}.png`} alt="" />
      </div>
      <p className='text-2xl' >Click on Dice to Role</p>
    </div>
  )
}

export default Dice
