import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "./popover";

const Tag = ({ icon, tagName, popover }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex items-center justify-center text-gray-400 hover:text-white text-s border border-gray-400 hover:border-white space-x-2 px-4 rounded-full m-1 transition-colors duration-200">
          <span>{icon}</span> <span>{tagName}</span>
        </div>
        <PopoverContent className="dark font-medium">{popover}</PopoverContent>
      </PopoverTrigger>
    </Popover>
  );
};

export default Tag;
