import LeftPage from "./LeftPage";
import RightPage from "./RightPage";
import pageData from "./../Data/pages.json"
import { IPageData } from "../interfaces";
import {useState} from "react";

const pages = pageData as IPageData;

interface IBook{addItem: (itemId: string) =>  void, removeItem: (itemId: string) => void}

const Book = (props: IBook) => {
    const [page, setPage] = useState(pages["page01"])

    const findPage = (resultId: string) : void => {
        setPage(pages[resultId]);
    }

    return (
        <div className="book">
            <RightPage/>
            <LeftPage   
                page={page} 
                findPage={findPage}
                addItem={props.addItem}
                removeItem={props.removeItem}/>
        </div>
    )
}

export default Book;