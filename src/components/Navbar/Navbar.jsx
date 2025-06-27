import React from "react";

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
    { href: "#skills", label: "Skills" },
  ];

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        background: "#333",
        color: "#fff",
        borderRadius: "0 0 8px 8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        maxWidth: "1280px",
        margin: "0 auto",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <a
        href="#home"
        style={{
          display: "flex",
          alignItems: "center",
          color: "#fff",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "1.5rem",
          gap: "0.5rem",
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          style={{ display: "block" }}
        >
          <circle cx="16" cy="16" r="16" fill="#4F8EF7" />
          <text
            x="16"
            y="22"
            textAnchor="middle"
            fontSize="16"
            fill="#fff"
            fontFamily="Arial"
            fontWeight="bold"
          >
            R
          </text>
        </svg>
        Rakibul Hasan
      </a>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "1.2rem",
          margin: 0,
          padding: 0,
        }}
      >
        {navLinks.map((link, idx) => (
          <li
            key={link.href}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              borderRadius: "4px",
              transition: "background 0.2s",
              padding: "0.4rem 0.6rem",
              fontWeight: "500",
              background: hoveredIndex === idx ? "#4F8EF7" : "transparent",
            }}
          >
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <div style={{ display: "flex", gap: "1rem" }}>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "#4F8EF7";
            e.currentTarget.style.borderRadius = "25px";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "#333";
            e.currentTarget.style.borderRadius = "4px";
          }}
        >
          GitHub
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "#4F8EF7";
            e.currentTarget.style.borderRadius = "25px";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "#333";
            e.currentTarget.style.borderRadius = "4px";
          }}
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

const buttonStyle = {
  border: "1px solid #4F8EF7",
  color: "#fff",
  background: "#333",
  padding: "0.5rem 1.25rem",
  borderRadius: "4px",
  textDecoration: "none",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "all 0.5s",
};

export default Navbar;
