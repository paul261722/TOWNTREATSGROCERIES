import React from 'react';
import './AboutUs.css'; // Optional external CSS for styling



const AboutUs = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
      </header>

      <section className="about-content">
        <p>
          Welcome to <strong>FreshMart</strong> — your trusted neighborhood grocery store!
          Since 2010, we’ve been dedicated to providing fresh, quality groceries and friendly
          service to our community.
        </p>
        <p>
          Our mission is simple: deliver the freshest produce, pantry staples, and local goods,
          while making your shopping experience as convenient and enjoyable as possible.
        </p>
        <p>
          Whether you shop with us in-store or online, we’re here to make your life easier and tastier.
          Thank you for making us part of your daily routine.
        </p>
      </section>

      <footer className="about-footer">
        <p>&copy; 2025 FreshMart. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
