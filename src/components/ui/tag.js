import React from "react";

const Tag = ({ icon, tagName }) => {
  return (
    <div className="flex items-center justify-center text-gray-400 hover:text-white text-m border border-gray-400 hover:border-white space-x-2 px-4 rounded-full m-1 transition-colors duration-200">
      <span>{icon}</span> <span>{tagName}</span>
    </div>
  );
};

export default Tag;
