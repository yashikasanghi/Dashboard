import React, {useContext} from "react";
import EditModal from "../modal/editModal";
import { EditFormContext } from "../context/editFormContext";
import Contact from "../tabs/info/contact";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import Address from "../tabs/info/address";
import SocialMedia from "../tabs/info/socialmedia";
import Statement from "../tabs/info/statement";
import Operations from "../tabs/info/operations";
import AddContact from "../tabs/addContact"

export default function EditForm(props){
    const formCtx = useContext(EditFormContext);

    return(
    <EditModal classes={"modal"}>
        <div className="">
        <ArrowLeftIcon
        className="inline-block h-6 w-6 mb-2 inherit text-black"
        aria-hidden="true"
        onClick={props.closeEditFormHandler}
      />
       <h1 className="inline-block text-2xl font-bold ml-4 mt-4">{formCtx.title}</h1> 
        </div>
        
        {(formCtx.key === 'contact') ? <Contact/> : <></>}
        {(formCtx.key === 'address') ? <Address/> : <></>}
        {(formCtx.key === 'operations') ? <Operations/> : <></>}
        {(formCtx.key === 'socialmedia') ? <SocialMedia/> : <></>}
        {(formCtx.key === 'statement') ? <Statement/> : <></>}
        {(formCtx.key === 'addContact') ? <AddContact/> : <></>}
   
    </EditModal>)
}