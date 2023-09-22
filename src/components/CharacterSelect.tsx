import { ICharacter } from "../interfaces";
import React, {useState} from "react";
import CharacterOption from "./CharacterOption";


interface ICharacterSelect { characters: ICharacter[], handleClick: (number: number) => void}

const CharacterSelect = (props: ICharacterSelect) => {
    const[characterSelected, setcharacterSelected] = useState(false);
    
    

    let continueButton = null 
    if(characterSelected){
        <button onClick={() => {props.handleClick(2)}}>Continue</button>
    }

    return(
        <React.Fragment>
            {props.characters.map((obj) => 
                <CharacterOption
                    character = {obj} 
                    key = {obj.id}/>
            )}
            {continueButton}
        </React.Fragment>
    )
}

export default CharacterSelect;