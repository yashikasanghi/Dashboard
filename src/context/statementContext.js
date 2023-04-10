import { createContext, useReducer } from "react";

const dummyStatemnets = [
    {
      id: 0,
      content:
        "eg. One Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
    {
      id: 1,
      content:
        "eg. Two Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
    {
      id: 2,
      content:
        "eg. Three Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
    {
      id: 3,
      content:
        "eg. Four Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
  ];

  const initialStatementValue = {
    key: "initialLoad",
    title:"Statements",
    noOfStatements: dummyStatemnets.length,
    data: dummyStatemnets,
  };
const statementsReducer = (state, action) => {
  if (action.type === "DELETE") {
    const newData = state.data.filter((obj) => obj.id !== action.key);
    const newState = { ...state, data: newData, noOfStatements: newData.length };
    return newState;
  }else if(action.type === 'EDIT'){
    const newData = state.data.map((item) =>
  (item.id === action.id) ? {...item, content: action.statement} : {...item}
  ) 
  const newState = {...state, data: newData};
  return newState;
  }else if(action.type === 'NEWSTATEMENT'){
    state.data.push({
      id: action.id,
      content: action.statement
    });
    const newState = {...state, noOfStatements: state.data.length};
    return newState;
  }
  return state;
};


export const StatementContext = createContext({
  key: "initialLoad",
  title:"Statements",
  noOfStatements: dummyStatemnets.length,
  data: dummyStatemnets,
});

export const StatementProvider = (props) => {
  const [statemntsState, dispatchedStatementsState] = useReducer(statementsReducer, initialStatementValue);

  return (
    <StatementContext.Provider value={{ ...statemntsState, dispatchedStatementsState }}>
      {props.children}
    </StatementContext.Provider>
  );
};
