import React from "react";
import { FaRegEdit, FaUser } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
const ShowContact = ({
  handleAddContactModel,
  setName,
  setEmail,
  setContacts,
  contacts,
  filter
}) => {
  function handleDelete(con) {
    const filtered = contacts.filter((contact) => {
      return con != contact;
    });

    setContacts(filtered);
  }

  function handleEdit(con) {
    setName(con.name);
    setEmail(con.email);
    handleAddContactModel();


    const filtered = contacts.filter((contact) => {
      return con != contact;
    });

    setContacts(filtered);
    
  }

  

  

  return (
    <>
      {filter.length > 0 ? (<div className="overflow-scroll no-scrollbar h-[75vh] mt-5">
      <h1 className="text-2xl font-bold text-white mb-4">Contacts</h1>
      {filter.length === 0 ? (
        <div className="text-white text-center mt-10">
          <p className="text-xl">No contacts found</p>
          <p className="text-sm opacity-75">Add new contacts to get started</p>
        </div>
      ) : (
        filter.map((contact) => (
          <div key={contact.email} className="bg-white/10 backdrop-blur-md flex justify-between items-center rounded-lg p-4 mt-3 transition-all hover:bg-white/20">
            <div className="flex items-center">
              <div className="bg-[#3498db] p-3 rounded-full mr-4">
                <FaUser className="text-2xl text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-white capitalize">{contact.name}</h1>
                <h4 className="text-sm text-gray-300">{contact.email}</h4>
              </div>
            </div>
            <div className="flex gap-3">
              <FaRegEdit
                onClick={() => handleEdit(contact)}
                className="text-2xl text-white cursor-pointer hover:text-[#3498db] transition-colors"
              />
              <AiOutlineDelete
                onClick={() => handleDelete(contact)}
                className="text-2xl text-white cursor-pointer hover:text-red-500 transition-colors"
              />
            </div>
          </div>
        ))
      )}
    </div>) : (<div className="overflow-scroll no-scrollbar h-[75vh] mt-5">
      <h1 className="text-2xl font-bold text-white mb-4">Contacts</h1>
      {contacts.length === 0 ? (
        <div className="text-white text-center mt-10">
          <p className="text-xl">No contacts found</p>
          <p className="text-sm opacity-75">Add new contacts to get started</p>
        </div>
      ) : (
        contacts.map((contact) => (
          <div key={contact.email} className="bg-white/10 backdrop-blur-md flex justify-between items-center rounded-lg p-4 mt-3 transition-all hover:bg-white/20">
            <div className="flex items-center">
              <div className="bg-[#3498db] p-3 rounded-full mr-4">
                <FaUser className="text-2xl text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-white capitalize">{contact.name}</h1>
                <h4 className="text-sm text-gray-300">{contact.email}</h4>
              </div>
            </div>
            <div className="flex gap-3">
              <FaRegEdit
                onClick={() => handleEdit(contact)}
                className="text-2xl text-white cursor-pointer hover:text-[#3498db] transition-colors"
              />
              <AiOutlineDelete
                onClick={() => handleDelete(contact)}
                className="text-2xl text-white cursor-pointer hover:text-red-500 transition-colors"
              />
            </div>
          </div>
        ))
      )}
    </div>)}
    </>
  );
};

export default ShowContact;
