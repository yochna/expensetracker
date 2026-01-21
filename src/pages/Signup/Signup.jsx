import "../Login/Login.css";

import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Create your account</h2>
        <p className="auth-subtitle">
          Start tracking your expenses in minutes
        </p>

        <form className="auth-form">
          <input type="text" placeholder="Full name" />
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm password" />

          <button className="auth-btn">Sign Up</button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
