import Circle from "../decoration/Circle";
import Square from "../decoration/Square";
import "./Homepage.css";

function Homepage(props) {
    return (
        <div className="homepage-container">
            <Square size="400px" speed="7s" opacity="1" />
            <Square size="425px" speed="12s" opacity=".9" />
            <Square size="450px" speed="16s" opacity=".5" />

            <Circle size="300px" speed="5s" opacity=".2" />
            <Circle size="400px" speed="11s" opacity=".5" />
            <Circle size="500px" speed="14s" opacity="1" />

            <div className="homepage-title">
                Wy+vern
                <br />
                ~
            </div>
        </div>
    );
}

export default Homepage;
