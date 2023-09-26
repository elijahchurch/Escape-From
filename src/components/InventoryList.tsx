import React from "react";
import { IItem } from "../interfaces";
import ItemCard from "./ItemCard";

interface IInventoryList {inventory: IItem[] | undefined}

const InventoryList = (props: IInventoryList) => {
    return(
        <React.Fragment>
            <h4 id="inventoryHeader">Inventory</h4>
            <div id="inventoryGrid">
                {props.inventory?.map((item) =>
                    <div className="item">
                    <ItemCard 
                        Item={item} 
                        rarity={item.rarity}
                        key={item.id}/>
                    </div>)}
                {/* <div className="item">Item</div>
                <div className="item">Item</div>
                <div className="item">Item</div>
                <div className="item">Item</div>
                <div className="item">Item</div>
                <div className="item">Item</div>
                <div className="item">Item</div>
                <div className="item">Item</div>
                <div className="item">Item</div>
                <div className="item">Item</div>
                <div className="item">Item</div>
                <div className="item">Item</div> */}
            </div>
        </React.Fragment>
    )
}

export default InventoryList;