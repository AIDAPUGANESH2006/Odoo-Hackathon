import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  // Dummy data for expense summary
  const pending = 3;
  const approved = 5;
  const rejected = 1;

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Employee Dashboard</h1>
      </div>

      <div className="cards">
        <div className="card">
          <h2>Pending</h2>
          <p>{pending}</p>
        </div>
        <div className="card">
          <h2>Approved</h2>
          <p>{approved}</p>
        </div>
        <div className="card">
          <h2>Rejected</h2>
          <p>{rejected}</p>
        </div>
      </div>

      <div className="buttons">
        <Link to="/submit-expense" className="button">Submit Expense</Link>
        <Link to="/history" className="button">View History</Link>
      </div>
    </div>
  );
}

export default Dashboard;
