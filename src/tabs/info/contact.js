import React from "react";
import {
  UserCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import { useState, useContext } from "react";
import { ContactContext } from "../../context/contactContext";
import AddContact from "../addContact";

export default function Contact(props) {
  const [addContact, setAddContact] = useState(false);
  const [contactDisplay, setContactDisplay] = useState(true);

  const contactCtx = useContext(ContactContext);

  const addContactHandler = () => {
    setAddContact(true);
    setContactDisplay(false);
  };
  
  return (
    <>
      {contactDisplay && (
        <>
          <p className="text-xs text-gray-400 ml-4 mt-2">
            Please provide the company's email & Contact
          </p>

          {contactCtx.data.map((info) => (
            <div className="m-4 w-96 border border-gary-400 p-8 rounded-lg text-sm" key={info.id}>
              <div className="flex relative">
                <UserCircleIcon className="h-6 w-6 mr-4 text-gray-400" />
                <h1 className="">{info.name}</h1>
                <TrashIcon className="h-4 w-4 mr-4 text-red-700 absolute right-8 cursor-pointer" 
                onClick={() => contactCtx.dispatchedContactState({type: 'DELETE', key:info.id})}
                />
                <PencilIcon
                  className="h-4 w-4 mr-4 text-red-700 absolute right-0"
                  onClick={addContactHandler}
                />
              </div>
              <div className="flex my-8">
                <EnvelopeIcon className="h-6 w-6 mr-4 text-gray-400" />
                <h2>
                  {info.emails
                    .map((e, idx) =>
                      idx === info.emails.length - 1 ? e : e + " / "
                    )
                    .join("")}
                </h2>
              </div>
              <div className="flex">
                <PhoneIcon className="h-6 w-6 mr-4 text-gray-400" />
                <h2>
                  {info.countryCode} {info.contactNo
                    .map((e, idx) =>
                      idx === info.emails.length - 1 ? e : e + " / "
                    )
                    .join("")}
                </h2>
              </div>
            </div>
          ))}
          <button className="bg-red-700 text-white w-5/6 py-2 rounded-lg ml-8 mb-4">
            Add New Contact
          </button>
          <button className="bg-red-700 text-white w-5/6 py-2 rounded-lg ml-8">
            Save
          </button>
        </>
      )}
      {addContact && <AddContact />}
    </>
  );
}
