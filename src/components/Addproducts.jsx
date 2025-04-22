import axios from 'axios';
import React, { useState } from 'react';

const Addproducts = () => {
  const [product_name, setProduct_name] = useState("");
  const [cost, setCost] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const data = new FormData();
      data.append("product_name", product_name);
      data.append("product_description", description);
      data.append("product_cost", cost);
      data.append("product_photo", photo);

      const response = await axios.post("https://andera.pythonanywhere.com/api/addproduct", data);

      setSuccessMessage("✅ Product added successfully!");
      setProduct_name("");
      setCost("");
      setDescription("");
      setPhoto(null);
    } catch (error) {
      console.error("Error submitting product:", error);
      setErrorMessage("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    page: {
      minHeight: '100vh',
      backgroundImage: `linear-gradient(rgba(0, 80, 0, 0.7), rgba(0, 80, 0, 0.7)), url(https://images.unsplash.com/photo-1615485929245-1e9d493f0f56?auto=format&fit=crop&w=1600&q=80)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
    },
    formContainer: {
      backgroundColor: '#ffffffee',
      padding: '30px',
      borderRadius: '10px',
      width: '100%',
      maxWidth: '600px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
    },
    heading: {
      textAlign: 'center',
      fontSize: '1.8rem',
      color: '#2e7d32',
      marginBottom: '20px',
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
    message: {
      textAlign: 'center',
      marginBottom: '15px',
      fontWeight: 'bold',
    },
    success: {
      color: 'green',
    },
    error: {
      color: 'red',
    },
  };

  return (
    <div style={styles.page}>
      <form style={styles.formContainer} onSubmit={handleSubmit}>
        <h2 style={styles.heading}>Add New Product</h2>

        {loading && <div style={{ ...styles.message }}>⏳ Submitting...</div>}
        {successMessage && <div style={{ ...styles.message, ...styles.success }}>{successMessage}</div>}
        {errorMessage && <div style={{ ...styles.message, ...styles.error }}>{errorMessage}</div>}

        <input
          style={styles.input}
          type="text"
          placeholder="Product Name"
          value={product_name}
          onChange={(e) => setProduct_name(e.target.value)}
          required
        />

        <input
          style={styles.input}
          type="number"
          placeholder="Price (Kes)"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          required
        />

        <input
          style={styles.input}
          type="text"
          placeholder="Category / Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <input
          style={styles.input}
          type="file"
          onChange={(e) => setPhoto(e.target.files[0])}
          required
        />

        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default Addproducts;
