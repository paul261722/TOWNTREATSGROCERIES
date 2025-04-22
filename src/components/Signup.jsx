import React, { useState } from 'react';

const Signup = () => {
  const backgroundImage =
    'https://images.unsplash.com/photo-1592928302043-57c7e5d4a1af?auto=format&fit=crop&w=1600&q=80';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const data = new FormData();
    data.append('username', formData.name);
    data.append('email', formData.email);
    data.append('password', formData.password);
    data.append('phone', formData.phone);

    try {
      const response = await fetch('https://andera.pythonanywhere.com/api/signup', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage(result.message || 'User registered successfully!');
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          phone: '',
        });
      } else {
        alert(result.message || 'Failed to register user.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Something went wrong during signup.');
    }
  };

  const styles = {
    container: {
      backgroundImage: `linear-gradient(rgba(0, 60, 0, 0.6), rgba(0, 60, 0, 0.6)), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Segoe UI, sans-serif',
      padding: '20px',
    },
    formBox: {
      backgroundColor: '#ffffffee',
      padding: '40px',
      borderRadius: '12px',
      width: '100%',
      maxWidth: '450px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
    },
    title: {
      textAlign: 'center',
      fontSize: '2rem',
      marginBottom: '20px',
      color: '#2e7d32',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '12px',
      marginBottom: '15px',
      borderRadius: '8px',
      border: '1px solid #ccc',
      fontSize: '1rem',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#43a047',
      color: '#fff',
      fontSize: '1rem',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
    },
    footerText: {
      marginTop: '15px',
      fontSize: '0.9rem',
      textAlign: 'center',
      color: '#444',
    },
    link: {
      color: '#2e7d32',
      fontWeight: 'bold',
      marginLeft: '5px',
      textDecoration: 'none',
    },
    successMessage: {
      marginTop: '20px',
      color: '#2e7d32',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.formBox} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Create Your Account</h2>
        <input
          style={styles.input}
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit" style={styles.button}>
          Sign Up
        </button>
        <div style={styles.footerText}>
          Already have an account?
          <a href="/signin" style={styles.link}>Sign In</a>
        </div>
        {successMessage && (
          <div style={styles.successMessage}>
            {successMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default Signup;
