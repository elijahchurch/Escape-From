import {useContext}from "react";
import { ICharacter } from "../interfaces";
import { charaContext } from "../context/charaContext";

const CharacterInfo = () => {
    
    const gameCharacter = useContext(charaContext);

    return (
        <div id="characterInfo">
            <div id="characterPictureDiv">
                <img
                    id="characterPicture"
                    src={gameCharacter?.gameCharacter.portrait}
                    alt= {gameCharacter?.gameCharacter.name}/>
            </div>
            <p id="characterFlavor">{gameCharacter?.gameCharacter.flavor}</p>
        </div>
    )
}

export default CharacterInfo;