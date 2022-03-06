import "./Square.css";

function Square(props) {
    let top = props.top || "unset";
    let left = props.left || "unset";
    let right = props.right || "unset";
    let bottom = props.bottom || "unset";

    let width = props.width || "1px"

    return (
        <div className="square" style={{
            width: props.size,
            height: props.size,
            animation: `square-rotation ${props.speed} linear infinite`,
            opacity: props.opacity || "1",
            top,
            left,
            right,
            bottom,
            "--width": width
        }}></div>
    );
}

export default Square;
