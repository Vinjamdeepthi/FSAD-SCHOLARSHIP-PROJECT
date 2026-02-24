import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleRegister = () => {
    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find((u) => u.email === form.email);

    if (userExists) {
      alert("User already exists");
      return;
    }

    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");

    navigate("/");
  };

  return (
    <div className="register-wrapper">
      <div className="logo-section">
        <div className="logo-icon">🎓</div>
        <h1>ScholarTrack</h1>
        <p>Create your account</p>
      </div>

      <div className="register-card">
        <h2>Register</h2>
        <p className="subtitle">
          Join the platform to find and manage scholarships
        </p>

        <label>Full Name</label>
        <input
          type="text"
          placeholder="John Doe"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="••••••••"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <label>Role</label>

        <div className="role-toggle">
          <button
            className={form.role === "student" ? "active" : ""}
            onClick={() => setForm({ ...form, role: "student" })}
          >
            Student
          </button>

          <button
            className={form.role === "admin" ? "active" : ""}
            onClick={() => setForm({ ...form, role: "admin" })}
          >
            Admin
          </button>
        </div>

        <button className="create-btn" onClick={handleRegister}>
          Create Account
        </button>

        <p className="login-text">
          Already have an account? <Link to="/">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;