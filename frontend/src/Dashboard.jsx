import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {

  return (
    <div className="admin-container">
      {/* Main Content */}
      <div className="main">
        <h1>Admin Dashboard</h1>

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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
