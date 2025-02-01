import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import AddContact from "./components/AddContact";
import ShowContact from "./components/ShowContact";

const App = () => {
  const [contacts, setContacts] = useState([
    { name: "John Doe", email: "johndoe123@example.com" },
    { name: "Jane Smith", email: "janesmith456@example.com" },
    { name: "Alice Johnson", email: "alicej@example.com" },
    { name: "Bob Brown", email: "bobbrown789@example.com" },
    { name: "Charlie Davis", email: "charlie.d@example.com" },
    { name: "Diana Evans", email: "dianae@example.com" },
    { name: "Ethan Harris", email: "ethan.h@example.com" },
    { name: "Fiona Clark", email: "fiona.c@example.com" },
    { name: "George Lewis", email: "georgel@example.com" },
    { name: "Hannah Walker", email: "hannahw@example.com" },
    { name: "Ian Hall", email: "ian.hall@example.com" },
    { name: "Julia Young", email: "juliay@example.com" },
    { name: "Kevin King", email: "kevink@example.com" },
    { name: "Lily Scott", email: "lily.s@example.com" },
    { name: "Michael Green", email: "michaelg@example.com" },
    { name: "Nina Adams", email: "ninaa@example.com" },
    { name: "Oscar Nelson", email: "oscarn@example.com" },
    { name: "Paula Mitchell", email: "paulam@example.com" },
    { name: "Quincy Roberts", email: "quincyr@example.com" },
    { name: "Rachel Carter", email: "rachelc@example.com" },
  ]);
  const [isAddContactOpen, setAddContactOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [searchVal, setSearchVal] = useState('')

  function handleAddContactModel(){
    setAddContactOpen((prev)=>!prev)
  }

  console.log(contacts)
  function handleSearching(e){
    setSearchVal(e.target.value);

    const filteredContacts = contacts.filter((contact)=>contact.name.includes(searchVal));
    setContacts(filteredContacts)
  }

  useEffect(() => {
    setContacts(localStorage.getItem('contacts'))
  
    return () => {
      localStorage.setItem('contacts',contacts)
    }
  }, [contacts])
  

  return (
    <>
      {isAddContactOpen ? (
        <AddContact name={name} setName={setName} email={email} setEmail={setEmail} setContacts={setContacts} handleAddContactModel={handleAddContactModel} />
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
