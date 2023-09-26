import PicturePage from "./PicturePage";
import CharacterInfo from "./CharacterInfo";
import InventoryList from "./InventoryList";
import {useContext} from "react";
import { charaContext } from "../context/charaContext";


const RightPage = () => {

    const gameCharacter = useContext(charaContext);

    return(
        <div className="page">
            <div className="column fill">
                <PicturePage/>
                <CharacterInfo character={gameCharacter?.gameCharacter}/>
                <InventoryList inventory={gameCharacter?.gameCharacter.inventory}/>
            </div>
        </div>
    )
}

export default RightPage;