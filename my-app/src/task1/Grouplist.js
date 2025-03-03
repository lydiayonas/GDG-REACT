import React from "react";

const GroupList = () => {
  const members = ["Lydia", "Nahom", "Alex", "Sara", "John"];

  return (
    <div>
      <h2>Group Members</h2>
      <ul>
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroupList;
