import React from "react";
import {IOption} from "../interfaces"

interface ISingleOption {option: IOption}

const Option = (props: ISingleOption) => {
    return (
        <button className="storyOptions">{props.option.label}</button>
    )
} 

export default Option;