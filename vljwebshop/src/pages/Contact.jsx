import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/MDLogo.png";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

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
            <li><Link to="/contact" className="active">Contact Us</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </nav>

        <main>
          <section className="contact-section">
            <h2>Contact Us</h2>

            <p>
              Have questions, feedback, or need help with an order?
              Send us a message and our support team will get back to you shortly.
            </p>

            <form onSubmit={handleSubmit}>
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button type="submit" className="btn-pink">
                Send Message
              </button>
            </form>

            <div className="contact-details">
              <p>Email: support@merchandaiso.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Support Hours: Mon – Fri, 9AM – 6PM</p>
            </div>
          </section>
        </main>
      </div>

      <footer>
        <p>© 2025 MerchanDaiso Official</p>
      </footer>
    </div>
  );
}

export default Contact;