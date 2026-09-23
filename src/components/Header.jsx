import { useState } from "react";
import "./Header.css";

const NAV_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Earn With Garibook", href: "#earn" },
  { label: "Garibook Business", href: "#business" },
  { label: "Garibook Club", href: "#club" },
  { label: "Campaign", href: "#campaign" },
  { label: "Blogs", href: "#blogs" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#" className="header__logo">
          <span className="header__logo-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C7.58 2 4 5.58 4 10c0 5.25 6.5 11.25 7.3 11.96a1 1 0 0 0 1.4 0C13.5 21.25 20 15.25 20 10c0-4.42-3.58-8-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
                fill="#fff"
              />
            </svg>
          </span>
          garibook
        </a>

        <nav className={`header__nav ${menuOpen ? "is-open" : ""}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <div className="header__nav-actions">
            <button className="header__lang">🌐 English</button>
            <button className="btn btn-primary header__login">Login</button>
          </div>
        </nav>

        <button
          className="header__burger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
