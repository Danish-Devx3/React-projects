import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";

const App = () => {

  const [contacts, setContacts] = useState();

  useEffect(()=>{
    const getContacts = async ()=>{
      try{
        const contactRef = collection(db,'contacts');
        const contactSnap = await getDocs(contactRef);
        const contactList = contactSnap.docs.map((doc)=>{
          return{
            id: doc.id,
            ...doc.data()
          }
        })
        console.log(contactList)
      } catch(error){
        console.log(error)
      }

    }

  },[])

  return (
    <div className="max-w-[370px] mx-auto">
      <Navbar />
      <div className="flex gap-2">
        <div className="flex relative items-center">
          <FiSearch className="text-white text-3xl absolute ml-1" />
          <input
            className="h-10 flex-grow rounded-md border border-white bg-transparent pl-9 text-3xl text-white"
            type="text"
          />
        </div>
          <AiFillPlusCircle className="absolute text-4xl cursor-pointer text-white right-49" />
      </div>
    </div>
  );
};

export default App;
