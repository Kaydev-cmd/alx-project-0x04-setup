import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Splash App</h3>
          <p>
            Your one-stop platform for all your needs. Connecting people,
            creating opportunities.
          </p>
          <p>&copy; 2024 Splash App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
