import React, { useState } from 'react';
import axios from 'axios';

const Signin = () => {
  const backgroundImage =
    'https://images.unsplash.com/photo-1582281298052-74b33b2c8f0f?auto=format&fit=crop&w=1600&q=80';

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const data = new FormData();
      data.append('email', formData.email);
      data.append('password', formData.password);

      const response = await axios.post('https://andera.pythonanywhere.com/api/signin', data);

      if (response.data.message.toLowerCase().includes('login')) {
        setSuccessMessage(`✅ ${response.data.message}`);
        console.log('User info:', response.data.user);
        // You can redirect or store user info here
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('❌ An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: {
      backgroundImage: `linear-gradient(rgba(0, 80, 0, 0.6), rgba(0, 80, 0, 0.6)), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Segoe UI, sans-serif',
    },
    formBox: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      padding: '40px 30px',
      borderRadius: '12px',
      boxShadow: '0 10px 20px rgba(0,0,0,0.25)',
      width: '100%',
      maxWidth: '400px',
      textAlign: 'center',
    },
    heading: {
      fontSize: '2rem',
      color: '#2e7d32',
      marginBottom: '20px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '12px',
      margin: '10px 0',
      border: '1px solid #ccc',
      borderRadius: '8px',
      fontSize: '1rem',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#43a047',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      cursor: 'pointer',
      marginTop: '15px',
    },
    message: {
      margin: '10px 0',
      fontSize: '0.95rem',
      fontWeight: 'bold',
    },
    success: {
      color: 'green',
    },
    error: {
      color: 'red',
    },
    footerText: {
      marginTop: '15px',
      fontSize: '0.9rem',
      color: '#444',
    },
    link: {
      color: '#2e7d32',
      textDecoration: 'none',
      fontWeight: 'bold',
      marginLeft: '5px',
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.formBox}>
        <h2 style={styles.heading}>Welcome to TOWN TREATS GROCERIES</h2>

        {loading && <div style={styles.message}>⏳ Signing in...</div>}
        {successMessage && <div style={{ ...styles.message, ...styles.success }}>{successMessage}</div>}
        {errorMessage && <div style={{ ...styles.message, ...styles.error }}>{errorMessage}</div>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          style={styles.input}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          style={styles.input}
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
        <p style={styles.footerText}>
          Don’t have an account?
          <a href="/signup" style={styles.link}>Signup</a>
        </p>
      </form>
    </div>
  );
};

export default Signin;
