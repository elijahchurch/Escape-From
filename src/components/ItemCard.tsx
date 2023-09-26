import { IItem } from "../interfaces";

interface IItemCard { Item: IItem}

const ItemCard = (props: IItemCard) => {

    return(
        <div className="itemCard">
            <img className="itemImg" src="img/Barb-test.jpg"/>
            <p>{props.Item.name}</p>
        </div>
    )

}

export default ItemCard;