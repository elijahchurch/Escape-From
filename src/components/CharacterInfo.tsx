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
            <div id="characterPictureDiv">
                <img
                    id="characterPicture"
                    src={props.character?.portrait}
                    alt= {props.character?.name ?? ""}/>
            </div>
            <p id="characterFlavor">{props.character?.flavor ?? ""}</p>
        </div>

    )
}

export default CharacterInfo;