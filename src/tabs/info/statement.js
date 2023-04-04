import React from "react";
import {
  PencilIcon,
  TrashIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/20/solid";

const dummyContact = [
  {
    content:
      "eg. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  },
  {
    content:
      "eg. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  },
];

export default function Statement(props) {
  return (
    <div>
      <p className="text-xs text-gray-400 ml-4 mt-4 mb-6">
        Write down the statements of the company in to
        <br />
        <span>convey your vision to the potential customer</span>
      </p>
      {dummyContact.map((info) => (
        <div className="m-4 w-5/6 border border-gary-400 p-4 rounded-lg">
          <div className="flex relative">
            <ChatBubbleLeftEllipsisIcon className="h-6 w-6 mr-4 text-gray-400" />
            <TrashIcon className="h-4 w-4 mr-4 text-red-700 absolute right-8" />
            <PencilIcon className="h-4 w-4 mr-4 text-red-700 absolute right-0" />
          </div>
          <p className="text-xs mt-2 w-64">{info.content}</p>
        </div>
      ))}
    </div>
  );
}
