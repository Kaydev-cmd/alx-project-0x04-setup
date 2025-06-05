import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

const Custom404: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col justify-center items-center text-white">
      {/* Main Heading */}
      <h1 className="text-6xl font-bold mb-4">Oops! 😱</h1>
      <p className="text-2xl mb-8">
        We can't seem to find the page you're looking for.
      </p>
    </div>
  );
};

export default Custom404;
