import React from "react";
import { IItem } from "../interfaces";
import ItemCard from "./ItemCard";
import { finalizeInventory } from "../Functions/businesslogic";

interface IInventoryList {inventory: IItem[]}

const InventoryList = (props: IInventoryList) => {
    const inventoryArray = finalizeInventory(props.inventory);

    return(
        <React.Fragment>
            <h4 id="inventoryHeader">Inventory</h4>
            <div id="inventoryGrid">
                {inventoryArray.map((item : IItem, index :number) => {
                    if(item.id === "dummy01" ) {
                        return (<div className="grid-item empty" key={index}></div>)
                    }
                    else{
                        return ( <div className={`grid-item ${item.rarity}`} key={index}>
                                    <ItemCard 
                                        Item={item} 
                                        rarity={item.rarity}
                                        itemSize="inventoryImg"
                                        />
                                </div>)
                        }
                    })
                }
                
                
            </div>
        </React.Fragment>
    )
}

export default InventoryList;

