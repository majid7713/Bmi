import React, { useState, useCallback, Dispatch, useContext } from "react";
import {Data , Action, value1} from "../type/type";
import {AppContext} from "../App"








const Form = () => {
    const {  dispath  } = useContext<value1>(AppContext);
    const [weight, setWeight] = useState<string>('');
    const [height, setHeight] = useState<string>('');
    const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let bmi : number = +weight/ Math.pow((+height / 100), 2)
        // console.log(bmi)
        
        const pc = (bmi : number) => {
                let pc : string;
            if(bmi < 18.5 ){
               return pc = "thin";
            }if (bmi >= 18.5 && bmi < 30) {
               return pc = "Proper weight";
            } if(bmi > 30) {
               return pc = "Fat";
            }else{
                return pc = "NaN"; 
            }
        }
        
        dispath({ type:"AddBmi", x:Math.round(bmi), x2:pc(bmi)});
        setWeight('');
        setHeight('');
    };

     const handleChangeWeight = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
         setWeight(e.target.value);
     },[weight])
     const handleChangeHeight = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setHeight(e.target.value)
     },[height])


    return(
        <div className="form">
            <hr/>
            <form onSubmit={handelSubmit}>
            <label htmlFor="myInput">Weight </label>
            <input type="text"
              placeholder="Kg" 
              value={weight} 
              onChange={handleChangeWeight}
              required
              id="myInput"
              />
              <br/>
              <label htmlFor="myInput2">Height </label>
            <input 
            type="text"  
            placeholder="Cm" 
            value={height} 
            onChange={handleChangeHeight}
            required
            id="myInput2"
            />
            <br/>
            <input type="submit" value="BMI"/>
        </form>
        </div>
    );
};

export default Form;