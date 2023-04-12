import React from "react";
import {
  PencilIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/20/solid";
import { useState, useReducer } from "react";
import EditBox from "../components/editBox";

const dummyPrivacyText = [
  {
    num: 1,
    title: "Introduction",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    num: 2,
    title: "Data we collect",
    description:
      "Data we collect Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    num: 3,
    title: "How we use your data",
    description:
      "How we use your data Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    num: 4,
    title: "How we share information",
    description:
      "How we share information Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    num: 5,
    title: "Your choices and obligations",
    description:
      "Your choices and obligations Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    num: 6,
    title: "Other important information",
    description:
      "Other important information Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const initialValue = {
  id: 0,
  editBoxDisplay: false,
  showMoreButtonDisplay: true,
};

const privacyReducer = (state, action) => {
  if (action.type === "DISCARD") {
    const newState = {
       ...state, editBoxDisplay: false };
    return newState;
  } else if (action.type === "SAVE") {
    const newState = { ...state, editBoxDisplay: false,};
    return newState;
  }else if(action.type === 'EDIT'){
    const newState = {
      ...state, editBoxDisplay: true, id: action.id
    }
    return newState;
  }else if(action.type === 'NAVIGATE'){
    const newState = {
      ...state,
      id: [action.num-1],
    };
    return newState
  }else if(action.type === 'SHOWMORECLICKED'){
    const newState = {
      ...state,
      showMoreButtonDisplay: false
    }
    return newState;
  }else if(action.type === 'SHOWLESSCLICKED'){
    const newState = {
      ...state,
      showMoreButtonDisplay: true
    };
    return newState;
  }
  return state;
};

const privacyTextHandler = (oldData, newDesc, id) => {
  const newId = parseInt(id)+1;
  const newData = oldData.map((item) =>
  (item.num === newId) ? {...item, description: newDesc} : {...item}
  )
  return newData;
};


export default function Privacy(props) {
  const [getPrivacyText, setPrivacyText] = useState(dummyPrivacyText);
  const [privacyData, setPrivacyData] = useReducer(privacyReducer,initialValue);

  const discardEditHandler = () => {
    setPrivacyData({ type: "DISCARD" });
  };

  const saveEditHandler = (value) => {
    setPrivacyData({ type: "SAVE", newDescription: value });
    const newPrivacyData = privacyTextHandler(getPrivacyText, value, privacyData.id);
    setPrivacyText(newPrivacyData);
  };

  

  return (
    <>
      {privacyData.editBoxDisplay && (
        <EditBox
          heading={getPrivacyText[privacyData.id].title}
          data={getPrivacyText[privacyData.id].description}
          discardSubDesc={discardEditHandler}
          saveSubDesc={saveEditHandler}
        />
      )}

      <hr className="border-red-700 w-28 z-10 privacy-margin" />
      <div className="p-6 flex">
        <div className="w-2/3">
          <div className="flex">
            <h1 className="font-bold mr-6 mb-6">Your Privacy Matters</h1>
            <PencilIcon
              className="h-4 w-4 text-red-700"
              onClick={() => {
                setPrivacyData({
                  type: "EDIT",
                  id: [privacyData.id],
                });
              }}
            />
          </div>

          {privacyData.showMoreButtonDisplay && (
            <>
              <div>
                <h2 className="font-bold text-gray-600 my-4">
                  {getPrivacyText[privacyData.id].num + ". " + getPrivacyText[privacyData.id].title}
                </h2>
                <p className="text-gray-400 text-xs leading-7">
                  {getPrivacyText[privacyData.id].description}
                </p>
              </div>
              <button
                onClick={() => setPrivacyData({ type: "SHOWMORECLICKED" })}
                className="flex text-gray-600 text-sm ml-56 mt-4"
              >
                SHOW MORE
                <ChevronDownIcon className="h-6 w-6 ml-1 mb-8" />
              </button>
            </>
          )}
          {!privacyData.showMoreButtonDisplay &&
          <>
            {getPrivacyText.map((item) => (
              <div>
                <h2 className="font-bold text-gray-600 my-4">
                  {item.num + ". " + item.title}
                </h2>
                <p className="text-gray-400 text-sm leading-7">
                  {item.description}
                </p>
              </div>
            ))}
            <button
              onClick={() => setPrivacyData({ type: "SHOWLESSCLICKED" })}
              className="flex text-gray-600 text-sm ml-56 mt-8"
            >
              SHOW LESS
              <ChevronUpIcon className="h-6 w-6 ml-1 mb-8" />
            </button>
            </>
          }
        </div>

        <div className="border border-gray-400 bg-gray-50 p-4 ml-12 w-64 h-fit">
          <h2 className="font-bold text-gray-600 mb-4 text-lg">
            Table of Contents:
          </h2>
          {getPrivacyText.map((item) => (
            <>
              <button
                num={item.num}
                className={classNames(
                  item.title === getPrivacyText[privacyData.id].title
                    ? "font-bold text-gray-600"
                    : "text-gray-400",
                  "text-xs leading-8 "
                )}
                onClick={() => setPrivacyData({ type: "NAVIGATE", num: item.num })}
              >
                {item.title}
              </button>
              <br />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
