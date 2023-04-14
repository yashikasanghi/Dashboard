import { useState, useContext } from "react";
import { AddressContext } from "../../context/addressContext";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

export default function Address(props) {
  const [getAddress, setAddress] = useState({
    plotNo: 0,
    area: "",
    city: "",
    state: "",
    pincode: "",
});
const [getLandmark, setLandmark] = useState('');
const [fieldMissing, setFieldMissing] = useState(false);
const addressCtx = useContext(AddressContext);

  const setAddressHandler = (event) => {
    event.preventDefault();
    const fieldName = event.target.id;
    const fieldValue = event.target.value;
    setAddress({ ...getAddress, [fieldName]: fieldValue });
  };

 const setLandmarkHandler = (event) => {setLandmark(event.target.value)};

  const saveAdd = () => {
    const values = Object.values(getAddress);
    const allValuesExist = values.every((value) => Boolean(value));
    (allValuesExist === false)? setFieldMissing(true) : setFieldMissing(false);
    const newAdressData = {...getAddress, 'landmark' : getLandmark};
    addressCtx.dispatchedAdressState({type: 'NEWADDRESS', payload: newAdressData});
  };

  return (
    <>
      <form className="mt-10">
        <input
          type="text"
          required
          id="plotNo"
          onChange={setAddressHandler}
          placeholder="Floor Number /  Block No / Office Number"
          className={classNames(
            fieldMissing === true
              ? "border-red-200 bg-red-50"
              : "border-gray-200 bg-gray-50",
            "w-full border py-2 text-xs my-2 pl-3"
          )}
          
        />
        
        <input
          type="text"
          required
          id="area"
          onChange={setAddressHandler}
          placeholder="Area / Locality"
          className={classNames(
            fieldMissing === true
              ? "border-red-200 bg-red-50"
              : "border-gray-200 bg-gray-50",
            "w-full border py-2 text-xs my-2 pl-3"
          )}
        />
        
        <input
          type="text"
          id="landmark"
          onChange={setLandmarkHandler}
          placeholder="Nearest Landmark"
          className="w-full border border-gray-200 bg-gray-50 py-2 text-xs my-2 pl-3"
        />
        <input
          type="text"
          required
          id="city"
          onChange={setAddressHandler}
          placeholder="Town / City"
          className={classNames(
            fieldMissing === true
              ? "border-red-200 bg-red-50"
              : "border-gray-200 bg-gray-50",
            "w-full border py-2 text-xs my-2 pl-3"
          )}
        />
        <input
          type="text"
          required
          id="state"
          onChange={setAddressHandler}
          placeholder="City"
          className={classNames(
            fieldMissing === true
              ? "border-red-200 bg-red-50"
              : "border-gray-200 bg-gray-50",
            "w-full border py-2 text-xs my-2 pl-3"
          )}
        />
        <input
          type="text"
          required
          id="pincode"
          onChange={setAddressHandler}
          placeholder="Pincode"
          className={classNames(
            fieldMissing === true
              ? "border-red-200 bg-red-50"
              : "border-gray-200 bg-gray-50",
            "w-full border py-2 text-xs my-2 pl-3"
          )}
        />
      </form>
      {fieldMissing && <p className="font text-red-700">! The highlighted fields cannot be empty</p>}
      
      <button
        onClick={saveAdd}
        className="bg-red-700 text-white w-96 ml-8 py-2 rounded-lg fixed bottom-8"
      >
        Save
      </button>
    </>
  );
}
