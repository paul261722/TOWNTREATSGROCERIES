import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const styles = {
    navbar: {
      backgroundColor: '#2e7d32',
      color: '#fff',
      padding: '15px 25px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      fontFamily: 'Segoe UI, sans-serif',
      position: 'sticky',
      top: 0,
      zIndex: 999,
    },
    logo: {
      fontSize: '1.6rem',
      fontWeight: 'bold',
    },
    linksContainer: {
      display: 'flex',
      gap: '20px',
      alignItems: 'center',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '1rem',
      transition: 'opacity 0.3s',
    },
    button: {
      padding: '8px 16px',
      backgroundColor: '#fff',
      color: '#2e7d32',
      border: 'none',
      borderRadius: '5px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    hamburger: {
      display: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
    mobileMenu: {
      display: 'none',
      flexDirection: 'column',
      gap: '15px',
      marginTop: '15px',
    },
    showMobileMenu: {
      display: 'flex',
    },
    content: {
      padding: '30px',
      fontFamily: 'Segoe UI, sans-serif',
    },
    // Responsive styles via JS media query
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <nav style={styles.navbar}>
        <div style={styles.logo}>🌿 TOWNTREATSGROCERIES</div>

        {!isMobile && (
          <div style={styles.linksContainer}>
            <a href="/" style={styles.link}>Home</a>
            <a href="/Addproducts" style={styles.link}>Addproducts</a>
            <a href="/Aboutus" style={styles.link}>Aboutus</a>
            <a href="/Signin" style={styles.link}>Signin</a>
            <Link to="/Signup">
    <button style={styles.button}>Sign Up</button>
  </Link>
          </div>
        )}

        {isMobile && (
          <div style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
        )}
      </nav>

      {/* Mobile Menu Below Navbar */}
      {isMobile && menuOpen && (
        <div style={{ ...styles.mobileMenu, ...styles.showMobileMenu, backgroundColor: '#2e7d32', padding: '15px' }}>
          <a href="/" style={styles.link}>Home</a>
          <a href="/Addproducts" style={styles.link}>Products</a>
          <a href="/Aboutus" style={styles.link}>Aboutus</a>
          <a href="/Signin" style={styles.link}>Signin</a>
          <button style={styles.button}>Signup</button>
        </div>
      )}

      <div style={styles.content}>
        <h1>Welcome to TOWNTREATSGROCERIES 🥕</h1>
        <p>Your go-to place for farm-fresh groceries, straight from the source!</p>
      </div>
    </>
  );
};

export default App;
