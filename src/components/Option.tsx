import React from "react";
import {IOption} from "../interfaces"

const Option = (option: IOption) => {
    return (
        <button className="storyOptions">{option.label}</button>
    )
} 

export default Option;