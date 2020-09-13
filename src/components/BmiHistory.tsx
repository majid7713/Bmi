import React from "react";
import { props2 } from "../type/type";

const BmiHistory: React.FC<props2> = ({
  bmi,
  physicalcondition,
  dispath,
  bmiId,
  date,
  name,
}) => {
  const color = (physicalcondition: string) => {
    if (physicalcondition === "thin") {
      return "yellow";
    }
    if (physicalcondition === "Proper weight") {
      return "green";
    }
    if (physicalcondition === "Fat") {
      return "red";
    } else {
      return "gray";
    }
  };

  const py: string = color(physicalcondition);

  return (
    <li onClick={() => dispath({ type: "RemoveBmi", id: bmiId })}>
      <div>Name : {name}</div>
      <div style={{ color: py }}>Bmi : {bmi}</div>
      <div style={{ color: py }}>physicalcondition : {physicalcondition}</div>
      <div>Date : {date}</div>
    </li>
  );
};

export default BmiHistory;
