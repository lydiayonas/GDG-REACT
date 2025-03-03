import React from "react";

const UserCard = ({ name, age, email, bgColor }) => {
  return (
    <div
      style={{
        backgroundColor: bgColor || "#4f46e5",
        padding: "16px",
        borderRadius: "12px",
        color: "white",
        marginTop: "20px",
      }}
    >
      <h2>User Card</h2>
      <p>Full Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserCard;
