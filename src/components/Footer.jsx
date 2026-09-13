function Footer() {
const currentYear = new Date().getFullYear();

return ( <footer className="footer">


  <div className="footer-container">

    <div className="footer-brand">

      <a href="#home" className="footer-logo">
        <span>A</span>K
      </a>

      <p>
        Building, learning and growing
        <br />
        one project at a time.
      </p>

    </div>

    <div className="footer-links">

      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#education">Education</a>
      <a href="#contact">Contact</a>

    </div>

    <div className="footer-socials">

      <a
        href="https://github.com/kumarabhiraj05981-dot"
        target="_blank"
        rel="noreferrer"
      >
        GitHub ↗
      </a>

      <a
        href="https://www.linkedin.com/in/abhiraj-kumar-2a869a3b1/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn ↗
      </a>

    </div>

  </div>

  <div className="footer-bottom">

    <p>
      © {currentYear} Abhiraj Kumar. All rights reserved.
    </p>

    <p>
      Designed & built with React.
    </p>

  </div>

</footer>

);
}

export default Footer;
