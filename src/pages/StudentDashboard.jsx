import "./StudentDashboard.css";

const StudentDashboard = () => {
  return (
    <div className="dashboard">
      {/* HEADER */}
      <h1>Welcome, vinjam deepthi</h1>
      <p className="subtitle">Your scholarship overview at a glance</p>

      {/* STATS */}
      <div className="stats">
        <div className="stat-card">
          <h3>Available Scholarships</h3>
          <span>5</span>
        </div>

        <div className="stat-card">
          <h3>My Applications</h3>
          <span>2</span>
        </div>

        <div className="stat-card">
          <h3>Pending</h3>
          <span>1</span>
        </div>

        <div className="stat-card">
          <h3>Approved</h3>
          <span>1</span>
        </div>
      </div>

      {/* UPCOMING DEADLINES */}
      <div className="deadlines-card">
        <div className="deadlines-header">
          <h2>Upcoming Deadlines</h2>
          <button className="view-all">View All</button>
        </div>

        <div className="deadline-item">
          <div>
            <h4>Community Service Grant</h4>
            <p>$3,000 · Service</p>
          </div>
          <span className="date">2026-03-30</span>
        </div>

        <div className="deadline-item">
          <div>
            <h4>Merit Excellence Award</h4>
            <p>$5,000 · Merit-Based</p>
          </div>
          <span className="date">2026-04-15</span>
        </div>

        <div className="deadline-item">
          <div>
            <h4>Financial Need Assistance</h4>
            <p>$6,000 · Need-Based</p>
          </div>
          <span className="date">2026-04-30</span>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;