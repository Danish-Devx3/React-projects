import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

const ShowContact = ({ contacts }) => {
  return (
    <div className="overflow-scroll no-scrollbar h-[75vh] mt-5">
      <h1 className="text-2xl">Contacts</h1>
      {contacts.map((contact) => {
        return (
          <div className="bg-gray-400 flex justify-between items-center rounded-md p-5 mt-2">
            <div>
              <h1 className="text-xl capitalize">{contact.name}</h1>
              <h4 className="text-xl">{contact.email}</h4>
            </div>
            <div className="flex gap-1">
              <FaRegEdit className="text-2xl cursor-pointer hover:scale-95" />
              <AiOutlineDelete className="text-2xl cursor-pointer hover:scale-95" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowContact;
