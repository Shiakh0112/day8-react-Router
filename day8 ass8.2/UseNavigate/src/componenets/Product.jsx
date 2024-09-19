import React from "react";

function Product() {
  const styles = {
    container: {
      padding: "2rem",
      backgroundColor: "#eaeaea",
      margin: "auto",
    },
    heading: {
      color: "#333",
      textAlign: "center",
      marginBottom: "1rem",
    },
    productGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: "1rem",
    },
    productCard: {
      padding: "1rem",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
  };

  const products = [
    { id: 1, name: "Product 1", description: "High-quality product 1" },
    { id: 2, name: "Product 2", description: "High-quality product 2" },
    { id: 3, name: "Product 3", description: "High-quality product 3" },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Products</h1>
      <div style={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
