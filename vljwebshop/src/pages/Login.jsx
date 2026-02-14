import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/MDLogo.png";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
    alert("Login successful!");
    navigate("/profile");
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
            <li><Link to="/catalog">Product Catalog</Link></li>
            <li><Link to="/cart">Shopping Cart</Link></li>
            <li><Link to="/payment">Payment & Delivery</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </nav>

        <main>
          <h2 className="center-title">Login</h2>

          <form onSubmit={handleSubmit}>
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="user@email.com"
              value={formData.email}
              onChange={handleChange}
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
            />

            <button className="btn-pink full-width">Login</button>

            <div className="text-center">
              <p>Don't have an account yet?</p>
              <Link to="/signup">Create one here</Link>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

export default Login;