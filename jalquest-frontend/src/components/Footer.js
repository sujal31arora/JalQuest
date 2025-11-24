import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="home-footer">
      <p>&copy; 2025 JalQuest. Developed by Devansh Srivastava.</p>
      <p><span className="badge">Winner of Hack X NIET</span></p>
      <p className="hackathon-project-label">Hackathon Project</p>
      <p style={{marginTop: "10px", fontSize: "16px", fontWeight: "600", color: "#004080", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px"}}>
        <span role="img" aria-label="email" style={{fontSize: "20px"}}>✉️</span>
        <a href="mailto:messagedevansh@gmail.com" style={{color: "#e3ebf2ff", textDecoration: "none", fontWeight: "bold", borderBottom: "2px solid transparent", transition: "border-bottom-color 0.3s"}}>
          messagedevansh@gmail.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
