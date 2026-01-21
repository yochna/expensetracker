import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Welcome back</h2>
        <p className="auth-subtitle">Login to continue managing your expenses</p>

        <form className="auth-form">
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />

          <div className="auth-row">
            <span className="forgot">Forgot password?</span>
          </div>

          <button className="auth-btn">Login</button>
        </form>

        <p className="auth-switch">
          New here? <Link to="/signup">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;