import Option from "./Option";
import React from "react";
import { IOption, IItem} from "../interfaces";
import {useContext} from "react";
import { charaContext } from "../context/charaContext";
import { getAvailableOptions} from "../Functions/businesslogic";

interface IOptionList { options: IOption[], findPage: (id:string) => void, addItem: (itemId: string) => void, removeItem: (itemId: string) => void}

const OptionList = (props : IOptionList) => {
    const {options, findPage, addItem, removeItem} = props;    
    const gameCharacter = useContext(charaContext);
    const availableOptions: IOption[] = getAvailableOptions(options, gameCharacter);

    return (
        <div>
            
            {availableOptions.map((element, index) => (
                <Option 
                option ={element}
                findPage={findPage}
                addItem={addItem}
                removeItem={removeItem}
                key={index}/>
            ))}
        </div>
    )    
}

export default OptionList;