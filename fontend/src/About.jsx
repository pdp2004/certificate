import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Main Content */}
      <div className="main">
        <h1>About ProofEdu</h1>

        <div className="info-box">
          <p>
            <b>ProofEdu</b> is a blockchain-powered Academic Certificate
            Verification System. It helps institutions issue tamper-proof
            digital certificates and allows students and employers to verify
            credentials instantly.
          </p>

          <h2>How It Works</h2>
          <p>
            1. Institutions upload and sign certificates on the blockchain.
            <br />
            2. Students receive a unique Certificate ID or QR code.
            <br />
            3. Employers and universities can verify these certificates online
            using the Verifier Dashboard.
            <br />
            4. The entire process is secure, transparent, and eliminates manual
            verification delays.
          </p>

          <h2>Key Features</h2>
          <p>
            - Decentralized and tamper-proof storage using blockchain
            <br />
            - Fast verification through Certificate ID or QR code
            <br />
            - Separate dashboards for Admin, Student, and Verifier
            <br />
            - Secure and globally accessible
          </p>

          <div className="contact-box">
            <h2>Need Help?</h2>
            <p>
              Email us at: <b>support@proofedu.com</b>
              <br />
              Phone: +91-9876543210
              <br />
              Website: www.proofedu.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
