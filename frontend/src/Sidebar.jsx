import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token'); // Check if user is logged in

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="sidebar">
      <Link to="/"><h2>ProofEdu</h2></Link>

      {isLoggedIn && (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/upload">Upload Certificates</Link>
          <Link to="/manage">Manage Certificates</Link>
        </>
      )}

      <Link to="/">Verify Certificate</Link>
      <Link to="/about">About</Link>


      {isLoggedIn ? (
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default Sidebar;
