import { ICharacter, ICharacterData} from "../interfaces";
import React, {useContext} from "react";
import CharacterOption from "./CharacterOption";
import { charaContext } from "../context/charaContext";


interface ICharacterSelect { characters: ICharacterData, handleClick: (id: string) => void}


const CharacterSelect = (props: ICharacterSelect) => {
    
    const gameCharacter = useContext(charaContext);
    return(
        <React.Fragment>
            <h3 id="selectTitle">Select your Character</h3>
            <hr/>
            <div id="characterGrid">
                
                {Object.values(props.characters).map((obj) => 
                    <CharacterOption
                        character = {obj}
                        handleClick = {props.handleClick} 
                        isSelected = {(obj.id === gameCharacter.id) ? true : false}
                        key = {obj.id}/>
                )}
            </div>
        </React.Fragment>
    )
}

export default CharacterSelect;


// Way to destructure context:
// let selectedCharacter : ICharacter;
// const gameCharacter = useContext(charaContext);
// if(gameCharacter) {
//     selectedCharacter = gameCharacter.gameCharacter;
// }