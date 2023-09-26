import React from "react";
import { ICharacter } from "../interfaces";

interface ICharacterInfo {character: ICharacter}

const CharacterInfo = (props: ICharacterInfo) => {
    return (
        <div id="characterInfo">
            <div id="characterPictureDiv">
                <img
                    id="characterPicture"
                    src={props.character.portrait}
                    alt= {props.character.name}/>
            </div>
            <p id="characterFlavor">{props.character?.flavor}</p>
        </div>

    )
}

export default CharacterInfo;