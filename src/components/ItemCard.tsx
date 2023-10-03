import { IItem } from "../interfaces";
import React from "react";

interface IItemCard { Item: IItem, rarity: string, itemSize: string}

const ItemCard = (props: IItemCard) => {

    return(
        <React.Fragment>
            <img className={props.itemSize} src="img/img-test.jpg"/>
            <p className="itemText" >{props.Item.name}</p>
        </React.Fragment>
    )

}

export default ItemCard;