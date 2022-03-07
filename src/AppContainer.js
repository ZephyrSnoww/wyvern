import { Route, Routes } from 'react-router-dom';

import Homepage from './components/homepage/Homepage';
import Error404 from "./components/error404/Error404";

import './AppContainer.css';

function AppContainer() {
    return (
        <div className="app-container">
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/*" element={<Error404 />} />
            </Routes>
        </div>
    );
}

export default AppContainer;
