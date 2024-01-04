import { useState } from "react";

const User = ({ name, location }) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user">
      <h2>count: {count}</h2>
      <h2>count2: {count2}</h2>
      <h2>{name}</h2>
      <h3>{location}</h3>
    </div>
  );
};
export default User;
