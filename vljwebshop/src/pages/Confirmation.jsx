import { Link } from "react-router-dom";
import logo from "../assets/MDLogo.png";
import "./Confirmation.css";

function Confirmation() {
  return (
    <div>
      <header>
        <div className="logo-container">
          <img src={logo} alt="MerchanDaiso Logo" className="logo-img" />
          <span className="logo-text">MerchanDaiso</span>
        </div>
      </header>

      <div className="main-container">
        <nav className="sidebar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/catalog">Product Catalog</Link></li>
            <li><Link to="/cart" className="active">Shopping Cart</Link></li>
            <li><Link to="/payment">Payment & Delivery</Link></li>
          </ul>
        </nav>

        <main>
          <h1>Transaction Successful!</h1>

          <p>Order ID: MD-2025-001</p>
          <p>Total Paid: ₱3,700</p>
          <p>Status: Paid</p>

          <Link to="/">
            <button className="btn-pink">Back to Home</button>
          </Link>
        </main>
      </div>

      <footer>
        <p>© 2025 MerchanDaiso</p>
      </footer>
    </div>
  );
}

export default Confirmation;