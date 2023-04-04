import React from "react";

export default function SocialMedia (props){
    return(
       <>
       <p className="text-xs text-gray-400 ml-4 mt-2">Please provide the links to the social media
       <br/> 
       <span>accounts & website of the company</span>
       </p>
       <form className="mt-6 ml-4">
       <label className="font-bold text-sm text-black">Instagram</label>
       <input type="text" placeholder="eg. www.instagram.com/companyname" className="mb-6 w-full border border-gray-200 bg-gray-50 py-2 text-xs my-2 pl-3"/>
       
       <label className="font-bold text-sm text-black">Facebook</label>
       <input type="text" placeholder="eg. www.facebook.com/companyname" className="mb-6 w-full border border-gray-200 bg-gray-50 py-2 text-xs my-2 pl-3"/>
       
       <label className="font-bold text-sm text-black">Twitter</label>
       <input type="text" placeholder="eg. www.twitter.com/companyname" className="mb-6 w-full border border-gray-200 bg-gray-50 py-2 text-xs my-2 pl-3"/>
       
       <label className="font-bold text-sm text-black">Website</label>
       <input type="text" placeholder="eg. www.companyname.com" className="w-full border border-gray-200 bg-gray-50 py-2 text-xs my-2 pl-3"/>
       
       </form>
       </>

    );
}