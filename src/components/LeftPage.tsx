import OptionList from "./OptionList";
import { IPage } from "../interfaces";

interface ILeftPage {page: IPage}

const LeftPage = (props: ILeftPage) => {

    return(
        <div className="page">
            <div className="column">
                <div id="storyText">
                    <p>{props.page.eventText}</p>
                </div>
                <OptionList options={props.page.options}/>
            </div>
        </div>
    )
}

export default LeftPage;