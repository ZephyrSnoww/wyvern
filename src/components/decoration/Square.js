import './Square.css';

function Square (props) {
  const top = props.top || 'unset';
  const left = props.left || 'unset';
  const right = props.right || 'unset';
  const bottom = props.bottom || 'unset';

  const width = props.width || '1px';

  return (
    <div
      className='square' style={{
        width: props.size,
        height: props.size,
        animation: `square-rotation ${props.speed} linear infinite`,
        opacity: props.opacity || '1',
        top,
        left,
        right,
        bottom,
        '--width': width
      }}
    />
  );
}

export default Square;
