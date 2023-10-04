import { IItem, ICharacter, IOption } from "../interfaces";

export const rollD10 = () : number => {
    const roll = Math.floor(Math.random() * 10) + 1;
    return roll;
};



export const rollForTwoNumbers = () : number[] | void => {
    const firstRoll = rollD10();
    const secondRoll = rollD10();
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
                    img: "",
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

export const getAvailableOptions = (options: IOption[], character: ICharacter) : IOption[] => {
    let result : IOption[] = [];
    options.forEach((option: IOption) => {
        if(option.conditional === true) {
            result.push(option)
        }
        else {
            character.inventory.forEach((item: IItem) => {
                if(item.id === option.itemRef) {
                    result.push(option)
                }
            })
        }
    });
    return result;
}