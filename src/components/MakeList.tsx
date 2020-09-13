import React, { useContext } from "react";
import { value1 } from "../type/type";
import BmiHistory from "./BmiHistory";
import { BmiContext } from "../Context/Context";

const MakeList = () => {
  const { dataBmi, dispath } = useContext<value1>(BmiContext);
  return dataBmi.length ? (
    <div className="books-list">
      <ul>
        {dataBmi.map((n) => {
          return (
            <BmiHistory
              key={n.id}
              bmiId={n.id}
              date={n.date || "sample"}
              bmi={n.bmi || 2}
              physicalcondition={n.physicalcondition || "sa"}
              dispath={dispath}
              name={n.name || "majid"}
            />
          );
        })}
      </ul>
    </div>
  ) : (
    <div>empty...</div>
  );
};

export default MakeList;
