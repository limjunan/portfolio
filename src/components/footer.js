import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col h-[10vh text-gray-300 flex items-center text-sm justify-center border-t border-gray-500 p-8 mx-8 mt-8">
      <p>© 2024 Bryan Lim. All rights reserved.</p>
      <p>
        If you couldn't tell already, design inspired by{" "}
        <a
          href="https://developer.apple.com/design/"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Apple
        </a>
        .
      </p>
    </div>
  );
};

export default Footer;
