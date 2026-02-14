import { Link } from "react-router-dom";
import logo from "../assets/MDLogo.png";
import "./Cart.css";

function Cart() {
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
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </nav>

        <main>
          <h1>Your Cart</h1>

          <p>Anime Figurine - ₱ 2,500</p>
          <p>Anime Hoodie - ₱ 1,200</p>

          <hr />

          <h3>Total: ₱ 3,700</h3>

          <Link to="/payment">
            <button className="btn-pink">Checkout</button>
          </Link>
        </main>
      </div>

      <footer>
        <p>© 2025 MerchanDaiso</p>
      </footer>
    </div>
  );
}

export default Cart;