import Book from "./Book";
import {useState} from "react";
import CharacterSelect from "./CharacterSelect";
import ItemSelect from "./ItemSelect";
import characterData from "./../Data/characters.json";
import { ICharacter, IItem, ICharacterData, IItemData} from "../interfaces";
import itemData from "./../Data/Items.json";
import { charaContext } from "../context/charaContext";


const Game = () => {
    const [gameScreen, setgameScreen] = useState<number>(1);
    const [gameCharacter, setgameCharacter] = useState<ICharacter>({
        id: "dummy01",
        name: " ",
        flavor: " ",
        inventory: []
    })


    const characters = characterData as ICharacterData;
    const items = itemData as IItemData;

    const selectCharacter = (id: string) => {
        const selected = characters[id];
        setgameCharacter(selected);
    }

    const continueWithInventory = (randomItems : IItem[]) => {
        setgameCharacter({...gameCharacter, "inventory" : gameCharacter.inventory.concat(randomItems)});
        setgameScreen(3);
    }

    let continueButton = null;
    let gameDisplay = null;
    if(gameScreen === 2) {
        gameDisplay =
            <div className="initialcontainers">
                <ItemSelect 
                    commonItems = {items}
                    handleClick={continueWithInventory}/>
            </div>
    }
    else if(gameScreen === 3){
        gameDisplay = 
            <Book/>
    }
    else {
        if(gameCharacter.id !== "dummy01"){
            continueButton = <button onClick={() => {setgameScreen(2)}}>Continue</button>
        }
        gameDisplay = 
            <div className="initialcontainers">
                <CharacterSelect 
                    characters={characters}
                    handleClick={selectCharacter}/>
                {continueButton}
            </div>
    }
    return (
        <charaContext.Provider value = {{gameCharacter, setgameCharacter}}>
            {gameDisplay}
        </charaContext.Provider>
    )
}

export default Game;