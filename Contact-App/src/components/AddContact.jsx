import React, { useState } from 'react'

const AddContact = ({name, setName, email, setEmail, setContacts, handleAddContactModel}) => {

  function AddContact(){
    if(name==''||email==''){
      console.log('Enter value first')
      return
    }
    setContacts((prev)=>[{name:name,email:email},...prev]);
    handleAddContactModel();
  }

  



  return (
    <div className='max-w-[370px] mx-auto flex items-center h-[80vh]'>
      <div className='bg-amber-500 h-80 text-center w-full gap-5 flex flex-col rounded'>
        <h1 className='text-xl mt-3' >Add new contect</h1>
        <input onChange={(e)=>{setName(e.target.value)}} value={name} placeholder='Enter name' type="text" className='h-9 rounded-md border border-white bg-transparent pl-9 text-3xl text-white m-4' />
        <input onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder='Enter email' type="email" className='h-9 rounded-md border border-white bg-transparent pl-9 text-3xl text-white m-4' />
        <button onClick={AddContact} className='bg-blue-500 mx-auto px-4 py-1 rounded cursor-pointer hover:bg-blue-400'>Save</button>
      </div>
    </div>
  )
}

export default AddContact
