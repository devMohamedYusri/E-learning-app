import "./login.css";
import { useState } from "react";
import { loginUser } from "../../services/api/authorization"; 
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginData = { email, password };
      const data = await loginUser(loginData);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setEmail('');
      setPassword('');
      window.location.href = "/";
    } catch (err) {
      
      setError(err.message || "Invalid email or password");
    }
  };

  return (
    <div className="all">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="register-link">
          <p>
            Dont have an account? <Link to="/sign-up">Sign up here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
