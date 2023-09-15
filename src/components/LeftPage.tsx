import OptionList from "./OptionList";

const LeftPage = () => {
    return(
        <div className="page">
            <div className="column">
                <div id="storyText">
                    <p>This is going to be where the story goes! Lot's of text should go here but not too much. Just writing a lot right now too see how it fills out the page. Need to lock in elements at some point. I probably can afford to give it more space</p>
                </div>
                <OptionList/>
            </div>
        </div>
    )
}

export default LeftPage;