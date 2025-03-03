
import React, { useState } from 'react';

const Counter = () => {
 
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement =() => setCount(count-1);
  const reset =() => setCount(0);
  
return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} disabled={count === 0}>
        Decrement
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
  };
  
export default Counter;





















// const UserCard = (props) => {
//     return (
//       <div>
//         <h1>User Cards</h1>
//         <p>Full Name: {props.name}</p>
//         <p>Age: {props.age}</p>
//         <p>Email: {props.email}</p>
//       </div>
//     );
//   };


//   export default UserCard


