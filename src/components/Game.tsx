import Book from "./Book";
import {useState} from "react";
import CharacterSelect from "./CharacterSelect";
import ItemSelect from "./ItemSelect";
import characterData from "./../Data/characters.json"
import { ICharacter, IItem, ICharacterData, IItemData} from "../interfaces";
import itemData from "./../Data/Items.json"
import { rollForTwoNumbers } from "../Functions/businesslogic";


const Game = () => {
    const [gameScreen, setgameScreen] = useState<number>(1);
    // possibly useContext to handle gameCharacter
    const [gameCharacter, setgameCharacter] = useState<ICharacter | null>(null)


    const characters = characterData as ICharacterData;
    const itemArray = itemData as IItemData;

    //Set character selections
    // const characters : ICharacter[] = characterdata.map((obj) => ({
    //     id : obj.id,
    //     name : obj.name,
    //     flavor: obj.flavor
    // }))
    const selectCharacter = (id: string) => {
        const selected = characters[id];
        setgameCharacter(selected);
    }

    let continueButton = null;
    if(gameScreen === 2) {
        return(
            <div className="initialcontainers">
                <ItemSelect 
                    selectedCharacter={gameCharacter}/>
                <button onClick={() => setgameScreen(3)}>Continue</button>
            </div>
        )
    }
    else if(gameScreen === 3 && gameCharacter){
        return(
            <Book
                character = {gameCharacter}/>
        )
    }
    else {
        if(gameCharacter){
            continueButton = <button onClick={() => {setgameScreen(2)}}>Continue</button>
        }
        return(
            <div className="initialcontainers">
                <CharacterSelect 
                    characters={characters}
                    handleClick={selectCharacter}
                    selectedCharacter={gameCharacter}/>
                {continueButton}
            </div>
        )
    }
}

export default Game;