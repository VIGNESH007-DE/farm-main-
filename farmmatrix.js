import React from "react";
import { motion } from "framer-motion";

const FarmMatrix = () => {
  const buttons = [
    { label: "AI CHAT BOT", link: "#" },
    { label: "MATRIX NEWS", link: "https://matrix-news-hub.vercel.app/" },
    { label: "WEATHER CONDITION", link: "#" },
    { label: "DISEASE DETECTION", link: "#" },
    { label: "HARVEST VEHICLE BUY", link: "#" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-600 via-yellow-500 to-green-800 text-white p-6">
      <motion.h1
        className="text-5xl font-bold mb-10 drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Farm Matrix
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {buttons.map((button, index) => (
          <motion.a
            key={index}
            href={button.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-700 text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {button.label}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default FarmMatrix;
