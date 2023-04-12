import React, { useState, useReducer } from "react";
import Wrapper from "../components/wrapper";
import Info from "../tabs/info";
import TC from "../tabs/tc";
import FAQ from "../tabs/faq";
import Complaints from "../tabs/complaints";
import Privacy from "../tabs/privacy";
import { CheckCircleIcon, PencilIcon } from "@heroicons/react/20/solid";
import EditBox from "../components/editBox";

const dummyTabs = [
  { title: "Info" },
  { title: "FAQ" },
  { title: "Complaints & Feedback" },
  { title: "Privacy Policy" },
  { title: "Terms & Conditions" },
];

const initialValue = {
  display: false,
  title: "Sub-Description",
  subDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

const editBoxReducer = (state, action) => {
    if(action.type === 'EDIT'){
      const newState = {...state, display: true}
      console.log(newState);
      return newState;
    }else if(action.type === 'CLOSE'){
      const newState = {...state, display: false};
      return newState;
    }else if(action.type === 'SAVE'){
        const newState = {...state, display: false, subDesc: action.subDesc};
        return newState;
    }
    return state;
  };


export default function AboutUs() {
  const [displayTab, setDisplayTab] = useState("Info");
  const [displayEditBox, setDisplayEditBox] = useReducer(editBoxReducer, initialValue);

  const tabHandler = (tab) => {
    setDisplayTab(tab.title);
  };

  const discardEditHandler = () => {
    setDisplayEditBox({type:"CLOSE"});
  };

  const saveEditHandler = (value) => {
    setDisplayEditBox({type:"SAVE", subDesc: value});
  };


  return (
    <Wrapper>
      {displayEditBox.display && (
        <EditBox
          heading={displayEditBox.title}
          data={displayEditBox.subDesc}
          discardSubDesc={discardEditHandler}
          saveSubDesc={saveEditHandler}
        />
      )}
 
      <>
        <h1 className="text-black text-xl font-bold mb-1">About Us</h1>
        <img
          src="digital.jpg"
          className="rounded-md h-20 w-58 fixed inline-block relative"
        />
        <CheckCircleIcon className="text-gray-300 h-6 w-6 mr-2 inline-block relative" />
        <a className="text-blue-400 decoration-blue-400 underline underline-offset-4 text-sm">
          Verified Company
        </a>
        <div className="flex">
          <p className="text-gray-600 text-sm w-9/12 mb-2 ml-4">{displayEditBox.subDesc}</p>
          <PencilIcon
            className="h-4 w-4 text-red-700 cursor-pointer"
            onClick={() => {
              setDisplayEditBox({type:"EDIT"});
            }}
          />
        </div>
        {dummyTabs.map((tab) => (
          <button
            className="text-gray-600 inline-block m-4 text-sm "
            onClick={() => tabHandler(tab)}
            key={tab.title}
          >
            {tab.title}
          </button>
        ))}
        <hr className="w-full text-gray-600" />
        {displayTab === "Info" ? <Info /> : <></>}
        {displayTab === "FAQ" ? <FAQ /> : <></>}
        {displayTab === "Complaints & Feedback" ? <Complaints /> : <></>}
        {displayTab === "Privacy Policy" ? <Privacy /> : <></>}
        {displayTab === "Terms & Conditions" ? <TC /> : <></>}
      </>
    </Wrapper>
  );
}
