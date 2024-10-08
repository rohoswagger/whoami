"use client";

import { FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="p-4 text-center">
      <p className="inline-block font-mono text-sm">
        Made with ❤️ | Like this template? Check it out on{" "}
        <span
          className="cursor-pointer"
          onClick={() =>
            window.open("https://github.com/roshan-d/webfolio", "_blank")
          }>
          <FaGithub className="w-4 h-4 inline mb-1" />
        </span>
      </p>
    </footer>
  );
};

export default Footer;
