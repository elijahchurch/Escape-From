import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div id="Header">
            <h1 id="HeaderTitle">Escape From</h1>
            <button className="HeaderButtons">
                <Link className="linkstyles" to="/">Restart</Link>
            </button>
        </div>
    )
}

export default Header;