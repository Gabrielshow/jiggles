import React from 'react';
import GridDisplay from './GridDisplay';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Admin from './Admin';
import About from './About';
import Train from './Train';
// import CircularHall from './CircularDisplay';

const App = () => {
    return (
        <Router>
            <Routes>

            <Route path="/" element={<Login />} />
            <Route path="/admin" element={<Admin />}  />
            <Route path="/admin/train" element={<Train />} />
          <Route path="/admin/view" element={<GridDisplay />} />
          <Route path="/admin/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default App;
