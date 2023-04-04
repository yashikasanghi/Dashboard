import React from "react";

export default function Wrapper(props){
    return(
        <div className="bg-white ml-64 h-full w-5/6 p-6 rounded-lg -mt-2">
            {props.children}
        </div>
    );
}