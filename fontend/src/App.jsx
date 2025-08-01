import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login.jsx';
import Dashboard from './Dashboard.jsx';
import VerifierDashboard from './VerifierDashboard .jsx';
import Sidebar from './Sidebar';
import CertificateUpload from './CertificateUpload.jsx';
import About from './About.jsx';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<VerifierDashboard/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/upload' element={<CertificateUpload/>}/>
        <Route path='/about' element={<About/>}/>

        {/* <Link to="/upload">Upload Certificates</Link>
      <Link to="/manage">Manage Certificates</Link>
      <Link to="/about">About</Link> */}
      </Routes>
    </Router>
  );
}

export default App;
