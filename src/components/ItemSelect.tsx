import { ICharacter, IItem, IItemData} from "../interfaces";
import React, {useState, useContext} from "react";
import { rollForTwoNumbers } from "../Functions/businesslogic";
import { charaContext } from "../context/charaContext";
import ItemCard from "./ItemCard";

interface IItemSelect {commonItems: IItemData, handleClick: (randomItems: IItem[]) => void}
const ItemSelect = (props: IItemSelect) => {
    const [randomItems, setrandomItems] = useState<IItem[]>([])

    const rollForItems = () => {
        const numbers = rollForTwoNumbers();
        let chosenItems : IItem[] = [];
        numbers?.forEach((e) => {
            chosenItems.push(props.commonItems["Common" + e])
        })
        setrandomItems(chosenItems);
    }

    const gameCharacter = useContext(charaContext)

    let rollDisplay = null;
    if( randomItems.length < 2) {
        rollDisplay = 
            <React.Fragment>
                <h3> Roll to see what other two random items you get!</h3>
                <button onClick={() => rollForItems()}>Roll</button>
            </React.Fragment>
    } else {
        rollDisplay = 
            <React.Fragment>
                <h3>You also received: </h3>
                <hr/>
                <div className="inventorySelectDiv">
                    {randomItems.map((element) => 
                        <div  key={element.id} className={`itemCard ${element.rarity}`}>
                            <ItemCard Item={element} key={element.id} rarity={element.rarity} itemSize="itemImg"/>
                        </div>
                    )}
                </div>
                <button onClick={() => props.handleClick(randomItems)}>Continue</button>
            </React.Fragment>
    }

    return(
        <React.Fragment>
        <h3>{gameCharacter.name}'s Starting Items</h3>
        <hr/>
        <div className="inventorySelectDiv">
            {gameCharacter.inventory.map((element) => 
                <div key={element.id} className={`itemCard ${element.rarity}`}>
                    <ItemCard Item={element} key={element.id} rarity={element.rarity} itemSize="itemImg"/>
                </div>
            )}
        </div>
        {rollDisplay}
        </React.Fragment>
    )
}

export default ItemSelect;