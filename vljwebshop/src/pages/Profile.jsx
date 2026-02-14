import { Link } from "react-router-dom";
import logo from "../assets/MDLogo.png";
import "./Cart.css";

function Profile() {
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
            <li><Link to="/login">Logout</Link></li>
          </ul>
        </nav>

        <main>
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            User Profile
          </h2>

          <div className="profile-box">
            <p><strong>First Name:</strong> Viyonce Lexi</p>
            <p><strong>Last Name:</strong> Yazar</p>
            <p><strong>Email:</strong> viyazar@email.com</p>
            <p><strong>Mobile:</strong> +63 9123456789</p>
            <p><strong>Address:</strong> Rizal, Philippines</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Profile;