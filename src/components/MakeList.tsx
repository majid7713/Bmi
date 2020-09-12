import React, { Dispatch, useContext } from "react";
import {Data , Action, value1} from "../type/type";
import BmiHistory from "./BmiHistory";
import {AppContext} from "../App"







const MakeList  = () => {
    const { dataBmi, dispath  } = useContext<value1>(AppContext);
    return dataBmi.length ? (
        <div className="books-list">
            <ul>
                {dataBmi.map((n) => {
                return <BmiHistory key={n.id} bmiId={n.id} date={n.date||'sample'} bmi={n.bmi||2} physicalcondition={n.physicalcondition||'sa'} dispath={dispath}/>
                })}
            </ul>
        </div>
    ) : (<div>empty...</div>);
}

export default MakeList; 