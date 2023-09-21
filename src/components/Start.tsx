import {Link} from "react-router-dom"

const Start = () => {
    return(
        <div>
            <h1>Hi!!</h1>
            <button>
                <Link to="/game">Start Game</Link>
            </button>
        </div>
    )
}

export default Start;