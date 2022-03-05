import Circle from "../decoration/Circle";
import Square from "../decoration/Square";
import "./Homepage.css";

function Homepage(props) {
    return (
        <div className="homepage-container">
            <div className="homepage-content-container">
                <div className="homepage-titlebar">
                    <img className="homepage-titlebar-logo" src="/logo.svg" alt="Wyvern Logo" />
                    <div className="homepage-titlebar-items">
                        <div className="homepage-titlebar-item">Home</div>
                        <div className="homepage-titlebar-item">About</div>
                        <div className="homepage-titlebar-item">Log In</div>
                    </div>
                </div>
                <div className="homepage-content">
                    yeah    
                </div>
            </div>
        </div>
    );
}

export default Homepage;
