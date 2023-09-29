import Option from "./Option";
import React from "react";
import { IOption, IItem} from "../interfaces";
import {useContext} from "react";
import { charaContext } from "../context/charaContext";

interface IOptionList { options: IOption[], findPage: (id:string) => void}

const OptionList = (props : IOptionList) => {
    
    const gameCharacter = useContext(charaContext);

    let availableOptions :IOption[] = [];
    props.options.forEach((option: IOption) => {
        if(option.conditional === true) {
            availableOptions.push(option)
        }
        else {
            gameCharacter.inventory.forEach((item: IItem) => {
                if(item.id === option.itemRef) {
                    availableOptions.push(option)
                }
            })
        }
    });

    return (
        <div>
            
            {availableOptions.map((element, index) => (
                <Option 
                option ={element}
                findPage={props.findPage}
                key={index}/>
            ))}
        </div>
    )    
}

export default OptionList;