import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-cta">
        <h2>Have Questions?</h2>
        <p>Send us a message and we'll get back to you within a moment!</p>
        <a href="/contact">
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
  );
}

export default Footer;