import React from "react";
import { ICharacter } from "../interfaces";

interface ICharacterInfo {character: ICharacter | null}

const CharacterInfo = (props: ICharacterInfo) => {
    // let flavorText = "";
    // if(props.character !== null) {
    //     flavorText = props.character.flavor;
    // }
    return (
        <div id="characterInfo">
            <h1 id="characterPicture">Character</h1>
            <p id="characterFlavor">{props.character?.flavor ?? ""}</p>
        </div>

    )
}

export default CharacterInfo;