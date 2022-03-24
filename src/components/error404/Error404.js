import { Link } from 'react-router-dom';
import ParticlesPreset from '../decoration/Particles';
import './Error404.css';

function Error404 (props) {
  return (
    <div className='error-page'>
      <ParticlesPreset />
      <div className='error-title'>404 - Not Found</div>
      <div className='error-text'>This page doesn't exist</div>
      <Link to='/'>Return Home</Link>
    </div>
  );
}

export default Error404;
