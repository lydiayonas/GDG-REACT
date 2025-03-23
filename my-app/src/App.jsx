import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider"; // ✅ Correct import
import UserCard from "./Task2/UserCard";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  const groupMembers = ["Lydia", "Nahom", "Yonas", "Nati"];

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        height: "100vh",
        padding: "20px",
      }}
    >
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

      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{ marginTop: "20px", padding: "10px", cursor: "pointer" }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default App;

