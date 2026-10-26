import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import visaLogo from "../assets/images/visa.png";
import mastercardLogo from "../assets/images/mastercard.png";
import upiLogo from "../assets/images/upi.png";
import paytmLogo from "../assets/images/paytm.png";
import secureLogo from "../assets/images/footer-secure.png";

// Placeholder links: "#" would break HashRouter, so do nothing on click
const stay = (e) => e.preventDefault();

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">
            Shop<span>Kart</span>
          </div>

          <p>
            Your one-stop destination for quality
            <br />
            products at the best prices.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook" onClick={stay}>f</a>
            <a href="#" aria-label="Instagram" onClick={stay}>◎</a>
            <a href="#" aria-label="Twitter" onClick={stay}>♥</a>
            <a href="#" aria-label="YouTube" onClick={stay}>▶</a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Shop</h3>
          <Link to="/products">All Products</Link>
          <Link to="/products">Categories</Link>
          <Link to="/products">New Arrivals</Link>
          <Link to="/products">Best Sellers</Link>
          <Link to="/products">Deals of the Day</Link>
        </div>

        <div className="footer-column">
          <h3>Customer Service</h3>
          <Link to="/contact">Contact Us</Link>
          <a href="#" onClick={stay}>FAQs</a>
          <a href="#" onClick={stay}>Shipping Policy</a>
          <a href="#" onClick={stay}>Returns &amp; Refunds</a>
          <a href="#" onClick={stay}>Track Order</a>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <Link to="/about">About Us</Link>
          <a href="#" onClick={stay}>Careers</a>
          <a href="#" onClick={stay}>Privacy Policy</a>
          <a href="#" onClick={stay}>Terms &amp; Conditions</a>
          <a href="#" onClick={stay}>Sell on ShopKart</a>
        </div>

        <div className="footer-payments">
          <h3>We Accept</h3>

          <div className="payment-methods">
            <span className="payment"><img src={visaLogo} alt="Visa" /></span>
            <span className="payment"><img src={mastercardLogo} alt="Mastercard" /></span>
            <span className="payment"><img src={upiLogo} alt="UPI" /></span>
            <span className="payment"><img src={paytmLogo} alt="Paytm" /></span>
          </div>

          <div className="secure-payment">
            <span className="lock-icon">
              <img src={secureLogo} alt="" />
            </span>
            <span>100% Secure Payments</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">© 2026 ShopKart. All Rights Reserved.</div>
    </footer>
  );
}

export default Footer;