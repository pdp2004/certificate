import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./ViewCertificate.css"; // Basic styling only

const ViewCertificate = () => {
  const { id } = useParams();
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState("");
  const certRef = useRef();

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/view/${id}`);
        setCertificate(res.data);
      } catch (err) {
        setError("Certificate not found");
      }
    };
    fetchCertificate();
  }, [id]);

  const handleDownload = () => {
    const input = certRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("landscape", "mm", "a4");
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 20, width, height);
      pdf.save("certificate.pdf");
    });
  };

  return (
    <div className="view-certificate-page">
      {error && <p className="error">{error}</p>}
      {certificate && (
        <>
          <div className="certificate" ref={certRef}>
            <div className="certificate-header">
              <h1 style={{ color: "#0056b3", textAlign:"left"}}>ProofEdu</h1>
              <h1>CERTIFICATE</h1>
              <h2>OF ACHIEVEMENT</h2>
              <p>This certificate is presented to</p>
              <h3 className="cert-name">{certificate.studentName}</h3>
              <p>
                For successfully completing the course <strong>{certificate.course}</strong>
              </p>
              <p>
                Grade: <strong>{certificate.grade}</strong>
              </p>
              <p>
                Issued on: <strong>{new Date(certificate.issueDate).toLocaleDateString()}</strong>
              </p>
            </div>

            <div className="certificate-footer">
              <div className="signature">
                <p>__________________</p>
                <p>Pardeep</p>
                <p>Chief Organizer</p>
              </div>
              <div className="seal">🏅</div>
              <div className="signature">
                <p>__________________</p>
                <p>Kanan</p>
                <p>Project Manager</p>
              </div>
            </div>
          </div>

          <button className="download-btn" onClick={handleDownload}>
            Download Certificate
          </button>
        </>
      )}
    </div>
  );
};

export default ViewCertificate;
