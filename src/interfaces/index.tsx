export interface IItem {
    id: string,
    name: string, 
    img?: string,
    uses: number,
    flavor: string,
    rarity: string
}

export interface IItemData {
    [key : string] : IItem
}

export interface ICharacter {
    id: string,
    /**
     * The name of the hero
     */
    name: string,
    portrait?: string,
    altPortrait?: string,
    flavor: string,
    inventory: IItem[]
}

export interface ICharacterData {
    [key : string] : ICharacter
}



export type Conditional = (inventory: IItem[]) => boolean

export interface IOption {
    //Note: id points to a story option. It is not unique to the option. Options in different pages may have the same id, which points to the same page that it can move to.
    resultId: string,
    label: string,
    itemRef?: string,
    conditional:  boolean 
}

//Reference if interFace has an associatedItemId:
// associatedItemId: number,
// const hasItem = (inventory: Item[], option: Option) => {
//     const item = inventory.find(item => item.id === option.associatedItemId);
//     return item !== undefined;
// }

// Reference for options: 
// const option : Option = {resultId: 5, label : "You open the door", conditional: true}
// const option : Option = {resultId: 5, label : "Open door with key", conditional: (inventory) => inventory.find(({id}) => id === 1) !== undefined}

export interface IPage {
    id: string,
    eventText: string,
    options: IOption[]
}

export interface IPageData {
    [key: string] : IPage
}