import React, { useContext, useState } from "react";
import {
  PencilIcon,
  TrashIcon,
  ChatBubbleLeftEllipsisIcon,
  PlusCircleIcon
} from "@heroicons/react/20/solid";
import { StatementContext } from "../../context/statementContext";

const editStatementVal = {
  type: '',
  display: false,
  id: 0,
  statement: "",
}

export default function Statement(props) {
  const statementsCtx = useContext(StatementContext);
  const [showEditStatement, setEditStatement] = useState(editStatementVal);
  const [getEditedStatement, setEditedStatement] = useState("");

  const editStatementHandler = (id, statement, sel) => {
    const newVal = {
      type: sel,
      display: true,
      id: id,
      statement: statement
    };
    setEditStatement(newVal);

  }

  const getEditedStatementHandler = (event) => {
    setEditedStatement(event.target.value);
  };

  const saveEditedStatementHandler = () => {
    
    if(showEditStatement.type === 'EDIT'){
      statementsCtx.dispatchedStatementsState({type: 'EDIT', id: showEditStatement.id, statement: getEditedStatement});
      setEditStatement({...showEditStatement, display: false});
      return;
    }else if(showEditStatement.type === 'NEWSTATEMENT'){
      statementsCtx.dispatchedStatementsState({type: 'NEWSTATEMENT', id: showEditStatement.id, statement: getEditedStatement});
      setEditStatement({...showEditStatement, display: false});
      return;
    }
    return;
  };

  return (
    <>
    {!showEditStatement.display && <>
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
            <PencilIcon className="h-4 w-4 mr-4 text-red-700 absolute right-0"
            onClick={() => editStatementHandler(info.id, info.content, "EDIT")} />
          </div>
          <p className="text-xs mt-2 w-64">{info.content}</p>
        </div>
      ))}
      <button 
      className="text-red-700 bg-red-100 w-full py-2 mb-8"
      onClick={() => editStatementHandler(statementsCtx.data[statementsCtx.data.length-1].id+1, "", "NEWSTATEMENT")}

      >
          Add More
          <PlusCircleIcon className="h-6 w-6 text-red-700 absolute ml-32 -mt-6" />
        </button>
        </>}
        {showEditStatement.display && 
        <>
        <textarea
        className="border text-sm p-3 border-gray-400 rounded-lg w-full h-40 mt-8"
        defaultValue={showEditStatement.statement}
        onChange={getEditedStatementHandler}/>
        <button className="bg-red-700 text-white w-5/6 py-2 rounded-lg  absolute bottom-8 right-8"
        onClick={saveEditedStatementHandler}
        >
            Save
        </button>
        </>}
    </>
  );
}
