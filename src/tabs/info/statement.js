import React, { useContext } from "react";
import {
  PencilIcon,
  TrashIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/20/solid";
import { StatementContext } from "../../context/statementContext";

export default function Statement(props) {
  const statementsCtx = useContext(StatementContext);
  return (
    <div>
      <p className="text-xs text-gray-400 ml-4 mt-4 mb-6">
        Write down the statements of the company in to
        <br />
        <span>convey your vision to the potential customer</span>
      </p>
      {statementsCtx.data.map((info) => (
        <div className="m-4 w-5/6 border border-gary-400 p-4 rounded-lg">
          <div className="flex relative">
            <ChatBubbleLeftEllipsisIcon className="h-6 w-6 mr-4 text-gray-400" />
            <TrashIcon className="h-4 w-4 mr-4 text-red-700 absolute right-8" 
            onClick={() => statementsCtx.dispatchedStatementsState({type: 'DELETE', key:info.id})}/>
            <PencilIcon className="h-4 w-4 mr-4 text-red-700 absolute right-0" />
          </div>
          <p className="text-xs mt-2 w-64">{info.content}</p>
        </div>
      ))}
    </div>
  );
}
