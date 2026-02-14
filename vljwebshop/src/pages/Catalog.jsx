import { Link } from "react-router-dom";
import "./Catalog.css";

function Catalog() {
  return (
    <div>
      <header>
        <strong>MerchanDaiso</strong>
      </header>

      <div className="main-container">
        <nav className="sidebar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/catalog">Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </nav>

        <main>
          <h2>Product Catalog</h2>

          <div className="product">
            <h3>Anime Figurine</h3>
            <p>₱ 1,800</p>
            <button className="btn-pink">Add to Cart</button>
          </div>

          <div className="product">
            <h3>Anime Hoodie</h3>
            <p>₱ 1,500</p>
            <button className="btn-pink">Add to Cart</button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Catalog;