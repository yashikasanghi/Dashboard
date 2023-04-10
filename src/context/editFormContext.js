import { createContext, useReducer } from "react";

const initialForm = {
  key: "initialLoad",
  title:"",
  data: [],
  props: [],
};
const editFormReducer = (state, action) => {
  if (action.type === "PREFILL") {
    action.props.editFormHandler();
    return action.payload;
  }
  return state;
};

export const EditFormContext = createContext({
  key: "",
  title: "",
  content: "",
  props: [],
});

export const EditFormProvider = (props) => {
  const [state, dispatchedState] = useReducer(editFormReducer, initialForm);

  return (
    <EditFormContext.Provider value={{ ...state, dispatchedState }}>
      {props.children}
    </EditFormContext.Provider>
  );
};
