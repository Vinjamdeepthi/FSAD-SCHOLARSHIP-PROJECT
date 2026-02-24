import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); // NEW
  const navigate = useNavigate();

  // Create Demo Admin if not exists
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const adminExists = users.find(
      (u) => u.email === "admin@scholar.com"
    );

    if (!adminExists) {
      users.push({
        name: "Admin",
        email: "admin@scholar.com",
        password: "admin123",
        role: "admin",
      });

      localStorage.setItem("users", JSON.stringify(users));
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (u) =>
        u.email === email &&
        u.password === password &&
        u.role === role   // CHECK ROLE ALSO
    );

    if (foundUser) {
      localStorage.setItem("user", JSON.stringify(foundUser));

      if (role === "admin") {
        navigate("/admin");
      } else {
        navigate("/student/dashboard");
      }
    } else {
      alert("Invalid credentials or wrong role selected");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="logo-section">
        <div className="logo-icon">🎓</div>
        <h1>ScholarTrack</h1>
        <p>Scholarship & Financial Aid Manager</p>
      </div>

      <div className="login-card">
        <h2>Sign In</h2>
        <p className="subtitle">
          Enter your credentials to access the platform
        </p>

        {/* ROLE SELECTOR */}
        <div className="role-select">
          <button
            type="button"
            className={role === "student" ? "active" : ""}
            onClick={() => setRole("student")}
          >
            Student
          </button>

          <button
            type="button"
            className={role === "admin" ? "active" : ""}
            onClick={() => setRole("admin")}
          >
            Admin
          </button>
        </div>

        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Sign In as {role === "admin" ? "Admin" : "Student"}
          </button>
        </form>

        <p className="register-text">
          Don't have an account? <Link to="/register">Create one</Link>
        </p>

        
      </div>
    </div>
  );
};

export default Login;