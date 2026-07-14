import { useState } from "react";
import logo from "../img/logo.png";

const LINKS = [
  { href: "#top", label: "Home", hint: "Back to home" },
  { href: "#products", label: "Products", hint: "What we have for you" },
  { href: "#services", label: "Services", hint: "Things we do" },
  { href: "#blog", label: "Blog", hint: "Follow our updates" },
  { href: "#contact", label: "Contact", hint: "Ways to reach us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  function handleLinkClick(e, href) {
    e.preventDefault();
    setOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <header>
      <nav className="container">
        <a id="logo" href="#top" onClick={(e) => handleLinkClick(e, "#top")}>
          <img src={logo} alt="logo polo360" />
        </a>
        <button
          id="menuToggle"
          className={open ? "open" : ""}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <menu id="mainMenu" className={open ? "open" : ""}>
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>
                {link.label}
              </a>
              {link.hint}
            </li>
          ))}
        </menu>
      </nav>
    </header>
  );
}
