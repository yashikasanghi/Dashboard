import React from "react";
import {
  PencilIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/20/solid";
import { useReducer, useState } from "react";
import EditBox from "../components/editBox";

const dummyTCText = [
  {
    num: 1,
    title: "Agreement",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    num: 2,
    title: "Services & Paid Subscription",
    description:
      "Services & Paid Subscription Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    num: 3,
    title: "Rights & Laws",
    description:
      "Rights & Laws Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    num: 4,
    title: "3rd Party Applications",
    description:
      "3rd Party Applications Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    num: 5,
    title: "Rights you grant us",
    description:
      "Rights you grant us Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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

const tcReducer = (state, action) => {
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

const tcTextHandler = (oldData, newDesc, id) => {
  const newId = parseInt(id)+1;
  const newData = oldData.map((item) =>
  (item.num === newId) ? {...item, description: newDesc} : {...item}
  )
  return newData;
};


export default function TC(props) {
  const [getTCText, setTCText] = useState(dummyTCText);
  const [tcData, setTCData] = useReducer(tcReducer,initialValue);

  const discardEditHandler = () => {
    setTCData({ type: "DISCARD" });
  };

  const saveEditHandler = (value) => {
    setTCData({ type: "SAVE", newDescription: value });
    const newTCData = tcTextHandler(getTCText, value, tcData.id);
    setTCText(newTCData);
  };

  

  return (
    <>
      {tcData.editBoxDisplay && (
        <EditBox
          heading={getTCText[tcData.id].title}
          data={getTCText[tcData.id].description}
          discardSubDesc={discardEditHandler}
          saveSubDesc={saveEditHandler}
        />
      )}

      <hr className="border-red-700 w-36 z-10 tc-margin" />
      <div className="p-6 flex">
        <div className="w-2/3">
          <div className="flex">
            <h1 className="font-bold mr-6 mb-6">Terms & Conditions</h1>
            <PencilIcon
              className="h-4 w-4 text-red-700"
              onClick={() => {
                setTCData({
                  type: "EDIT",
                  id: [tcData.id],
                });
              }}
            />
          </div>

          {tcData.showMoreButtonDisplay && (
            <>
              <div>
                <h2 className="font-bold text-gray-600 my-4">
                  {getTCText[tcData.id].num + ". " + getTCText[tcData.id].title}
                </h2>
                <p className="text-gray-400 text-xs leading-7">
                  {getTCText[tcData.id].description}
                </p>
              </div>
              <button
                onClick={() => setTCData({ type: "SHOWMORECLICKED" })}
                className="flex text-gray-600 text-sm ml-56 mt-4"
              >
                SHOW MORE
                <ChevronDownIcon className="h-6 w-6 ml-1 mb-8" />
              </button>
            </>
          )}
          {!tcData.showMoreButtonDisplay &&
          <>
            {getTCText.map((item) => (
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
              onClick={() => setTCData({ type: "SHOWLESSCLICKED" })}
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
          {getTCText.map((item) => (
            <>
              <button
                num={item.num}
                className={classNames(
                  item.title === getTCText[tcData.id].title
                    ? "font-bold text-gray-600"
                    : "text-gray-400",
                  "text-xs leading-8"
                )}
                onClick={() => setTCData({ type: "NAVIGATE", num: item.num })}
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