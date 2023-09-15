import PicturePage from "./PicturePage";
import CharacterInfo from "./CharacterInfo";
import InventoryList from "./InventoryList";

const RightPage = () => {
    return(
        <div className="page">
            <div className="column">
                <PicturePage/>
                <CharacterInfo/>
                <InventoryList/>
            </div>
        </div>
    )
}

export default RightPage;