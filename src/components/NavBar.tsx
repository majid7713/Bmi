import React, { useContext } from "react";
import { value1 } from "../type/type";
import { BmiContext } from "../Context/Context";

const NavBar = () => {
  const { dataBmi } = useContext<value1>(BmiContext);
  return (
    <div className="navbar">
      <h1>Majid Bmi List</h1>
      <p>currenty you have {dataBmi.length} Items get through...</p>
      <hr />
    </div>
  );
};

export default NavBar;
