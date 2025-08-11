// import React, { useState } from "react";
// import axios from "axios";
// import "./CertificateUpload.css";

// const CertificateUpload = () => {
//   const [form, setForm] = useState({
//     studentName: "",
//     course: "",
//     grade: "",
//     issueDate: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.id]: e.target.value });
//   };

//   const uploadCertificate = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:3000/api/certificates", form);
//       alert(`Certificate uploaded successfully with ID: ${res.data.certId}`);
//       setForm({ studentName: "", course: "", grade: "", issueDate: "" });

//       // Optional: Reload dashboard if needed (e.g. with useContext or state lifting)
//     } catch (err) {
//       alert("Error uploading certificate");
//       console.error(err);
//     }
//   };

//   return (
//     <div className="upload-container">
//       <div className="form-section">
//         <h2>Upload New Certificate</h2>
//         <form onSubmit={uploadCertificate}>
//           <label>Student Name</label>
//           <input
//             type="text"
//             id="studentName"
//             value={form.studentName}
//             onChange={handleChange}
//             required
//           />

//           <label>Course</label>
//           <input
//             type="text"
//             id="course"
//             value={form.course}
//             onChange={handleChange}
//             required
//           />

//           <label>Grade</label>
//           <input
//             type="text"
//             id="grade"
//             value={form.grade}
//             onChange={handleChange}
//             required
//           />

//           <label>Issue Date</label>
//           <input
//             type="date"
//             id="issueDate"
//             value={form.issueDate}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit" className="btn">Upload</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CertificateUpload;


import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CertificateUpload.css";

const CertificateUpload = () => {
  const [form, setForm] = useState({
    studentName: "",
    course: "",
    grade: "",
    issueDate: "",
  });

  // Get today's date in YYYY-MM-DD format
  const getToday = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const todayDate = getToday();

  // Set default issueDate to today
  useEffect(() => {
    setForm((prevForm) => ({ ...prevForm, issueDate: todayDate }));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const uploadCertificate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/certificates", form);
      alert(`Certificate uploaded successfully with ID: ${res.data.certId}`);
      setForm({
        studentName: "",
        course: "",
        grade: "",
        issueDate: todayDate, // Reset to today
      });
    } catch (err) {
      alert("Error uploading certificate");
      console.error(err);
    }
  };

  return (
    <div className="upload-container">
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
            min={todayDate}
            max={todayDate}
            required
          />

          <button type="submit" className="btn">Upload</button>
        </form>
      </div>
    </div>
  );
};

export default CertificateUpload;
