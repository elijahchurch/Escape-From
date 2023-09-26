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
            {/* check if inventory updated */}
            {props.character.inventory.map((item) =>
               <p key={item.id}>{item.name}</p>
                )}
        </div>

    )
}

export default CharacterInfo;