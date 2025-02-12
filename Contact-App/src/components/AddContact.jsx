import React from 'react'
import { IoMdClose } from "react-icons/io";

const AddContact = ({contacts, name, setName, email, setEmail, setContacts, handleAddContactModel}) => {

  function AddContact(){
    if(name.trim()==''||email.trim()==''){
      alert('Please fill all fields')
      return
    }

    setContacts((prev)=>[{name:name.trim(),email:email.trim()},...prev]);
    handleAddContactModel();
    setName('');
    setEmail('');
  }

  return (
    <div className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4'>
      <div className='bg-gradient-to-br from-[#2c3e50] to-[#3498db] max-w-[400px] w-full p-6 rounded-lg shadow-xl'>
        <div className="flex justify-between items-center mb-6">
          <h1 className='text-2xl font-bold text-white'>Add New Contact</h1>
          <IoMdClose 
            onClick={handleAddContactModel}
            className="text-2xl text-white cursor-pointer hover:text-gray-300"
          />
        </div>
        <div className='space-y-4'>
          <div>
            <label className='text-white text-sm block mb-1'>Name</label>
            <input 
              onChange={(e)=>{setName(e.target.value)}} 
              value={name} 
              placeholder='Enter name' 
              type="text" 
              className='w-full h-10 rounded-lg border border-white/20 bg-white/10 px-4 text-white text-md focus:outline-none focus:border-[#3498db]' 
            />
          </div>
          <div>
            <label className='text-white text-sm block mb-1'>Email</label>
            <input 
              onChange={(e)=>{setEmail(e.target.value)}} 
              value={email} 
              placeholder='Enter email' 
              type="email" 
              className='w-full h-10 rounded-lg border border-white/20 bg-white/10 px-4 text-white text-md focus:outline-none focus:border-[#3498db]' 
            />
          </div>
          <button 
            onClick={AddContact} 
            className='w-full bg-[#3498db] text-white py-2 rounded-lg font-semibold hover:bg-[#2980b9] transition-colors'
          >
            Save Contact
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddContact
