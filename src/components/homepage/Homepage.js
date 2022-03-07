import { Link } from "react-router-dom";
import ParticlesPreset from "../decoration/Particles";
import "./Homepage.css";

function Homepage(props) {
    return (
        <div className="homepage-container">
            <ParticlesPreset />
            <div className="homepage-content-container">
                <div className="homepage-titlebar">
                    <img className="homepage-titlebar-logo" src="/logo.png" alt="Wyvern Logo Text" />
                    <div className="homepage-titlebar-items">
                        <Link to="/" className="homepage-titlebar-item">Home</Link>
                        <Link to="/about" className="homepage-titlebar-item">About</Link>
                        <Link to="/login" className="homepage-titlebar-item">Log In</Link>
                    </div>
                </div>
                <div className="homepage-content">
                    <div className="homepage-section homepage-header">
                        <img className="homepage-header-image" src="/logo-image.png" alt="Wyvern Logo" />
                        <img className="homepage-header-text" src="/logo.png" alt="Wyvern Logo Text" />
                    </div>
                    <div className="homepage-section-break" />
                    <div className="homepage-section">
                        <div className="homepage-section-header">
                            {">About Us"}
                        </div>
                        <div className="homepage-section-text">
                            Wyvern is a chat client built on the <a href="https://matrix.org">Matrix</a> backend. It's a hobby project made by <a href="https://sophie-snow.carrd.co">Sophie Snow</a> (with help from <a href="https://acer-portfolio.vercel.app/">HouseholdDragon</a>), and is really just a reason to make something that looks cool.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
