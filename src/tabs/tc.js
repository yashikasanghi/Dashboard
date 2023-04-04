import React from "react";
import { PencilIcon } from "@heroicons/react/20/solid";

export default function TC(props) {
  return (
    <>
    <hr className="border-red-700 w-40 z-10 tc-margin"/>
   
    <div className="p-6 flex">
      <div className="w-2/3">
        <div className="flex">
          <h1 className="font-bold mr-6 mb-6">Terms & Conditions</h1>
          <PencilIcon className="h-4 w-4 text-red-700" />
        </div>
        <div>
          <h2 className="mb-4 font-bold text-gray-600">1. Agreement</h2>
          <p className="text-gray-400 text-sm leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className="border border-gray-400 bg-gray-50 p-4 ml-12 w-72">
        <h2 className="font-bold text-gray-600">Table of Contents: </h2>
        <h3 className="mt-8 mb-2 font-bold text-gray-600">Agreement</h3>
        <ul className="text-sm text-gray-400 leading-10">
          <li>Services & Paid Subscription</li>
          <li>Rights & Laws</li>
          <li>3rd Party Applications</li>
          <li>Rights you grant us</li>
        </ul>
      </div>
    </div>
    </>
  );
}
