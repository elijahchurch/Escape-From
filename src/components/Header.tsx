import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div id="Header">
            <h1>Escape From</h1>
            <button>
                <Link to="/">Restart</Link>
            </button>
        </div>
    )
}

export default Header;