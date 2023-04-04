import React from "react";

export default function Operations (props){
    return(
       <>
       
       <form className="mt-6 ml-4">
       <label className="font-bold text-sm text-black">Days</label>
       <input 
       type="text" 
       placeholder="Type..." 
       defaultValue="Monday to Friday"
       className="mb-6 w-full border border-gray-200 bg-gray-50 py-2 text-xs my-2 pl-3"/>

       <label className="font-bold text-sm text-black">Time</label>
       <input 
       type="text" 
       placeholder="Type..." 
       defaultValue="09:00 Am to 06:00 Pm"
       className="mb-6 w-full border border-gray-200 bg-gray-50 py-2 text-xs my-2 pl-3"/>
       </form>
       </>

    );
}