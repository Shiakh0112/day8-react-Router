import React from "react";

function Home() {
  const styles = {
    container: {
      padding: "2rem",
      backgroundColor: "#fff",
    },
    heading: {
      color: "#333",
      textAlign: "center",
    },
    paragraph: {
      color: "#666",
      fontSize: "1.2rem",
      lineHeight: "1.6",
      marginBottom: "1rem",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the Home Page</h1>
      <p style={styles.paragraph}>
        This is the home page of our website. Here you will find a variety of
        resources and links to different sections. Feel free to explore and
        learn more about our services.
      </p>
      <p style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero.
      </p>
    </div>
  );
}

export default Home;
