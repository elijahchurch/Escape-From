import Book from "./Book";
import {useState} from "react";
import CharacterSelect from "./CharacterSelect";
import ItemSelect from "./ItemSelect";
// need to figure out how to interact with json file
import characterdata from "./../Data/characters.json"
import { ICharacter } from "../interfaces";


const Game = () => {
    const [gameScreen, setgameScreen] = useState<number>(1);
    const [gameCharacter, setgameCharacter] = useState<ICharacter | null>(null)


    const characters = characterdata as ICharacter[];

    //Set character selections
    // const characters : ICharacter[] = characterdata.map((obj) => ({
    //     id : obj.id,
    //     name : obj.name,
    //     flavor: obj.flavor
    // }))
    const selectCharacter = (id: string) => {
        const selected : ICharacter[] = characters.filter((character) => (character.id === id));
        setgameCharacter(selected[0]);
    }

    let continueButton = null;
    if(gameScreen === 1){
        if(gameCharacter){
            continueButton = <button onClick={() => {setgameScreen(2)}}>Continue</button>
        }
        return(
            <div className="initialcontainers">
                <CharacterSelect 
                    characters={characters}
                    handleClick={setgameScreen}/>
                {continueButton}
            </div>
        )
    }
    else if(gameScreen === 2) {
        return(
            <div className="initialcontainers">
                <ItemSelect/>
                <button onClick={() => setgameScreen(3)}>Continue</button>
            </div>
        )
    }
    else {
        return(
            <Book/>
        )
    }
}

export default Game;