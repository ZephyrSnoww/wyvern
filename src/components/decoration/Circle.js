import "./Circle.css";

function Circle(props) {
    return (
        <div className="circle" style={{
            width: props.size,
            height: props.size,
            animation: `circle-scaling ${props.speed} ease-in-out infinite`,
            opacity: props.opacity
        }}></div>
    );
}

export default Circle;
