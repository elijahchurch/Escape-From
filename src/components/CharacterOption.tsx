import { ICharacter } from "../interfaces";



interface ICharacterOption { character: ICharacter, handleClick: (id : string) => void, isSelected: boolean}



const CharacterOption = (props: ICharacterOption) => {
    return(
        <div className = {props.isSelected ? "selected gridCharacter" : "gridCharacter"}>
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