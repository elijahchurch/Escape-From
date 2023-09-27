import Option from "./Option";
import React from "react";

const OptionList = () => {

const options : string[] = [
    "option1",
    "option2",
    "option3",
    "option4",
    "option5"
]
    return (
        <div className="column">
            {options.map((element, index) => (
                <Option label={element} conditional={true} resultId={"test"} key={index}/>
            ))}
        </div>
    )    
}

export default OptionList;