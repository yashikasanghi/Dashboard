import React from "react";
import { PlusCircleIcon } from "@heroicons/react/20/solid";

export default function AddContact(props) {
  return (
    <>
      <p className="text-xs text-gray-400 ml-4 mt-2">
        Please provide the company's email & contacts
      </p>
      <form className="mt-6 ml-4">
        <label className="font-bold text-sm text-black">Email ID</label>
        <input
          type="text"
          placeholder="eg. salesteam@br.in"
          className="mb-6 w-full border border-gray-200 bg-gray-50 py-2 text-xs my-2 pl-3"
        />
        <button className="text-red-700 bg-red-100 w-full py-2 mb-8">
          Add More
          <PlusCircleIcon className="h-6 w-6 text-red-700 absolute ml-32 -mt-6" />
        </button>
        <label className="font-bold text-sm text-black">Contact Number</label>
        <input
          type="text"
          placeholder="eg. 8511591749"
          className="mb-6 w-full border border-gray-200 bg-gray-50 py-2 text-xs my-2 pl-3"
        />
        <button className="text-red-700 bg-red-100 w-full py-2 mb-8">
          Add More
          <PlusCircleIcon className="h-6 w-6 text-red-700 absolute ml-32 -mt-6" />
        </button>
      </form>
    </>
  );
}
