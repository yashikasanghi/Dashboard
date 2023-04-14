import { createContext, useReducer } from "react";

const dummyAddress = {
  data: {
    plotNo: "C-1 / 351 / 4",
    area: "GIDC Makarpura",
    landmark: "",
    city: "Vadodara",
    state: "Gujrat, India",
    pincode: "390010",
  },
  address: "C-1 / 351 / 4, GIDC Makarpura, Vadodara - 390010, Gujrat, India",
};

const addressCtxReducer = (state, action) => {
  if (action.type === "NEWADDRESS") {
    const addressArray = Object.values(action.payload).filter(Boolean);
    const newAddress = addressArray.join(", ");
    const newState = { ...state, address: newAddress };
    return newState;
  }
};

export const AddressContext = createContext(dummyAddress);

export const AddressProvider = (props) => {
  const [adressState, dispatchedAdressState] = useReducer(
    addressCtxReducer,
    dummyAddress
  );
  return (
    <AddressContext.Provider value={{ ...adressState, dispatchedAdressState }}>
      {props.children}
    </AddressContext.Provider>
  );
};
