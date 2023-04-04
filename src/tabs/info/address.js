import React from "react";

export default function Address (props){
    return(
       <>
       <form className="mt-10">
       <input type="text" placeholder="Floor Number /  Block No / Office Number" className="w-full border border-gray-200 bg-gray-50 py-2 text-xs my-2 pl-3"/>
       <input type="text" placeholder="Area / Locality" className="w-full border border-gray-200 bg-gray-50 py-2 text-xs my-2 pl-3"/>
       <input type="text" placeholder="Nearest Landmark" className="w-full border border-gray-200 bg-gray-50 py-2 text-xs my-2 pl-3"/>
       <input type="text" placeholder="Town / City" className="w-full border border-gray-200 bg-gray-50 py-2 text-xs my-2 pl-3"/>
       <input type="text" placeholder="City" className="w-full border border-gray-200 bg-gray-50 py-2 text-xs my-2 pl-3"/>
       <input type="text" placeholder="Pincode" className="w-full border border-gray-200 bg-gray-50 py-2 text-xs my-2 pl-3"/>
       </form>
       <button className="bg-red-700 text-white w-96 ml-8 py-2 rounded-lg fixed bottom-8">Save</button>
       </>

    );
}