import React, { useState, useContext } from "react";
import Cards from "../components/cards";
import EditForm from "../components/editForm";
import {
  UserCircleIcon,
  MapPinIcon,
  BriefcaseIcon,
  LinkIcon,
  ChatBubbleLeftEllipsisIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import { ContactContext } from "../context/contactContext";
import { StatementContext } from "../context/statementContext";
import { AddressContext } from "../context/addressContext";

export default function Info(props) {
  const [editModal, setEditModal] = useState(false);
  const contactCtx = useContext(ContactContext);
  const statementCtx = useContext(StatementContext);
  const addressCtx = useContext(AddressContext)

  const dummyData = [
    {
      key: "contact",
      title: "Contact",
      content: (
        <div className="flex relative">
          <div className="float-left">
            <div className="mb-2">
              <EnvelopeIcon className="h-4 w-4 text-gray-400 mr-1 inline-block mr-4" />
              <span className="text-xs">
                {contactCtx.data[0].primaryEmail} /
              </span>
              <br />
              <span className="ml-8 text-xs">
                {contactCtx.data[0].secondaryEmail}
              </span>
            </div>

            <PhoneIcon className="h-4 w-4 text-gray-400 mr-1 inline-block" />
            <span>
              {contactCtx.data[0].countryCode}{" "}
              {contactCtx.data[0].primaryContactNo} /{" "}
              {contactCtx.data[0].secondaryContactNo}
            </span>
          </div>
          <div className="h-fit w-fit bg-red-200 text-red-700 rounded-full text-center p-1 text-xs absolute top-0 right-0">
            +{contactCtx.noOfContacts - 1}
          </div>
        </div>
      ),
      icon: (
        <UserCircleIcon className="h-6 w-6 text-gray-400 mr-1 inline-block" />
      ),
    },
    {
      key: "address",
      title: "Address",
      content:
      <span>{addressCtx.address}</span>,
      icon: <MapPinIcon className="h-6 w-6 text-gray-400 mr-1 inline-block" />,
    },
    {
      key: "operations",
      title: "House of Operations",
      content: "Monday to Friday - 09:00 Am To 06:00 Pm",
      icon: (
        <BriefcaseIcon className="h-6 w-6 text-gray-400 mr-1 inline-block" />
      ),
    },
    {
      key: "socialmedia",
      title: "Social Media & Links",
      content: (
        <div className="mt-4">
          <div className="inline-block mr-4 text-center">
            <img src="globe.png" alt="globe" className="h-6 w-6 ml-2" />
            <span className="text-xs">Website</span>
          </div>
          <div className="inline-block mr-4 text-center">
            <img src="instagram.png" alt="instagram" className="h-5 w-5 ml-4" />
            <span className="text-xs">Instagram</span>
          </div>
          <div className="inline-block mr-4">
            <img src="facebook.png" alt="facebook" className="h-5 w-5 ml-4" />
            <span className="text-xs">Facebook</span>
          </div>
          <div className="inline-block">
            <img src="twitter.png" alt="twitter" className="h-5 w-5 ml-2" />
            <span className="text-xs">Twitter</span>
          </div>
        </div>
      ),
      icon: <LinkIcon className="h-6 w-6 text-gray-400 mr-1 inline-block" />,
    },
    {
      key: "statement",
      title: "Statement",
      content: (
        <div className="flex relative justify-between">
          <div className="w-56 h-32 text-xs truncate">
            {statementCtx.data[0].content}
          </div>

          <div className="h-fit w-fit bg-red-200 text-red-700 rounded-full text-center p-1 text-xs absolute top-0 right-0">
            +{statementCtx.noOfStatements - 1}
          </div>
        </div>
      ),
      icon: (
        <ChatBubbleLeftEllipsisIcon className="h-6 w-6 text-gray-400 mr-1 inline-block" />
      ),
    },
  ];

  const editFormHandler = () => {
    setEditModal(true);
  };
  const closeEditFormHandler = () => {
    setEditModal(false);
  };

  return (
    <>
      <hr className="border-red-700 w-12 ml-2 z-10" />
      <div className="flex flex-wrap">
        {dummyData.map((item) => (
          <Cards data={item} editFormHandler={editFormHandler} />
        ))}
        {editModal && <EditForm closeEditFormHandler={closeEditFormHandler} />}
      </div>
    </>
  );
}
