import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import AddContact from "./components/AddContact";
import ShowContact from "./components/ShowContact";


function getdata(){
  const data = JSON.parse(localStorage.getItem('contacts'));
  if(data){
    return data;
  }else{
    return [];
  }
}

const App = () => {
  const [contacts, setContacts] = useState(getdata());
  const [isAddContactOpen, setAddContactOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [searchVal, setSearchVal] = useState('')

  function handleAddContactModel(){
    setAddContactOpen((prev)=>!prev)
  }

  function handleSearching(e){
    setSearchVal(e.target.value);

    const filteredContacts = contacts.filter((contact)=>contact.name.includes(searchVal));
    setContacts(filteredContacts)
  }
  
  
  useEffect(() => {
    localStorage.setItem('contacts',JSON.stringify(contacts))
  }, [contacts])

  

  return (
    <>
      {isAddContactOpen ? (
        <AddContact contacts={contacts} name={name} setName={setName} email={email} setEmail={setEmail} setContacts={setContacts} handleAddContactModel={handleAddContactModel} />
      ) : (
        <div className="max-w-[370px] mx-auto">
          <Navbar />
          <div className="flex gap-2">
            <div className="flex relative items-center">
              <FiSearch className="text-white text-3xl absolute ml-1" />
              <input
                onChange={handleSearching} value={searchVal}
                className="h-10 flex-grow rounded-md border border-white bg-transparent pl-9 text-3xl text-white"
                type="text"
              />
              <AiFillPlusCircle onClick={handleAddContactModel} className="absolute text-4xl cursor-pointer text-white right-1 " />
            </div>
          </div>
          <ShowContact setName={setName} setEmail={setEmail} setContacts={setContacts} contacts={contacts} handleAddContactModel={handleAddContactModel} />
        </div>
      )}
    </>
  );
};

export default App;
