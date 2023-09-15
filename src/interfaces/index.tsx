export interface Item {
    id: number, 
    img?: string,
    uses: number,
    flavor: string,
    rarity: string
}

export interface Character {
    id: number,
    portait?: string,
    altPortrait?: string,
    flavor: string,
    inventory: Item[]
}

export interface Option {
    //Note: id points to a story option. It is not unique to the option. Options in different pages may have the same id, which points to the same page that it can move to.
    resultId: number,
    label: string,
    itemAssociation ?: number,
    conditional: Function | boolean, 
}

export interface Page {
    id: number,
    preludeText: string,
    eventText: string,
    options: Option[]
}