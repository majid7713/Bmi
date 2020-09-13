import React from "react";
import "../App.css";
import { props } from "../type/type";

const SowResultSearchBar: React.FC<props> = ({
  bmi,
  physicalcondition,
  bmiId,
  date,
  name,
}) => {
  return (
    <div className="App">
      <li>
        <div>Name : {name}</div>
        <div>Bmi : {bmi}</div>
        <div>physicalcondition : {physicalcondition}</div>
        <div>Date : {date}</div>
      </li>
    </div>
  );
};

export default SowResultSearchBar;
