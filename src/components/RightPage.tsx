import PicturePage from "./PicturePage";
import CharacterInfo from "./CharacterInfo";
import InventoryList from "./InventoryList";
import {useContext} from "react";
import { charaContext } from "../context/charaContext";


const RightPage = () => {

    const gameCharacter = useContext(charaContext);

    return(
        <div className="page" id="right">
            <div className="column fill">
                <PicturePage/>
                <CharacterInfo character={gameCharacter}/>
                <InventoryList inventory={gameCharacter.inventory}/>
            </div>
        </div>
    )
}

export default RightPage;