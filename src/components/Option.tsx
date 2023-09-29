import {IOption} from "../interfaces"

interface ISingleOption {option: IOption, findPage: (id:string) => void, addItem: (itemId: string) => void}


const Option = (props: ISingleOption) => {

    const handleOptionClick = () : void => {
        if(props.option.addItem) {
            props.addItem(props.option.addItem)
        }
        props.findPage(props.option.resultId)
    } 
    
    return (
        <button type="submit" 
                className={`storyOptions ${props.option.rarity}`}
                onClick = {() => handleOptionClick()}> {props.option.label}</button>
    )
} 

export default Option;