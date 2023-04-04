import React from "react";
import ReactDOM from "react-dom";

export default function EditModal(props){

   return(
    <React.Fragment>
        {ReactDOM.createPortal(<div 
        className={props.classes}>
            <div>{props.children}</div>
        </div>, document.getElementById("editModal"))}
    </React.Fragment>
   );

}
