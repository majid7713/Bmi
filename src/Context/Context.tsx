import React, { createContext, useReducer, useEffect } from "react";
import { value1 } from "../type/type";
import { reducer } from "../BmiReducer/BmiReducer";

export const BmiContext = createContext<value1>({
  dataBmi: [],
  dispath: () => null,
});

interface Props {
  children: React.ReactNode;
}

const BmiContextProvider = ({ children }: Props) => {
  const [dataBmi, dispath] = useReducer(reducer, [], () => {
    const LocalData = localStorage.getItem("dataBmi");
    return LocalData ? JSON.parse(LocalData) : [];
  });

  useEffect(() => {
    localStorage.setItem("dataBmi", JSON.stringify(dataBmi));
  }, [dataBmi]);
  return (
    <BmiContext.Provider value={{ dataBmi, dispath }}>
      {children}
    </BmiContext.Provider>
  );
};

export default BmiContextProvider;
