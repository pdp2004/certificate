import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ManageCertificates.css";

const ManageCertificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    studentName: "",
    course: "",
    grade: "",
    issueDate: "",
  });

  const fetchCertificates = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/certificates");
      setCertificates(res.data);
    } catch (err) {
      console.error("Error fetching certificates", err);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);


  const handleEdit = (cert) => {
    setEditingId(cert._id);
    setEditForm({
      studentName: cert.studentName,
      course: cert.course,
      grade: cert.grade,
      issueDate: cert.issueDate.substring(0, 10),
    });
  };

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const saveChanges = async () => {
    try {
      await axios.put(`http://localhost:3000/api/certificates/${editingId}`, editForm);
      setEditingId(null);
      fetchCertificates();
    } catch (err) {
      console.error("Update failed", err);
      alert("Failed to update certificate.");
    }
  };

  return (
    <div className="manage-container">
      <div className="form-section">
      <h1>Manage Certificates</h1>
      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Course</th>
            <th>Grade</th>
            <th>Issue Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {certificates.map((cert) => (
            <tr key={cert._id}>
              {editingId === cert._id ? (
                <>
                  <td><input name="studentName" value={editForm.studentName} onChange={handleChange} /></td>
                  <td><input name="course" value={editForm.course} onChange={handleChange} /></td>
                  <td><input name="grade" value={editForm.grade} onChange={handleChange} /></td>
                  <td><input name="issueDate" type="date" value={editForm.issueDate} onChange={handleChange} /></td>
                  <td>
                    <button onClick={saveChanges} className="btn save">Save</button>
                    <button onClick={() => setEditingId(null)} className="btn cancel">Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{cert.studentName}</td>
                  <td>{cert.course}</td>
                  <td>{cert.grade}</td>
                  <td>{new Date(cert.issueDate).toLocaleDateString()}</td>
                  <td>
                    <button onClick={() => handleEdit(cert)} className="btn edit">Edit</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default ManageCertificates;
