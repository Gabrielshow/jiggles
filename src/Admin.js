import React from 'react';
import GridDisplay from './GridDisplay';
import { Link } from 'react-router-dom';
import { FaHome, FaInfo, FaQuestionCircle } from 'react-icons/fa';

const Admin = () => {
  return (
    <div className="admin-container">
    <div className="sidebar">
      <ul>
        <li><Link to="/admin/train"><FaTrain/> Train </Link></li>
        <li><Link to="/admin/view"><FaEye/> View</Link></li>
        <li><Link to="/admin/about"><FaInfoCircle/> About</Link></li>
      </ul>
    </div>
    </div>
  )
}

export default Admin