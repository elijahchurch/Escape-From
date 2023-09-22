import { ICharacter } from "../interfaces";
import React from "react";
import CharacterOption from "./CharacterOption";


interface ICharacterSelect { characters: ICharacter[], handleClick?: () => void}

const CharacterSelect = (props: ICharacterSelect) => {

    return(
        <React.Fragment>
            {props.characters.map((obj) => 
                <CharacterOption
                    character = {obj} 
                    key = {obj.id}/>
            )}
        </React.Fragment>
    )
}

export default CharacterSelect;