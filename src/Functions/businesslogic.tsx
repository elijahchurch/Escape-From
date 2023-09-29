import { IItem } from "../interfaces";

export const rollD20 = () : number => {
    const roll = Math.floor(Math.random() * 20) + 1;
    return roll;
};



export const rollForTwoNumbers = () : number[] | void => {
    const firstRoll = rollD20();
    const secondRoll = rollD20();
    if(firstRoll !== secondRoll) {
        return [firstRoll, secondRoll];
    } else {
        return rollForTwoNumbers();
    }
};


// export const createInventoryArray = (itemArray: (IItem)[])  : IItem[] | void => {
//     if(currentItems.length === 12) {
//         return currentItems;
//     }
//     else {
//         const newArray : (IItem)[] = {...currentItems}.concat({
//                 id: "dummy01",
//                 name: " ",
//                 uses: 1,
//                 flavor: " ",
//                 rarity: " "
//         });
//         return createInventoryArray(newArray);    
//     }
// }


export const finalizeInventory = (itemArray: IItem[]) : IItem[] => {
    const createInventoryArray = ()  : IItem[] | void => {
        if(itemArray.length === 16) {
            return itemArray;
        }
        else {
            itemArray = itemArray.concat({
                    id: "dummy01",
                    name: " ",
                    uses: 1,
                    flavor: " ",
                    rarity: " "
            });
            return createInventoryArray();    
        };
    }
    const result = createInventoryArray()
    return itemArray;
}