import "./Navbar.css";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const [darkmode, setDarkMode] = useState(false);

  const toggletheme = () => {
    setDarkMode(!darkmode);
    document.body.classList.toggle("dark");
  };

return (
  <nav className="navbar">
    <div className="navbar-inner">
      <div className="nav-logo" onClick={() => Navigate("/")}>
        Spend<span>Wise</span>
      </div>

      <div className="nav-actions">
        <button className="nav-btn login" onClick={() => navigate("/Login")}>Login</button>
        <button className="nav-btn signup " onClick={() => navigate("/Signup")}>Sign Up</button>

        <button className="theme-toggle" onClick={toggletheme}>
          {darkmode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
  </nav>
);

};

export default Navbar;
