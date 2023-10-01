import {IOption} from "../interfaces"

interface ISingleOption {option: IOption, findPage: (id:string) => void, addItem: (itemId: string) => void, removeItem: (itemId: string) => void}


const Option = (props: ISingleOption) => {
    const { option, findPage, addItem, removeItem} = props;

    const handleOptionClick = () : void => {
        if(option.addItem) {
            addItem(option.addItem);
        }
        if(option.removeItem) {
            removeItem(option.removeItem);
        }
        findPage(option.resultId);
    } 
    
    return (
        <button type="submit" 
                className={`storyOptions ${option.rarity}`}
                onClick = {() => handleOptionClick()}> {option.label}</button>
    )
} 

export default Option;