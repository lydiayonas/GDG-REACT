import React from "react";
import UserCard from "./Task2/UserCard";

function App() {
  const groupMembers = ["Lydia", "Nahom", "Yonas", "Nati"];

  return (
    <>
      <h1>Group Members</h1>
      <ul>
        {groupMembers.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>

      <UserCard
        name="Lydia"
        age={20}
        email="lydiayonas4@gmail.com"
        bgColor="#16a34a"
      />
    </>
  );
}

export default App;
