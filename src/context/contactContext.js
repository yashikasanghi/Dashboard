import { createContext, useReducer } from "react";

const dummyContact = [
  {
    id: 0,
    name: "Sales Team",
    emails: ["salesteam@br.in", "salesteam2@br.in"],
    contactNo: ["8511591740", "8000058214"],
    primaryEmail: "salesteam@br.in",
    secondaryEmail: "salesteam2@br.in",
    countryCode: "+91",
    primaryContactNo: "8511591740",
    secondaryContactNo: "8000058214",
  },
  {
    id: 1,
    name: "Marketing Team",
    emails: ["salesteam@br.in", "salesteam2@br.in"],
    contactNo: ["8511591740", "8000058214"],
    primaryEmail: "salesteam@br.in",
    secondaryEmail: "salesteam2@br.in",
    countryCode: "+91",
    primaryContactNo: "8511591740",
    secondaryContactNo: "8000058214",
  },
  {
    id: 2,
    name: "Development Team",
    emails: ["salesteam@br.in", "salesteam2@br.in"],
    contactNo: ["8511591740", "8000058214"],
    primaryEmail: "salesteam@br.in",
    secondaryEmail: "salesteam2@br.in",
    countryCode: "+91",
    primaryContactNo: "8511591740",
    secondaryContactNo: "8000058214",
  },
  {
    id: 3,
    name: "Testing Team",
    emails: ["salesteam@br.in", "salesteam2@br.in"],
    contactNo: ["8511591740", "8000058214"],
    primaryEmail: "salesteam@br.in",
    secondaryEmail: "salesteam2@br.in",
    countryCode: "+91",
    primaryContactNo: "8511591740",
    secondaryContactNo: "8000058214",
  },
  {
    id: 4,
    name: "Product Team",
    emails: ["salesteam@br.in", "salesteam2@br.in"],
    contactNo: ["8511591740", "8000058214"],
    primaryEmail: "salesteam@br.in",
    secondaryEmail: "salesteam2@br.in",
    countryCode: "+91",
    primaryContactNo: "8511591740",
    secondaryContactNo: "8000058214",
  },
];

const initialContactValue = {
  key: "initialLoad",
  title: "Contact",
  noOfContacts: dummyContact.length,
  data: dummyContact,
};

const contactReducer = (state, action) => {
  if (action.type === "DELETE") {
    const newData = state.data.filter((obj) => obj.id !== action.key);
    const newState = { ...state, data: newData, noOfContacts: newData.length };
    return newState;
  }
  return state;
};

export const ContactContext = createContext({
  key: "initialLoad",
  title: "Contact",
  noOfContacts: dummyContact.length,
  data: dummyContact,
});

export const ContactProvider = (props) => {
  const [contactState, dispatchedContactState] = useReducer(
    contactReducer,
    initialContactValue
  );

  return (
    <ContactContext.Provider
      value={{ ...contactState, dispatchedContactState }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
