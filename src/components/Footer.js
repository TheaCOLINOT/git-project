import React from "react";
import "../styles/Footer.css"; // Ajoute un fichier de style si nécessaire

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} My App. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
