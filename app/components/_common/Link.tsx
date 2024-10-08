import React from "react";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  openInNewTab?: boolean;
}

const Link: React.FC<LinkProps> = ({
  href,
  children,
  className = "",
  openInNewTab = true,
}) => {
  return (
    <a
      href={href}
      className={`text-blue-500 hover:text-blue-600 underline cursor-pointer ${className}`}
      target={openInNewTab ? "_blank" : "_self"}
      rel={openInNewTab ? "noopener noreferrer" : undefined}>
      {children}
    </a>
  );
};

export default Link;
