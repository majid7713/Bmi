import React, { useState, useCallback, useContext } from "react";
import { value1 } from "../type/type";
import { BmiContext } from "../Context/Context";

const Form = () => {
  const { dispath } = useContext<value1>(BmiContext);
  const [weight, setWeight] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let bmi: number = +weight / Math.pow(+height / 100, 2);
    // console.log(bmi)

    const pc = (bmi: number) => {
      if (bmi < 18.5) {
        return "thin";
      }
      if (bmi >= 18.5 && bmi < 30) {
        return "Proper weight";
      }
      if (bmi > 30) {
        return "Fat";
      } else {
        return "NaN";
      }
    };

    dispath({ type: "AddBmi", x: Math.round(bmi), x2: pc(bmi), n: name });
    setWeight("");
    setHeight("");
    setName("");
  };

  const handleChangeWeight = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setWeight(e.target.value);
    },
    [weight]
  );
  const handleChangeHeight = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setHeight(e.target.value);
    },
    [height]
  );

  const handleChangeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    []
  );

  return (
    <div className="form">
      <hr />
      <form onSubmit={handelSubmit}>
        <label htmlFor="myInput">Weight</label>
        <input
          type="text"
          placeholder="Kg"
          value={weight}
          onChange={handleChangeWeight}
          required
          id="myInput"
        />
        <br />
        <label htmlFor="myInput2">Height</label>
        <input
          type="text"
          placeholder="Cm"
          value={height}
          onChange={handleChangeHeight}
          required
          id="myInput2"
        />
        <br />
        <label htmlFor="myInput3">Name </label>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={handleChangeName}
          required
          id="myInput3"
        />
        <br />
        <input type="submit" value="BMI" />
      </form>
    </div>
  );
};

export default Form;
