import { Link } from "react-router-dom";
import "./TitleBar.css";

function TitleBar(props) {
    return (
        <div className="titlebar">
            <img className="titlebar-logo" src="/logo.png" alt="Wyvern Logo Text" />
            <div className="titlebar-items">
                <Link to="/" className="titlebar-item">Home</Link>
                <Link to="/about" className="titlebar-item">About</Link>
                <Link to="/login" className="titlebar-item">Log In</Link>
            </div>
        </div>
    );
}

export default TitleBar;
