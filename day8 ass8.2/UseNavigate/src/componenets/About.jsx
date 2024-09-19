import React from "react";

function About() {
  const styles = {
    container: {
      padding: "2rem",
      backgroundColor: "#f9f9f9",
    },
    heading: {
      color: "#333",
      textAlign: "center",
      marginBottom: "1rem",
    },
    paragraph: {
      color: "#555",
      fontSize: "1.2rem",
      lineHeight: "1.6",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
        We are a company dedicated to providing the best products and services
        to our customers. Our mission is to offer high-quality solutions that
        meet the evolving needs of our community.
      </p>
      <p style={styles.paragraph}>
        Established in 2020, we have grown to become a leader in the industry,
        known for our commitment to excellence and innovation.
      </p>
    </div>
  );
}

export default About;
