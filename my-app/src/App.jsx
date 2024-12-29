import './App.css';
// import UserCard from './counter';

import Counter from './counter';

const UserCard = (props) => {
  return (
    <div>
      <h1>User Cards</h1>
      <p>Full Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
    </div>
  );
};

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

      
      <UserCard name="Lydia" age={20} email="lydiayonas4@gmail.com" />
    </>
  );
}

export default App;
