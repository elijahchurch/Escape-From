import { ICharacter} from "../interfaces";
import React from "react";

interface IItemSelect {selectedCharacter: ICharacter | null}
const ItemSelect = (props: IItemSelect) => {
    return(
        <React.Fragment>
        <h3> These are the starting items for {props.selectedCharacter?.name}.</h3>
        <hr/>
        {props.selectedCharacter?.startingItems.map((element) => 
            <h4>{element.name}</h4>
        )}
        </React.Fragment>
    )
}

export default ItemSelect;