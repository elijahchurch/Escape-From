import { ICharacter, ICharacterData} from "../interfaces";
import React, {useState} from "react";
import CharacterOption from "./CharacterOption";


interface ICharacterSelect { characters: ICharacterData, handleClick: (id: string) => void, selectedCharacter: ICharacter | null}


const CharacterSelect = (props: ICharacterSelect) => {
    return(
        <React.Fragment>
            <h3 id="selectTitle">Select your Character</h3>
            <hr/>
            <div id="characterGrid">
                
                {Object.values(props.characters).map((obj) => 
                    <CharacterOption
                        character = {obj}
                        handleClick = {props.handleClick} 
                        isSelected = {(obj.id === props.selectedCharacter?.id) ? true : false}
                        key = {obj.id}/>
                )}
            </div>
        </React.Fragment>
    )
}

export default CharacterSelect;