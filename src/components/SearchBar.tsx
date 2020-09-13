import React, { useContext, useState } from "react";
import { value1, Data } from "../type/type";
import { BmiContext } from "../Context/Context";
import SowResultSearchBar from "./ShowResultSearchBar";
import "../App.css";

const SearchBar = () => {
  const { dataBmi } = useContext<value1>(BmiContext);
  //   const [find, setFind] = useState<Data[]>([]);
  const [word, setWord] = useState<String>("");

  const petFilterOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };
  const filterPets: Data[] = dataBmi.filter((n) => {
    return n.name?.toLocaleLowerCase() === word.toLocaleLowerCase();
  });

  return (
    <div>
      <div className="App2">
        <div className="books-list2">
          <h3>SearchBar</h3>
          <input
            type="text"
            onChange={petFilterOnchange}
            placeholder="Search By Name..."
          />
          <ul>
            {filterPets.map((n) => {
              return (
                <SowResultSearchBar
                  key={n.id}
                  bmiId={n.id}
                  date={n.date || "sample"}
                  bmi={n.bmi || 2}
                  physicalcondition={n.physicalcondition || "j"}
                  name={n.name || "majid"}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default SearchBar;
