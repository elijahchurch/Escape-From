import { ICharacter } from "../interfaces";
import gorilla from "./../Assets/img/Gorilla-test.jpg";
import chef from "./../Assets/img/Chef-test.jpg";
import barb from "./../Assets/img/Barb-test.jpg"

interface ICharacterOption { character: ICharacter, continue: (boolean : boolean) => void}



const CharacterOption = (props: ICharacterOption) => {

    let imgLink = "";
    let altText = props.character.name;
    if(props.character.id === "chara01") {
        imgLink = barb;
    }
    else if(props.character.id === "chara02") {
        imgLink = chef;
    }
    else if(props.character.id === "chara03") {
        imgLink = gorilla;
    }

    return(
        <div>
            <img 
                src={imgLink} 
                alt={altText} 
                className="characterSelect"
                onClick = {() => {props.continue(true)}}/>
            <p>{props.character.name}</p>
        </div>
    )
}

export default CharacterOption;