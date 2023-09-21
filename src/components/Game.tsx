import Book from "./Book";
import {useState} from "react";
import CharacterSelect from "./CharacterSelect";
import ItemSelect from "./ItemSelect";
import characterdata from "./../Data/characters.json"
import { ICharacter } from "../interfaces";


const Game = () => {
    const [gameScreen, setgameScreen] = useState<number>(1)
    //Will toggle between various screens but for now just want to render book component



    if(gameScreen === 1){
        return(
            <div className="initialcontainers">
                <CharacterSelect />
                <button onClick={() => setgameScreen(2)}>Continue</button>
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