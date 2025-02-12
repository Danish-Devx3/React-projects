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
  const [filter, setFilter] = useState([])

  function handleAddContactModel(){
    setAddContactOpen((prev)=>!prev)
  }

  function handleSearching(e){
    setSearchVal(e.target.value);

    const filteredContacts = contacts.filter((contact)=>contact.name.includes(searchVal));
    setFilter(filteredContacts);
  }
  
  
  useEffect(() => {
    localStorage.setItem('contacts',JSON.stringify(contacts))
  }, [contacts])

  

  return (
    <>
      {isAddContactOpen ? (
        <AddContact contacts={contacts} name={name} setName={setName} email={email} setEmail={setEmail} setContacts={setContacts} handleAddContactModel={handleAddContactModel} />
      ) : (
        <div className="max-w-[600px] mx-auto px-4">
          <Navbar />
          <div className="relative">
            <div className="relative">
              <FiSearch className="text-white text-xl absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                onChange={handleSearching}
                value={searchVal}
                placeholder="Search contacts..."
                className="w-full h-12 rounded-lg border border-white/20 bg-white/10 pl-10 pr-12 text-white text-md focus:outline-none focus:border-[#3498db]"
                type="text"
              />
              <AiFillPlusCircle 
                onClick={handleAddContactModel} 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-3xl cursor-pointer text-[#3498db] hover:text-[#2980b9] transition-colors" 
              />
            </div>
          </div>
          <ShowContact 
            setName={setName} 
            setEmail={setEmail} 
            setContacts={setContacts} 
            contacts={contacts} 
            filter={filter}
            handleAddContactModel={handleAddContactModel} 
          />
        </div>
      )}
    </>
  );
};

export default App;
