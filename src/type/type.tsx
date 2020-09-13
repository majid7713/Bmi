import { Dispatch } from "react";

export type Data = {
  bmi: number | undefined;
  physicalcondition: string | undefined;
  id: string;
  date: string | undefined;
  name: string | undefined;
};

export type Action = {
  type: "AddBmi" | "RemoveBmi";
  x?: number;
  x2?: string;
  id?: string;
  n?: string;
};

export type value1 = {
  dataBmi: Data[];
  dispath: Dispatch<Action>;
};

export type props = {
  bmi: number;
  physicalcondition: string;
  bmiId: string;
  date: string;
  name: string;
};

export type props2 = {
  bmi: number;
  physicalcondition: string;
  bmiId: string;
  dispath: Dispatch<Action>;
  date: string;
  name: string;
};
