import React, { useState } from "react";
import axios from "axios";
import "./VerifierDashboard.css";

const VerifierDashboard = () => {
  const [certId, setCertId] = useState("");
  const [result, setResult] = useState(null);

  const verifyCertificate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`http://localhost:3000/api/certificate/${certId}`);
      if (res.data && res.data.certId) {
        setResult({
          status: "valid",
          message: "Certificate Verified",
          data: res.data,
        });
      } else {
        setResult({
          status: "invalid",
          message: "Certificate Not Found!",
          data: null,
        });
      }
    } catch (err) {
      console.error("Verification error:", err);
      setResult({
        status: "invalid",
        message: "Certificate Not Found!",
        data: null,
      });
    }
  };


  return (
    <div className="verifier-container">
      <div className="main">
        <h1>Verifier Dashboard</h1>

        {/* Verification Form */}
        <div className="verify-section">
          <h2>Verify Certificate</h2>
          <form onSubmit={verifyCertificate}>
            <label htmlFor="certId">Enter Certificate ID:</label>
            <input
              type="text"
              id="certId"
              required
              placeholder="e.g., CERT-1001"
              value={certId}
              onChange={(e) => setCertId(e.target.value)}
            />
            <button type="submit" className="btn">Verify</button>
          </form>
        </div>

        {/* Result */}
        {result && (
          <div
            className={`result-card ${
              result.status === "valid" ? "result-valid" : "result-invalid"
            }`}
          >
            <h2>{result.message}</h2>
            <div id="resultDetails">
              {result.status === "valid" ? (
                <>
                  <p><b>Certificate ID:</b> {result.data.certId}</p>
                  <p><b>Name:</b> {result.data.studentName}</p>
                  <p><b>Course:</b> {result.data.course}</p>
                  <p><b>Grade:</b> {result.data.grade}</p>
                  <p><b>Issued On:</b> {result.data.issueDate}</p>
                  <p style={{ color: "green", fontWeight: "bold" }}>
                    Verified on Blockchain
                  </p>
                </>
              ) : (
                <p style={{ color: "red" }}>
                  The entered Certificate ID is not valid.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifierDashboard;
