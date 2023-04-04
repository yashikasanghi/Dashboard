import React, {useState, useContext, useReducer} from "react";
import { PencilIcon } from "@heroicons/react/20/solid";
import { EditFormContext } from "../context/editFormContext";

const initialForm = {
    key: "",
    title: "",
};

export default function Cards(props){
    const formDetailsCtx = useContext(EditFormContext);

    const formReducer = (state, action) => {

            const newState = {
              title: action.title,
              key:action.key,
              content:action.content,
            }
            formDetailsCtx.dispatchedState(
            {
              type: "PREFILL",
              props: props,
              payload: newState
            }
          )
            return newState;

    };

    const [formDetails, setFormDetails] = useReducer(formReducer ,props);
    
    return(
        <div className="border border-slate-400 h-44 w-72 m-4 p-4 inline-block rounded-md" key={props.data.id}>
          <div className="flex relative">
          {props.data.icon}
        <h1 className="float-left font-bold mb-6">{props.data.title}</h1>
        <button
        className="absolute top-0 right-0 text-left"
        onClick={() => {setFormDetails({
            title: props.data.title,
            key: props.data.key,
            content: props.data.content
        })}}>
        <PencilIcon className="h-4 w-4 text-red-700"/>
        </button>
        </div>
        <div className="text-gray-600 text-sm">
            {props.data.content}
        </div>
    </div>
    )
    
}