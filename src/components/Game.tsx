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
    const [gameCharacter, setgameCharacter] = useState<ICharacter>({
        id: "dummy01",
        name: " ",
        flavor: " ",
        inventory: []
    })


    const characters = characterData as ICharacterData;
    const items = itemData as IItemData;

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

    const continueWithInventory = (randomItems : IItem[]) => {
        setgameCharacter({...gameCharacter, "inventory" : gameCharacter.inventory.concat(randomItems)});
        setgameScreen(3);
    }

    let continueButton = null;
    if(gameScreen === 2) {
        return(
            <div className="initialcontainers">
                <ItemSelect 
                    selectedCharacter={gameCharacter}
                    commonItems = {items}
                    handleClick={continueWithInventory}/>
            </div>
        )
    }
    else if(gameScreen === 3){
        return(
            <Book
                character = {gameCharacter}/>
        )
    }
    else {
        if(gameCharacter.id !== "dummy01"){
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