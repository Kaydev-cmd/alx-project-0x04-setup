import React, { useState } from "react";

const CounterApp: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 to-pink-500 flex flex-col justify-center items-center text-white">
      {/* Title */}
      <h1 className="text-6xl font-extrabold mb-6">🤖 Fun Counter App 🎉</h1>

      {/* Funny message */}
      <p className="text-lg font-medium mb-4">
        Current Count: {count}{" "}
        {count === 0
          ? "🙈 No clicks yet!"
          : count % 10 === 0 && count !== 0
          ? "🔥 You're in fire!"
          : ""}
      </p>
    </div>
  );
};

export default CounterApp;
