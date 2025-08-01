import React, { useState } from 'react';
import axios from 'axios';
import './CertificateUpload.css';

const CertificateUpload = () => {
  const [name, setName] = useState('');
  const [certificate, setCertificate] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!certificate) {
      alert('Please upload a certificate file.');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('certificate', certificate);

    try {
      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Certificate uploaded successfully!');
    } catch (err) {
      alert('Upload failed.');
      console.error(err);
    }
  };

  return (
    <div className="upload-container">
      <h2>Certificate Upload</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Certificate Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="certificate">Upload Certificate:</label>
        <input
          type="file"
          id="certificate"
          name="certificate"
          accept=".pdf, .jpg, .jpeg, .png"
          onChange={(e) => setCertificate(e.target.files[0])}
          required
        />

        <input type="submit" value="Submit Certificate" />
      </form>
    </div>
  );
};

export default CertificateUpload;
