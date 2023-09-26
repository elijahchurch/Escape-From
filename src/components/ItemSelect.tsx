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
            chosenItems.push(props.commonItems["common" + e])
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
                <h3>You also recieved: </h3>
                <hr/>
                <div className="inventorySelectDiv">
                    {randomItems.map((element) => 
                        <ItemCard Item={element} key={element.id} rarity="commonRarity"/>
                    )}
                </div>
                <button onClick={() => props.handleClick(randomItems)}>Continue</button>
            </React.Fragment>
    }

    return(
        <React.Fragment>
        <h3>{gameCharacter?.gameCharacter.name}'s starting Items</h3>
        <hr/>
        <div className="inventorySelectDiv">
            {gameCharacter?.gameCharacter.inventory.map((element) => 
                <ItemCard Item={element} key={element.id} rarity="charaRarity"/>
            )}
        </div>
        {rollDisplay}
        </React.Fragment>
    )
}

export default ItemSelect;