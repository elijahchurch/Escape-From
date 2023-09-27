import OptionList from "./OptionList";
import { IPage } from "../interfaces";

interface ILeftPage {page: IPage, findPage: (id: string) => void }

const LeftPage = (props: ILeftPage) => {

    return(
        <div className="page">
            <div className="column">
                <div id="storyText">
                    <p>{props.page.eventText}</p>
                </div>
                <OptionList options={props.page.options}
                            findPage= {props.findPage}/>
            </div>
        </div>
    )
}

export default LeftPage;