import LeftPage from "./LeftPage";
import RightPage from "./RightPage";
import { ICharacter } from "../interfaces";

interface IBook { character: ICharacter | null}
const Book = (props: IBook) => {
    return (
        <div className="book">
            <RightPage
                character ={props.character}/>
            <LeftPage/>
        </div>
    )
}

export default Book;