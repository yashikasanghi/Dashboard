import react, { createContext, useReducer } from 'react';
const initialForm = {
    key: "",
    name: "",
    subDesc:"",
    desc: "",
    
}

const editFormReducer = (state, action) => {
    if(action.type === "PREFILL"){
        action.props.editFormHandler();
        return action.payload;  
    }
    return state;
}

export const EditFormContext = createContext({
    key: "",
    title: "",
    content: "",
    props:[],
    dispatchedState: () => {}
  });

export const EditFormProvider = (props) => {
    
    const [state, dispatchedState] = useReducer(editFormReducer, initialForm);

    const editFormVals = {
        key: "",
        title:"",
        content:"",
        props:"",
        details: () => {}
    }

    return (
        <EditFormContext.Provider
        value={{...state, dispatchedState}}>
            {props.children}
        </EditFormContext.Provider>
    )
    
}



