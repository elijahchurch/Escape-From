import { IItem } from "../interfaces";

interface IItemCard { Item: IItem, rarity: string}

const ItemCard = (props: IItemCard) => {

    return(
        <div className={`itemCard ${props.rarity}`}>
            <img className="itemImg" src="img/Barb-test.jpg"/>
            <p className="itemText" >{props.Item.name}</p>
        </div>
    )

}

export default ItemCard;