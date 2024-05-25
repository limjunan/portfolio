import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col text-gray-300 items-center text-center text-sm justify-center border-t border-gray-500 py-4 mx-8 bg-top-light">
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
