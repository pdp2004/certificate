import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const [certificates, setCertificates] = useState([]);

  const fetchCertificates = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/certificates");
      setCertificates(res.data);
    } catch (error) {
      console.error("Error fetching certificates:", error);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  return (
    <div className="admin-container">
      <div className="main">
        <h1>Admin Dashboard</h1>

        <div className="table-section">
          <h2>Issued Certificates</h2>
          <table>
            <thead>
              <tr>
                <th>Certificate ID</th>
                <th>Student Name</th>
                <th>Course</th>
                <th>Issue Date</th>
                <th>Grade</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {certificates.length > 0 ? (
                certificates.map((cert) => (
                  <tr key={cert._id}>
                    <td>{cert.certId}</td>
                    <td>{cert.studentName}</td>
                    <td>{cert.course}</td>
                    <td>{new Date(cert.issueDate).toLocaleDateString()}</td>
                    <td>{cert.grade}</td>
                    <td>{cert.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No certificates found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
