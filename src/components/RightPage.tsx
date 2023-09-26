import PicturePage from "./PicturePage";
import CharacterInfo from "./CharacterInfo";
import InventoryList from "./InventoryList";
import { ICharacter } from "../interfaces";

interface IRightPage {character: ICharacter}

const RightPage = (props: IRightPage) => {
    return(
        <div className="page">
            <div className="column fill">
                <PicturePage/>
                <CharacterInfo
                    character = {props.character}/>
                <InventoryList/>
            </div>
        </div>
    )
}

export default RightPage;