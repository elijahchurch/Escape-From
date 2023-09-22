import { ICharacter } from "../interfaces";
import gorilla from "./../Assets/img/Gorilla-test.jpg";
import chef from "./../Assets/img/Chef-test.jpg";
import barb from "./../Assets/img/Barb-test.jpg"

interface ICharacterOption { character: ICharacter, handleClick: (id : string) => void}



const CharacterOption = (props: ICharacterOption) => {

    let imgLink = "";
    let altText = "";
    if(props.character.id === "chara01") {
        imgLink = barb;
        altText = "Barbarian picture";
    }
    else if(props.character.id === "chara02") {
        imgLink = chef;
        altText = "Chef picture";
    }
    else if(props.character.id === "chara03") {
        imgLink = gorilla;
        altText = "Gorilla picture";
    }

    return(
        <div>
            <img 
                src={imgLink} 
                alt={altText} 
                className="characterSelect"
                onClick = {() => {props.handleClick(props.character.id)}}/>
            <p>{props.character.name}</p>
        </div>
    )
}

export default CharacterOption;