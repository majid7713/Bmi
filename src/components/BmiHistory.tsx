import React, { Dispatch } from "react";
import {Data , Action} from "../type/type";

interface props {
    bmi:number;
    physicalcondition:string;
    bmiId:string
    dispath : Dispatch<Action>;
    date:string
}


const BmiHistory:React.FC<props> = ({bmi, physicalcondition,dispath,bmiId,date}) => {
    const color = (physicalcondition:string) => {
        let p : string;
        if(physicalcondition === 'thin'){
            return p = 'yellow';
        }if(physicalcondition === 'Proper weight'){
            return p = 'green';
        }if(physicalcondition === 'Fat'){
            return p = 'red';
        }else{
            return p = 'gray';;
        }
    };

    const py: string = color(physicalcondition);


    return   ( 
        <li onClick={()=>dispath({type:"RemoveBmi", id :bmiId})}>
            <div style={{ color: py }}>Bmi : {bmi}</div>
            <div style={{ color: py }}>physicalcondition : {physicalcondition}</div>
            <div>Date : {date}</div>
        </li>
    )
};

export default BmiHistory;