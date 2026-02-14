import { Link } from "react-router-dom";
import logo from "../assets/MDLogo.png";
import "./About.css";

function About() {
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
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/catalog">Product Catalog</Link></li>
            <li><Link to="/cart">Shopping Cart</Link></li>
            <li><Link to="/payment">Payment & Delivery</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about" className="active">About Us</Link></li>
          </ul>
        </nav>

        <main>
          <section className="content-section">
            <h2>About MerchanDaiso</h2>

            <p>
              <strong>MerchanDaiso</strong> is your ultimate destination for premium anime merchandise.
              Built by a fan, for fans, we celebrate anime culture through high-quality collectibles
              and stylish fandom essentials.
            </p>

            <p>
              From detailed figurines and cozy apparel to manga, keychains, plushies,
              and stickers — every product is carefully selected to meet our standards
              of authenticity and quality.
            </p>

            <p>
              Anime is more than entertainment — it’s a lifestyle.
              Our mission is to help fans express their passion proudly,
              one piece of merch at a time.
            </p>
          </section>
        </main>
      </div>

      <footer>
        <p>© 2025 MerchanDaiso Official</p>
      </footer>
    </div>
  );
}

export default About;