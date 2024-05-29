import React from 'react';
import GridDisplay from './GridDisplay';
import Train from './Train';
import About from './About';
import { Link, Routes, Route } from 'react-router-dom';
import './Admin.css';
import { FaTrain, FaInfoCircle, FaEye } from 'react-icons/fa';

const Admin = () => {
  // const handleLinkClick = (event) => { // Uncomment if needed
  //   event.preventDefault(); // Prevent default navigation behavior
  // };
  return (
    <div className="admin-container">
      <div className="sidebar">
        <ul>
          <li><Link to="/admin/train"><FaTrain /> Train </Link></li>
          <li><Link to="/admin/view"><FaEye /> View</Link></li>
          <li><Link to="/admin/about"><FaInfoCircle /> About</Link></li>
        </ul>
      </div>
      <div className="main-content">
        <Routes>
          <Route path="/admin/train" element={<Train />} />
          <Route path="/admin/view" element={<GridDisplay />} />
          <Route path="/admin/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
