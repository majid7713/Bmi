import { v4 as uuidv4 } from "uuid"; //npm install --save-dev @types/uuid
import { Data, Action } from "../type/type";

export function reducer(state: Data[], action: Action): Data[] {
  switch (action.type) {
    case "AddBmi":
      return [
        ...state,
        {
          bmi: action.x,
          physicalcondition: action.x2,
          id: uuidv4(),
          date: new Date().toDateString(),
          name: action.n,
        },
      ];

    case "RemoveBmi":
      return state.filter((n) => n.id !== action.id);

    default:
      return state;
  }
}
