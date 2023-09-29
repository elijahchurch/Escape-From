import OptionList from "./OptionList";
import { IPage } from "../interfaces";

interface ILeftPage {page: IPage, findPage: (id: string) => void, addItem: (itemId: string) => void }

const LeftPage = (props: ILeftPage) => {

    return(
        <div className="page">
            <div className="column fill">
                <div id="storyText">
                    <p>{props.page.eventText}</p>
                </div>
                <OptionList 
                    options={props.page.options}
                    findPage= {props.findPage}
                    addItem={props.addItem}       />
            </div>
        </div>
    )
}

export default LeftPage;