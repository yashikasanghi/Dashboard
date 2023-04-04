import React from "react";
import { UserCircleIcon, EnvelopeIcon, PhoneIcon, PencilIcon, TrashIcon } from "@heroicons/react/20/solid";
import { useState, useContext, useReducer } from "react";
import { EditFormContext } from "../../context/editFormContext";
import AddContact from "../addContact";

const dummyContact = [
    {
        name:"Sales Team",
        email:"salesteam@br.in / salesteam2@br.in",
        num: "+91 8511591740 / 8000058214"
    },{
        name:"Marketing Team",
        email:"salesteam@br.in / salesteam2@br.in",
        num: "+91 8511591740 / 8000058214"
    },{
        name:"Development Team",
        email:"salesteam@br.in / salesteam2@br.in",
        num: "+91 8511591740 / 8000058214"
    },{
        name:"Testing Team",
        email:"salesteam@br.in / salesteam2@br.in",
        num: "+91 8511591740 / 8000058214"
    },{
        name:"Product Team",
        email:"salesteam@br.in / salesteam2@br.in",
        num: "+91 8511591740 / 8000058214"
    },
];



export default function Contact(props){

    const [addContact, setAddContact] = useState(false);
    const [contactDisplay, setContactDisplay] = useState(true);

    const addContactHandler = () => {
        
        const newState = {
            title: "",
            key:"addContact",
            content:"",
          }
          setAddContact(true);
          setContactDisplay(false);
        // formDetailsCtx.dispatchedState(
        //     {
        //       type: "PREFILL",
        //       props: props,
        //       payload: newState
        //     }
        //   )
    };

    return(
        <>
        {contactDisplay && <>
            <p className="text-xs text-gray-400 ml-4 mt-2">Please provide the company's email & Contact</p>
            {dummyContact.map(info => 
            <div className="m-4 w-96 border border-gary-400 p-8 rounded-lg">
                <div className="flex relative">
                <UserCircleIcon className="h-6 w-6 mr-4 text-gray-400"/>
                <h1 className="">{info.name}</h1>
                <TrashIcon className="h-4 w-4 mr-4 text-red-700 absolute right-8"/>
                <PencilIcon className="h-4 w-4 mr-4 text-red-700 absolute right-0"
                onClick={addContactHandler}
                />
                </div>
                <div className="flex my-8">
                <EnvelopeIcon className="h-6 w-6 mr-4 text-gray-400"/>
                <h2>{info.email}</h2>
                </div>
                <div className="flex">
                <PhoneIcon className="h-6 w-6 mr-4 text-gray-400"/>
                <h2>{info.num}</h2>
                </div>
            </div>
            )}

            <button className="bg-red-700 text-white w-5/6 py-2 rounded-lg ml-8">Save</button>
            </>}
            {addContact && <AddContact/>}
        </>
    );
}