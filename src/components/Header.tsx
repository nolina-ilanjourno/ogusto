import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/menu", label: "Menu" },
    { to: "/about", label: "À Propos" },
    { to: "/reservation", label: "Réservation" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <img
              src="./logo-cropped.png"
              alt="Ôgüsto - Gastronomie Italienne"
              className="logo-image"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="nav-links desktop">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={isActive(link.to) ? "active" : ""}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://deliveroo.fr/en/menu/paris/ternes-maillot/o-gusto"
                target="_blank"
                rel="noopener noreferrer"
                className="deliveroo-btn"
              >
                Commander en ligne
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="nav-links mobile">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      to={link.to}
                      className={isActive(link.to) ? "active" : ""}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href="https://deliveroo.fr/en/menu/paris/ternes-maillot/o-gusto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="deliveroo-btn"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Commander en ligne
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
