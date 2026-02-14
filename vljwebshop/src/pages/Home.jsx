import React from "react";
import "./style.css";

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <div className="logo-container">
          <img src="MDLogo.png" alt="MerchanDaiso Logo" className="logo-img" />
          <span className="logo-text">MerchanDaiso</span>
        </div>
      </header>

      <div className="main-container">
        <nav className="sidebar">
          <ul>
            <li><a href="MerchanDaiso.html" className="active">Home</a></li>
            <li><a href="login.html">Login</a></li>
            <li><a href="signup.html">Sign Up</a></li>
            <li><a href="catalog.html">Product Catalog</a></li>
            <li><a href="cart.html">Shopping Cart</a></li>
            <li><a href="payment.html">Payment & Delivery</a></li>
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="about.html">About Us</a></li>
          </ul>
        </nav>

        <main>
          <section className="hero">
            <h1>MerchanDaiso Official</h1>
            <p>Your ultimate store for anime merch!</p>
            <a href="catalog.html">
              <button className="btn-pink">Browse Products</button>
            </a>
          </section>

          <section className="featured-products">
            <h2>Shop by Category</h2>
            <div className="category-grid">
              {/* Category Card: Figurines */}
              <div className="cat-card">
                <div className="cat-img-container">
                  <img 
                    src="https://wuthering.shop/cdn/shop/files/wuthering-waves-the-shorekeeper-1-7-scale-figure-7.jpg?v=1730350341&width=940" 
                    alt="Figurines" 
                  />
                </div>
                <h3>Figurines</h3>
                <p>High-quality collectibles of your favorite characters</p>
                <button className="btn-pink">View All</button>
              </div>

              {/* Category Card: Shirts & Hoodies */}
              <div className="cat-card">
                <div className="cat-img-container">
                  <img 
                    src="https://i.etsystatic.com/35025466/r/il/3ee2e3/4993108799/il_1080xN.4993108799_8h2f.jpg" 
                    alt="Shirts & Hoodies" 
                  />
                </div>
                <h3>Shirts & Hoodies</h3>
                <p>Printed apparel that showcase your fandom in style</p>
                <button className="btn-pink">Shop Now</button>
              </div>

              {/* Category Card: Keychains */}
              <div className="cat-card">
                <div className="cat-img-container">
                  <img 
                    src="https://th.bing.com/th/id/OIP._NvsiI2yNQu30PF0AQtOwQHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" 
                    alt="Keychains" 
                  />
                </div>
                <h3>Keychains</h3>
                <p>Decorate with cute charms!</p>
                <button className="btn-pink">Explore</button>
              </div>

              {/* Category Card: Stickers */}
              <div className="cat-card">
                <div className="cat-img-container">
                  <img 
                    src="https://th.bing.com/th/id/OIP.34-RAnnZJBd4xLYtcqRwtQHaJ4?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" 
                    alt="Stickers" 
                  />
                </div>
                <h3>Stickers</h3>
                <p>Decorative vinyl stickers to personalize your belongings!</p>
                <button className="btn-pink">Collect Now</button>
              </div>

              {/* Category Card: Manga */}
              <div className="cat-card">
                <div className="cat-img-container">
                  <img 
                    src="https://preview.redd.it/junji-ito-manga-collection-v0-cw2ct6kjjnjb1.jpg?width=1080&crop=smart&auto=webp&s=c37201c32cedd54f09ce13f46905a5a9610a3dbb" 
                    alt="Manga" 
                  />
                </div>
                <h3>Manga</h3>
                <p>Official manga books and box sets in English & Japanese</p>
                <button className="btn-pink">See Titles</button>
              </div>

              {/* Category Card: Plushies & Posters */}
              <div className="cat-card">
                <div className="cat-img-container">
                  <img 
                    src="https://www.aitaikuji.com/media/catalog/product/cache/36f82b01c5fbed8ea6bff8d5f5c47011/a/p/ap2394336.jpg" 
                    alt="Plushies & Posters" 
                  />
                </div>
                <h3>Plushies & Posters</h3>
                <p>Soft and fluffy companions and wall worthy posters!</p>
                <button className="btn-pink">View More</button>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer>
        <div className="footer-cta">
          <h2>Have Questions?</h2>
          <p>Send us a message and we'll get back to you within a moment!</p>
          <br />
          <a href="contact.html">
            <button className="btn-pink">Contact Support</button>
          </a>
        </div>
        <div className="footer-info">
          <p>© 2025 MerchanDaiso Official | Follow us on social media</p>
          <div className="contact-details">
            <p>Contact Us: support@merchandaiso.com | +1 (555) 123-4567</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;