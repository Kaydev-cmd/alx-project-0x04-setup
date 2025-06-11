import React, { useState } from "react";

const CounterApp: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return <div>CounterApp</div>;
};

export default CounterApp;
