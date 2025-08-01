import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="sidebar">
      <Link to="/"><h2>ProofEdu</h2></Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/upload">Upload Certificates</Link>
      <Link to="/manage">Manage Certificates</Link>
      <Link to="/about">About</Link>
      <button onClick={handleLogout} className="logout-btn">Logout</button>
    </div>
  );
};

export default Sidebar;
