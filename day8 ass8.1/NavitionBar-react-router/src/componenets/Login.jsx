import React from "react";

function Login() {
  const styles = {
    container: {
      padding: "2rem",
      backgroundColor: "#f4f4f4",
      maxWidth: "400px",
      margin: "0 auto",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    },
    heading: {
      color: "#333",
      textAlign: "center",
      marginBottom: "1.5rem",
    },
    formGroup: {
      marginBottom: "1rem",
    },
    label: {
      display: "block",
      marginBottom: "0.5rem",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      padding: "0.5rem",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    button: {
      width: "100%",
      padding: "0.75rem",
      backgroundColor: "#007BFF",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "1rem",
    },
    link: {
      textAlign: "center",
      display: "block",
      marginTop: "1rem",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Login</h1>
      <form>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
      <p style={styles.link}>
        Don't have an account? <a href="#">Sign up</a> here.
      </p>
    </div>
  );
}

export default Login;
