import { useEffect, useState } from "react";

function Navbar({ profile }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    window.addEventListener("scroll", onScroll);

    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <header
      className={`navbar ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="nav-container">

        <a
          href="#home"
          className="logo"
          onClick={close}
        >
          <span>AK</span>
        </a>

        <nav
          className={`nav-links ${
            menuOpen ? "active" : ""
          }`}
        >
          {[
            "Home",
            "About",
            "Skills",
            "Projects",
            "Education",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={close}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="nav-right">

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            GitHub ↗
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            LinkedIn ↗
          </a>

          <a
            href="#contact"
            className="nav-button"
          >
            Let's Talk <span>↗</span>
          </a>

          {/* ADMIN LINK */}
          <a
            href="#/admin"
            className="admin-nav-link"
            onClick={close}
          >
            ⚙ Admin
          </a>

        </div>

        <button
          className="menu-button"
          onClick={() =>
            setMenuOpen((value) => !value)
          }
          aria-label="Toggle menu"
        >
          {menuOpen ? "×" : "☰"}
        </button>

      </div>
    </header>
  );
}

export default Navbar;