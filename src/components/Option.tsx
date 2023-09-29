import {IOption} from "../interfaces"

interface ISingleOption {option: IOption, findPage: (id:string) => void}


const Option = (props: ISingleOption) => {
    
    return (
        <button type="submit" 
                className={`storyOptions ${props.option.rarity}`}
                onClick = {() => props.findPage(props.option.resultId)}> {props.option.label}</button>
    )
} 

export default Option;