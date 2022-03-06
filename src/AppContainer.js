import { Route, Routes } from 'react-router-dom';

import Homepage from './components/homepage/Homepage';

import './AppContainer.css';

function AppContainer() {
    return (
        <div className="app-container">
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/*" element={<Homepage />} />
            </Routes>
        </div>
    );
}

export default AppContainer;
