import "./Admin.css";
import { useState } from "react";

const AdminDashboard = () => {
  // FRONTEND DATA (mock)
  const [scholarships] = useState([
    { id: 1, name: "Merit Scholarship", amount: 10000 },
    { id: 2, name: "Need Based Scholarship", amount: 8500 },
    { id: 3, name: "Women Empowerment", amount: 8000 },
    { id: 4, name: "Sports Quota", amount: 5000 },
    { id: 5, name: "Minority Scholarship", amount: 7000 },
  ]);

  const [applications] = useState([
    { id: 1, student: "Rahul", status: "pending" },
    { id: 2, student: "Anjali", status: "approved" },
    { id: 3, student: "Kiran", status: "pending" },
  ]);

  const pendingApplications = applications.filter(
    (app) => app.status === "pending"
  );

  const totalFunds = scholarships.reduce(
    (sum, s) => sum + s.amount,
    0
  );

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p className="subtitle">
        Manage scholarships and review applications
      </p>

      <div className="stats-grid">
        <div className="stat-card">
          <p>Total Scholarships</p>
          <h2>{scholarships.length}</h2>
        </div>

        <div className="stat-card">
          <p>Applications</p>
          <h2>{applications.length}</h2>
        </div>

        <div className="stat-card">
          <p>Pending Review</p>
          <h2>{pendingApplications.length}</h2>
        </div>

        <div className="stat-card">
          <p>Total Funds</p>
          <h2>₹{totalFunds.toLocaleString()}</h2>
        </div>
      </div>

      <div className="card">
        <h2>Recent Applications</h2>
        {applications.length === 0 ? (
          <p className="muted">No applications yet.</p>
        ) : (
          <ul>
            {applications.map((app) => (
              <li key={app.id}>
                {app.student} —{" "}
                <span className={app.status}>
                  {app.status}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;