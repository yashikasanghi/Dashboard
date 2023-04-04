import React, {useState} from "react";
import Cards from "../components/cards";
import EditForm from "../components/editForm";
import { UserCircleIcon, MapPinIcon, BriefcaseIcon, LinkIcon, ChatBubbleLeftEllipsisIcon, EnvelopeIcon, PhoneIcon} from "@heroicons/react/20/solid";

const dummyData = [
    {
        key:"contact",
        title: "Contact",
        content:
        <div className="">
             
             <div className="mb-2">
             <EnvelopeIcon className="h-4 w-4 text-gray-400 mr-1 inline-block mr-4"/>
                <span className="text-sm">salesteam@br.in /</span>
                <br/>
                <span className="ml-5 text-sm">salesteam2@br.in</span>
            </div>
            
             <PhoneIcon className="h-4 w-4 text-gray-400 mr-1 inline-block"/>
             <span>+91 8511591740 / 8000058214</span>
        </div>,   
        icon: <UserCircleIcon className="h-6 w-6 text-gray-400 mr-1 inline-block"/>
    },
    {
        key:"address",
        title:"Address",
        content: "C-1 / 351 / 4, GIDC Makarpura, Vadodara - 390010, Gujrat, India",
        icon: <MapPinIcon className="h-6 w-6 text-gray-400 mr-1 inline-block"/>
    },
    {
        key:"operations",
        title:"House of Operations",
        content:"Monday to Friday - 09:00 Am To 06:00 Pm",
        icon: <BriefcaseIcon className="h-6 w-6 text-gray-400 mr-1 inline-block"/>
    },
    {
        key:"socialmedia",
        title: "Social Media & Links",
        content: 
        <div className="mt-4">
            <div className="inline-block mr-4 text-center">
            <img src="globe.png" alt="globe" className="h-7 w-7 ml-2"/>
            <span className="text-xs">Website</span>
            </div>
            <div className="inline-block mr-4 text-center">
            <img src="instagram.png" alt="instagram" className="h-6 w-6 ml-4"/>
            <span className="text-xs">Instagram</span>
            </div>
            <div className="inline-block mr-4">
            <img src="facebook.png" alt="facebook" className="h-6 w-6 ml-4"/>
            <span className="text-xs">Facebook</span>
            </div>
            <div className="inline-block">
            <img src="twitter.png" alt="twitter" className="h-6 w-6 ml-2"/>
            <span className="text-xs">Twitter</span>
            </div>            
        </div>,
        icon: <LinkIcon className="h-6 w-6 text-gray-400 mr-1 inline-block"/>
    },
    {
        key:"statement",
        title: "Statement",
        content: "You think it we ink it.",
        icon: <ChatBubbleLeftEllipsisIcon className="h-6 w-6 text-gray-400 mr-1 inline-block"/>
    }
];
export default function Info(props){
    const [editModal ,setEditModal] = useState(false);

    const editFormHandler = () => {
        setEditModal(true);
    }
    const closeEditFormHandler = () => {
        setEditModal(false);
    }

    return(
        <>
        <hr className="border-red-700 w-12 ml-2 z-10"/>
        <div className="flex flex-wrap">            
            {dummyData.map(item => 
                <Cards data={item} editFormHandler={editFormHandler}/>
            )}
        {editModal && <EditForm closeEditFormHandler={closeEditFormHandler}/>}
        </div>
        </>
    );
}