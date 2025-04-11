import React from "react";
import "./Footer.css"; // Import the new CSS file
import {
  FaCcAmex,
  FaCcApplePay,
  FaCreditCard, // Fallback for Google Pay and Shop Pay
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaShopify,
} from "react-icons/fa"; // Payment method icons
import { AiOutlineInstagram } from "react-icons/ai"; // Instagram icon

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>Quick Links</p>
          <div className="quick-links">
            <a href="#">Search</a> | <a href="#">About Us</a> | <a href="#">Refund and Returns</a> | <a href="#">FAQ</a>
          </div>
        </div>
        <div className="footer-center">
          <p>Subscribe to our emails</p>
          <div className="subscribe-section">
            <input type="email" placeholder="Email" className="email-input" />
            <button className="subscribe-button">→</button>
          </div>
        </div>
        <div className="footer-right">
          <button className="follow-button">Follow on Shop <FaShopify /></button>
          <a href="#" className="social-icon">
            <AiOutlineInstagram />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="country-section">
          <span>Country/region</span>
          <select className="country-dropdown">
            <option>Australia (AUD $)</option>
            {/* Add more options if needed */}
          </select>
        </div>
        <div className="payment-methods">
          <FaCcAmex />
          <FaCcApplePay />
          <FaCreditCard title="Google Pay" /> {/* Fallback with title for accessibility */}
          <FaCcMastercard />
          <FaCcPaypal />
          <FaCcVisa />
          <FaCreditCard title="Shop Pay" /> {/* Fallback with title for accessibility */}
        </div>
        <div className="chat-icon">
          <span>Chat</span>
          <span className="notification">1</span>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2025, ScrubsPlus Powered by Shopify · <a href="#">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;