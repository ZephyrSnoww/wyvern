import './Circle.css';

function Circle (props) {
  return (
    <div
      className='circle' style={{
        width: props.size,
        height: props.size,
        animation: `circle-scaling ${props.speed} ease-in-out infinite`,
        opacity: props.opacity
      }}
    />
  );
}

export default Circle;
