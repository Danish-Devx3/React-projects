import React from 'react'

const Score = ({score}) => {
  return (
    <div>
       <div className='max-w-[200px] text-center'>
        <h1 className='text-[100px] font-bold leading-none'>{score}</h1>
        <p className='text-2xl leading-none font-medium'>Total Score</p>
      </div>
    </div>
  )
}

export default Score
