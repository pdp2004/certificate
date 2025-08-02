import React, { useState } from 'react';
import './CertificateUpload.css';

const CertificateUpload = () => {

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
    <div className="upload-container">
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
    </div>
  );
};

export default CertificateUpload;
