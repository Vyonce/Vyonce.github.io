import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/MDLogo.png";
import "./Auth.css";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div>
      <header>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-img" />
          <span className="logo-text">MerchanDaiso</span>
        </div>
      </header>

      <div className="main-container">
        <nav className="sidebar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Back to Login</Link></li>
            <li><Link to="/catalog">Product Catalog</Link></li>
            <li><Link to="/cart">Shopping Cart</Link></li>
          </ul>
        </nav>

        <main>
          <h2 className="center-title">Create Account</h2>

          <form onSubmit={handleSubmit}>
            <label>First Name</label>
            <input type="text" name="firstName" onChange={handleChange} />

            <label>Last Name</label>
            <input type="text" name="lastName" onChange={handleChange} />

            <label>Email</label>
            <input type="email" name="email" onChange={handleChange} />

            <label>Password</label>
            <input type="password" name="password" onChange={handleChange} />

            <button className="btn-pink full-width">Sign Up</button>

            <div className="text-center">
              <Link to="/login">Already have an account? Login</Link>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

export default Signup;