function Footer({ profile }) {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <a
            href="#home"
            className="logo"
          >
            <span>AK</span>
          </a>

          <p>
            Building, learning and exploring
            technology.
          </p>

        </div>

        <div className="footer-links">

          <a href="#about">
            About
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#contact">
            Contact
          </a>

          {/* ADMIN LINK */}
          <a href="#/admin">
            ⚙ Admin Panel
          </a>

        </div>

        <div className="footer-socials">

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()}{" "}
          {profile.name}. All rights reserved.
        </p>

        <p>
          Designed & built with React.
        </p>

      </div>

    </footer>
  );
}

export default Footer;