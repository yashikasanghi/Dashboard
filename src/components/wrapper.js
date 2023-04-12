import React from "react";

export default function Wrapper(props){
    return(
        <div className="bg-white ml-64 h-full w-4/5 p-4 mt-1 rounded-lg -mt-2">
            {props.children}
        </div>
    );
}