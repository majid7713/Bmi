import React,{ createContext, useReducer, useEffect,Dispatch } from 'react';
import logo from './logo.svg';
import './App.css';
import {Data , Action, value1} from "./type/type";
import { v4 as uuidv4 } from 'uuid'; //npm install --save-dev @types/uuid
import MakeList from "../src/components/MakeList";
import Form from "../src/components/Form";



export const AppContext = createContext<value1>({
  dataBmi: [],
  dispath: () => null
});



function reducer(state:Data[], action:Action):Data[]{
  switch(action.type){
    case "AddBmi":
      return [...state
        ,{
        bmi : action.x,
        physicalcondition : action.x2,
        id : uuidv4() ,
        date : new Date().toDateString()
      }]

      case "RemoveBmi":
        return state.filter((n) => n.id !== action.id)

      default : 
        return state;
    }
}

function App() {
  const [dataBmi, dispath] = useReducer(reducer,[], () => {
    const LocalData = localStorage.getItem("dataBmi");
    return LocalData ? JSON.parse(LocalData) : [];
  });

  useEffect(() => {
    localStorage.setItem("dataBmi", JSON.stringify(dataBmi));
  }, [dataBmi]);
  return (
    <AppContext.Provider value={{ dataBmi, dispath }}>
    <div className="App">
      <h1 className="navbar">Bmi List</h1>
      <hr/>
      <MakeList />
      <Form   />
    </div>
    </AppContext.Provider>
  );
}

export default App;
