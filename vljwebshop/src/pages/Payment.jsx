import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/MDLogo.png";
import "./Cart.css";

function Payment() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("");

  const handlePayment = () => {
    setStatus("Processing payment...");
    setTimeout(() => {
      navigate("/confirmation");
    }, 2000);
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
          </ul>
        </nav>

        <main>
          <h1>Payment & Delivery</h1>

          <select>
            <option>GCash</option>
            <option>Credit Card</option>
            <option>Cash On Delivery</option>
          </select>

          <br /><br />

          <select>
            <option>Standard Delivery</option>
            <option>Express</option>
          </select>

          <br /><br />

          <button className="btn-pink" onClick={handlePayment}>
            Pay Now
          </button>

          <p>{status}</p>
        </main>
      </div>
    </div>
  );
}

export default Payment;