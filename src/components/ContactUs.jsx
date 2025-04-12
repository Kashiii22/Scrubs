import React from "react";
import "./ContactUsPage.css"; // Updated CSS file
import Footer from "./Footer.jsx"
const ContactUsPage = () => {
  return (
    <>
    <div className="contact-us-page">
      
      <main className="contact-content">
        <div className="contact-details">
          <h1>Contact Us:</h1>
          <h5>Connect with us</h5>
          <p>
            We love hearing from our customers and supporters! Connect with us on social media to share your
            stories, feedback, and experiences. Your support drives our passion for what we do.
          </p>
          <p>Instagram: @Scrubsplus.au</p>
          <p>Email us: hello@scrubsplus.com.au</p>
        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUsPage;