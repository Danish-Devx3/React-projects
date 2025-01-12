import React from 'react'

const StartGame = ({toggle}) => {
  return (
    <div>
        
    <section className='max-w-[1180px] flex mx-auto items-center h-[100vh]'>
      <div><img src='/images/dices.png' alt="" />
      </div>
      <div>
        <h1 className='text-8xl font-semibold text-nowrap'>Dice Game</h1>
        <button onClick={toggle} className='text-white px-[18px] py-[10px] rounded-md bg-black min-w-[220px] text-base transition ease-in-out delay-150 bg-black
        border-transparent hover:bg-white hover:border-solid border-2 border-black hover:text-black '>Play now</button>
      </div>
    </section>
    </div>
  )
}

export default StartGame
