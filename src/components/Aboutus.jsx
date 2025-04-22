import React from 'react';

const App = () => {
  const backgroundImage =
    'https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=1600&q=80'; // Fresh produce background

  const styles = {
    container: {
      backgroundImage: `linear-gradient(rgba(0, 100, 0, 0.5), rgba(0, 100, 0, 0.5)), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      textAlign: 'center',
      padding: '20px',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      padding: '50px',
      borderRadius: '12px',
      maxWidth: '800px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    },
    heading: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#f9fffa',
    },
    paragraph: {
      fontSize: '1.2rem',
      lineHeight: '1.8',
      color: '#e5ffe3',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h1 style={styles.heading}>About Us</h1>
        <p style={styles.paragraph}>
          At <strong>TOWNTREATSGROCERIES</strong>, we believe in bringing you the best nature has to offer. 
          Our mission is to sell farm-fresh produce, sustainably sourced goods, and healthy 
          grocery options right to your table. We’re more than a store—we’re a part of your community.
        </p>
      </div>
    </div>
  );
};

export default App;
