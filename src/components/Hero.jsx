function Hero() {
return ( <section id="home" className="hero">


  <div className="hero-background">
    <div className="hero-glow glow-one"></div>
    <div className="hero-glow glow-two"></div>
  </div>

  <div className="hero-container">

    {/* LEFT CONTENT */}
    <div className="hero-content">

      <div className="availability">
        <span className="status-dot"></span>
        Open to opportunities
      </div>

      <p className="hero-intro">
        Hello, I'm <span>Abhiraj Kumar</span>
      </p>

      <h1>
        Aspiring
        <br />
        <span>AI/ML Engineer.</span>
      </h1>

      <p className="hero-description">
        Computer Science Engineering student passionate about
        Artificial Intelligence, Machine Learning and building
        real-world software applications that solve meaningful problems.
      </p>

      <div className="hero-actions">

        <a href="#projects" className="primary-button">
          Explore My Work
          <span>↗</span>
        </a>

        <a href="#contact" className="secondary-button">
          Let's Connect
        </a>

      </div>

      <div className="hero-socials">

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

       <a
          href="/Abhiraj-Kumar-Resume.pdf"
          target="_blank"
          rel="noreferrer"
>
          Resume ↗
  </a>

      </div>

    </div>

    {/* RIGHT VISUAL */}
    <div className="hero-visual">

      <div className="code-card">

        <div className="code-header">

          <div className="window-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <span className="code-file">
            developer.js
          </span>

        </div>

        <div className="code-content">

          <p>
            <span className="code-purple">const</span>{" "}
            <span className="code-blue">developer</span> = {"{"}
          </p>

          <p className="indent">
            <span className="code-key">name:</span>{" "}
            <span className="code-green">
              "Abhiraj Kumar"
            </span>,
          </p>

          <p className="indent">
            <span className="code-key">role:</span>{" "}
            <span className="code-green">
              "AI/ML Engineer"
            </span>,
          </p>

          <p className="indent">
            <span className="code-key">education:</span>{" "}
            <span className="code-green">
              "Diploma CSE"
            </span>,
          </p>

          <p className="indent">
            <span className="code-key">skills:</span> [
          </p>

          <p className="double-indent">
            <span className="code-green">"Java"</span>,
            <span className="code-green"> "Python"</span>,
          </p>

          <p className="double-indent">
            <span className="code-green">"React"</span>,
            <span className="code-green"> "Node.js"</span>,
          </p>

          <p className="double-indent">
            <span className="code-green">"MongoDB"</span>,
            <span className="code-green"> "AI/ML"</span>
          </p>

          <p className="indent">],</p>

          <p className="indent">
            <span className="code-key">passion:</span>{" "}
            <span className="code-green">
              "Building & Learning"
            </span>
          </p>

          <p>{"};"}</p>

          <p className="code-comment">
            // Always learning. Always building.
          </p>

        </div>

      </div>

      {/* FLOATING CARDS */}

      <div className="floating-card card-top">
        <span>AI</span>
        <small>Artificial Intelligence</small>
      </div>

      <div className="floating-card card-bottom">
        <span>5+</span>
        <small>Projects & Builds</small>
      </div>

    </div>

  </div>

  <a href="#about" className="scroll-indicator">
    <span>Scroll to explore</span>
    <span>↓</span>
  </a>

</section>


);
}

export default Hero;
