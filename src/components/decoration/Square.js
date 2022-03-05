import "./Square.css";

function Square(props) {
    return (
        <div className="square" style={{
            width: props.size,
            height: props.size,
            animation: `square-rotation ${props.speed} linear infinite`,
            opacity: props.opacity
        }}></div>
    );
}

export default Square;
