import React from "react";

const Contact = () => {
  return (
    <div className="h-[30vh] my-16 ml-8 lg:m-20 text-gray-300 flex flex-col">
      <span className="font-semibold text-2xl lg:text-4xl">
        Impressed? Get in touch.
      </span>
      <div className="flex items-center justify-center flex-grow">
        <div className="border-gray-500 rounded-md border p-4 px-16 space-x-4">
          <span>Gmail</span>
          <span>LinkedIn</span>
          <span>Github</span>
          <span>Telegram</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
