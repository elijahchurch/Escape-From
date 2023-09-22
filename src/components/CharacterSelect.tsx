import { ICharacter } from "../interfaces";
import React, {useState} from "react";
import CharacterOption from "./CharacterOption";


interface ICharacterSelect { characters: ICharacter[], handleClick: (id: string) => void}

const CharacterSelect = (props: ICharacterSelect) => {
    return(
        <React.Fragment>
            {props.characters.map((obj) => 
                <CharacterOption
                    character = {obj}
                    handleClick = {props.handleClick} 
                    key = {obj.id}/>
            )}
        </React.Fragment>
    )
}

export default CharacterSelect;