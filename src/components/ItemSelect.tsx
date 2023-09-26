import { ICharacter, IItem, IItemData} from "../interfaces";
import React, {useState} from "react";
import { rollForTwoNumbers } from "../Functions/businesslogic";

interface IItemSelect {selectedCharacter: ICharacter | null, commonItems: IItemData}
const ItemSelect = (props: IItemSelect) => {
    const [randomItems, setrandomItems] = useState<IItem[]>([])

    const rollForItems = () => {
        const numbers = rollForTwoNumbers();
        let chosenItems : IItem[] = [];
        numbers?.forEach((e) => {
            chosenItems.push(props.commonItems["common" + e])
        })
        setrandomItems(chosenItems);
        console.log(randomItems);
    }

    return(
        <React.Fragment>
        <h3> These are the starting items for {props.selectedCharacter?.name}.</h3>
        <hr/>
        {props.selectedCharacter?.startingItems.map((element) => 
            <h4>{element.name}</h4>
        )}
        <hr/>
        <h3> Roll to see what other two random items you get!</h3>
        <button onClick={() => rollForItems()}>Roll</button>
        </React.Fragment>
    )
}

export default ItemSelect;