import {Link} from "react-router-dom"

const Start = () => {
    return(
        <div id="logo">
            <button className="gameButton" id="start">
                    <span className="transition"></span>
                    <span className="gradient"></span>
                    <Link className="label linkstyles" to="/game">Start Game</Link>
                </button>
        </div>
        
    )
}

export default Start;