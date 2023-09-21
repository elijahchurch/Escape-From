import {Link} from "react-router-dom"

const Start = () => {
    return(
        <div className="initialcontainers">
            <h1>Hi!!</h1>
            <button className="startbuttons">
                <Link className="linkstyles" to="/game">Start Game</Link>
            </button>
        </div>
    )
}

export default Start;