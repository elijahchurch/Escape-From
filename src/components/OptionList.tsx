import Option from "./Option";
import React from "react";
import { IOption } from "../interfaces";

interface IOptionList { options: IOption[]}

const OptionList = (props : IOptionList) => {

    return (
        <div className="column">
            {props.options.map((element, index) => (
                <Option 
                option ={element}
                key={index}/>
            ))}
        </div>
    )    
}

export default OptionList;