import React from "react";
import "./App.css";

import MakeList from "../src/components/MakeList";
import Form from "../src/components/Form";
import NavBar from "../src/components/NavBar";
import SearchBar from "./components/SearchBar";
import BmiContextProvider from "./Context/Context";

function App() {
  return (
    <div className="App">
      <BmiContextProvider>
        <NavBar />
        <SearchBar />
        <MakeList />
        <Form />
      </BmiContextProvider>
    </div>
  );
}

export default App;
