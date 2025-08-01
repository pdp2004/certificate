import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [certificates, setCertificates] = useState([]);
  const [form, setForm] = useState({
    studentName: "",
    course: "",
    grade: "",
    issueDate: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const uploadCertificate = (e) => {
    e.preventDefault();
    const certId = "CERT-" + Math.floor(Math.random() * 100000);
    const newCert = {
      certId,
      ...form,
      status: "On-chain",
    };
    setCertificates([...certificates, newCert]);
    setForm({ studentName: "", course: "", grade: "", issueDate: "" });
    alert(`Certificate uploaded successfully with ID: ${certId}`);
  };

  return (
    <div className="admin-container">
      {/* Main Content */}
      <div className="main">
        <h1>Admin Dashboard</h1>

        {/* Upload Form */}
        <div className="form-section">
          <h2>Upload New Certificate</h2>
          <form onSubmit={uploadCertificate}>
            <label>Student Name</label>
            <input
              type="text"
              id="studentName"
              value={form.studentName}
              onChange={handleChange}
              required
            />

            <label>Course</label>
            <input
              type="text"
              id="course"
              value={form.course}
              onChange={handleChange}
              required
            />

            <label>Grade</label>
            <input
              type="text"
              id="grade"
              value={form.grade}
              onChange={handleChange}
              required
            />

            <label>Issue Date</label>
            <input
              type="date"
              id="issueDate"
              value={form.issueDate}
              onChange={handleChange}
              required
            />

            <button type="submit" className="btn">Upload</button>
          </form>
        </div>

        {/* Issued Certificates */}
        <div className="table-section">
          <h2>Issued Certificates</h2>
          <table>
            <thead>
              <tr>
                <th>Certificate ID</th>
                <th>Student Name</th>
                <th>Course</th>
                <th>Issue Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {certificates.map((cert, index) => (
                <tr key={index}>
                  <td>{cert.certId}</td>
                  <td>{cert.studentName}</td>
                  <td>{cert.course}</td>
                  <td>{cert.issueDate}</td>
                  <td>{cert.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
