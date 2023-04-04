import React from "react";
import EditModal from "../modal/editModal";
import { useState } from "react";

export default function EditBox(props) {
  const [getDesc, setDesc] = useState(props.data);

  function handleChange() {
    props.saveSubDesc(getDesc);
  }

  function descHandler(event) {
    setDesc(event.target.value);
  }

  return (
    <EditModal classes={"backdrop"}>
      <div className="edit-box rounded-lg p-6">
        <h1 className="font-bold mb-4 text-lg">{props.heading}</h1>

        <textarea
          className="border text-sm p-3 border-gray-400 rounded-lg w-full h-auto"
          defaultValue={props.data}
          onChange={descHandler}
        />
      </div>
      <div className="float-right">
        <button
          className="relative mt-4 mr-4 bg-red-700 text-white h-8 w-24 rounded-lg"
          onClick={handleChange}
        >
          Save
        </button>
        <button
          className="relative float-right mt-4 bg-red-700 text-white h-8 w-24 rounded-lg"
          onClick={props.discardSubDesc}
        >
          Discard
        </button>
      </div>
    </EditModal>
  );
}
