import { ICharacter } from "../interfaces";


interface ICharacterOption { character: ICharacter, handleClick: (id : string) => void}



const CharacterOption = (props: ICharacterOption) => {

    return(
        <div>
            <img 
                src = {props.character.portrait} 
                alt = {props.character.name} 
                className="characterSelect"
                onClick = {() => {props.handleClick(props.character.id)}}/>
            <p>{props.character.name}</p>
        </div>
    )
}

export default CharacterOption;