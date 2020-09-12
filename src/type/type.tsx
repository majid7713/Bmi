import { type } from "os"
import React, {Dispatch} from "react";

export type Data = {
    bmi : number|undefined;
    physicalcondition : string|undefined;
    id :string;
    date : string|undefined
  }

  export type Action = {
    type: 'AddBmi'|'RemoveBmi';
    x ?: number;
    x2 ?: string;
    id ?:string;
  }

  export type value1 = {
    dataBmi:Data[]
    dispath:Dispatch<Action>
  
  }