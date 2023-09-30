import Option from "./Option";
import React from "react";
import { IOption, IItem} from "../interfaces";
import {useContext} from "react";
import { charaContext } from "../context/charaContext";
import { getAvailableOptions} from "../Functions/businesslogic";

interface IOptionList { options: IOption[], findPage: (id:string) => void, addItem: (itemId: string) => void, removeItem: (itemId: string) => void}

const OptionList = (props : IOptionList) => {
    
    const gameCharacter = useContext(charaContext);
    const availableOptions: IOption[] = getAvailableOptions(props.options, gameCharacter);

    return (
        <div>
            
            {availableOptions.map((element, index) => (
                <Option 
                option ={element}
                findPage={props.findPage}
                addItem={props.addItem}
                removeItem={props.removeItem}
                key={index}/>
            ))}
        </div>
    )    
}

export default OptionList;