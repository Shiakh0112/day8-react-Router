import React from "react";

function Contact() {
  const styles = {
    container: {
      padding: "2rem",
      backgroundColor: "#f4f4f4",
    },
    heading: {
      color: "#333",
      textAlign: "center",
      marginBottom: "1rem",
    },
    contactDetails: {
      fontSize: "1.2rem",
      lineHeight: "1.8",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      <div style={styles.contactDetails}>
        <p>Email: contact@ourcompany.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 Main Street, Anytown, USA</p>
      </div>
    </div>
  );
}

export default Contact;
