import { ICharacter } from "../interfaces";
import React, {useState} from "react";
import CharacterOption from "./CharacterOption";


interface ICharacterSelect { characters: ICharacter[], handleClick: (id: string) => void, selectedCharacter: ICharacter | null}


const CharacterSelect = (props: ICharacterSelect) => {
    return(
        <React.Fragment>
            {props.characters.map((obj) => 
                <CharacterOption
                    character = {obj}
                    handleClick = {props.handleClick} 
                    isSelected = {(obj.id === props.selectedCharacter?.id) ? true : false}
                    key = {obj.id}/>
            )}
        </React.Fragment>
    )
}

export default CharacterSelect;