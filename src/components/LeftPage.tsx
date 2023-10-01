import OptionList from "./OptionList";
import { IPage } from "../interfaces";

interface ILeftPage {page: IPage, findPage: (id: string) => void, addItem: (itemId: string) => void, removeItem: (itemId: string) => void }

const LeftPage = (props: ILeftPage) => {
    const { page, findPage, addItem, removeItem} = props;

    return(
        <div className="page">
            <div className="column fill">
                <div id="storyText">
                    <p>{page.eventText}</p>
                </div>
                <OptionList 
                    options={page.options}
                    findPage= {findPage}
                    addItem={addItem} 
                    removeItem={removeItem}    />
            </div>
        </div>
    )
}

export default LeftPage;