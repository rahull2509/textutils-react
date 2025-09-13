import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // X (Twitter) icon

export default function Footer({ theme }) {
  return (
    <footer
      style={{
        backgroundColor: theme.base,
        color: theme.text,
        textAlign: "center",
        padding: "10px",
        marginTop: "20px",
      }}
    >
      <p>© 2025 Rahul | All Rights Reserved</p>

      <div style={{ marginTop: "8px" }}>

          {/* GitHub */}
        <a
          href="https://github.com/rahull2509" 
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 10px", color: theme.text, fontSize: "20px" }}
        >
          <FaGithub />
        </a>
         
         {/* X (Twitter) */}
        <a
          href="https://twitter.com/your-username" 
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 10px", color: theme.text, fontSize: "20px" }}
        >
          <FaXTwitter />

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/rahullgangwar" 
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 10px", color: theme.text, fontSize: "20px" }}
        >
          <FaLinkedin />
        </a>

      

       
        </a>
      </div>
    </footer>
  );
}
