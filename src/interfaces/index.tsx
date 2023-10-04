export interface IItem {
    id: string,
    name: string, 
    img: string,
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



export interface IOption {
    resultId: string,
    label: string,
    itemRef?: string,
    addItem?: string,
    removeItem?: string,
    rarity: string,
    conditional:  boolean 
}


export interface IPage {
    id: string,
    pageText: string,
    options: IOption[]
}

export interface IPageData {
    [key: string] : IPage
}