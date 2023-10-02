import { ICharacter } from "../interfaces";



interface ICharacterOption { character: ICharacter, handleClick: (id : string) => void, isSelected: boolean}



const CharacterOption = (props: ICharacterOption) => {
    return(
        <div 
            className = {props.isSelected ? "selected gridCharacter" : "gridCharacter"}
            onClick = {() => {props.handleClick(props.character.id)}}>
            <img 
                src = {props.character.portrait} 
                alt = {props.character.name} 
                className="characterSelect"/>
            <p>{props.character.name}</p>
        </div>
    )
}

export default CharacterOption;