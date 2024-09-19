import React from "react";

function Users() {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  ];

  const styles = {
    container: {
      padding: "2rem",
      backgroundColor: "#f9f9f9",
    },
    heading: {
      color: "#333",
      textAlign: "center",
      marginBottom: "1.5rem",
    },
    list: {
      listStyleType: "none",
      padding: 0,
    },
    listItem: {
      backgroundColor: "#e6e6e6",
      marginBottom: "1rem",
      padding: "1rem",
      borderRadius: "5px",
      fontSize: "1.1rem",
      color: "#555",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Users</h1>
      <ul style={styles.list}>
        {users.map((user) => (
          <li key={user.id} style={styles.listItem}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
