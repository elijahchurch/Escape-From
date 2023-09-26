import { ICharacter, IItem, IItemData} from "../interfaces";
import React, {useState} from "react";
import { rollForTwoNumbers } from "../Functions/businesslogic";

interface IItemSelect {selectedCharacter: ICharacter | null, commonItems: IItemData, handleClick: (randomItems: IItem[]) => void}
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
                {randomItems.map((element) => 
                    <h4 key={element.id}>{element.name}</h4>
                )}
                <hr/>
                <button onClick={() => props.handleClick(randomItems)}>Continue</button>
            </React.Fragment>
    }

    return(
        <React.Fragment>
        <h3> These are the starting items for {props.selectedCharacter?.name}.</h3>
        <hr/>
        {props.selectedCharacter?.inventory.map((element) => 
            <h4 key={element.id}>{element.name}</h4>
        )}
        <hr/>
        {rollDisplay}
        </React.Fragment>
    )
}

export default ItemSelect;