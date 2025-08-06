import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './Login.jsx';
import Dashboard from './Dashboard.jsx';
import VerifierDashboard from './VerifierDashboard.jsx';
import ManageCertificates from './ManageCertificates.jsx';
import Sidebar from './Sidebar';
import CertificateUpload from './CertificateUpload.jsx';
import ViewCertificate from "./ViewCertificate.jsx";
import About from './About.jsx';

const AppContent = () => {
  const location = useLocation();

  // Define routes where Sidebar should be hidden
  const hideSidebarRoutes = ['/view-certificate'];

  // Check if the current path matches any of the hideSidebar routes
  const shouldHideSidebar = hideSidebarRoutes.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      {!shouldHideSidebar && <Sidebar />}
      <Routes>
        <Route path="/" element={<VerifierDashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<CertificateUpload />} />
        <Route path="/manage" element={<ManageCertificates />} />
        <Route path="/about" element={<About />} />
        <Route path="/view-certificate/:id" element={<ViewCertificate />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
