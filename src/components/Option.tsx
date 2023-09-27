import {IOption} from "../interfaces"

interface ISingleOption {option: IOption, findPage: (id:string) => void}


const Option = (props: ISingleOption) => {
    
    return (
        <button type="submit" 
                className="storyOptions"
                onClick = {() => props.findPage(props.option.resultId)}> {props.option.label}</button>
    )
} 

export default Option;