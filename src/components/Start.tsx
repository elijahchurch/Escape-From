import {Link} from "react-router-dom"

const Start = () => {
    return(
        <div className="initialcontainers">
            <h1>Hi!!</h1>

            <button className="gameButton">
                    <span className="transition"></span>
                    <span className="gradient"></span>
                    <Link className="label linkstyles" to="/game">Start Game</Link>
                </button>
        </div>
    )
}

export default Start;