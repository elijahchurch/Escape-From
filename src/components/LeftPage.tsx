import OptionList from "./OptionList";
import { IPage } from "../interfaces";
import ReactTextTransition from "react-text-transition";

interface ILeftPage {page: IPage, findPage: (id: string) => void, addItem: (itemId: string) => void, removeItem: (itemId: string) => void }

const LeftPage = (props: ILeftPage) => {
    const { page, findPage, addItem, removeItem} = props;

    return(
        <div className="page fadeIn" id="left" key={page.id}>
            <div className="column fill">
                <div id="storyText">
                    <p>{page.pageText}</p>
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