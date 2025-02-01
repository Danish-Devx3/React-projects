import React from "react";
import { FaRegEdit, FaUser } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
const ShowContact = ({
  handleAddContactModel,
  setName,
  setEmail,
  setContacts,
  contacts,
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
    <div className="overflow-scroll no-scrollbar h-[75vh] mt-5">
      <h1 className="text-2xl">Contacts</h1>
      {contacts.map((contact) => {
        return (
          <div className="bg-gray-400 flex justify-between items-center rounded-md p-5 mt-2">
            <div className="flex items-center ">
              <FaUser className="text-3xl mr-3" />
              
              <div>
              <h1 className="text-xl capitalize">{contact.name}</h1>
              <h4 className="text-md">{contact.email}</h4>
              </div>
            </div>
            <div className="flex gap-1">
              <FaRegEdit
                onClick={() => handleEdit(contact)}
                className="text-2xl cursor-pointer hover:scale-95"
              />
              <AiOutlineDelete
                onClick={() => {
                  handleDelete(contact);
                }}
                className="text-2xl cursor-pointer hover:scale-95"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowContact;
