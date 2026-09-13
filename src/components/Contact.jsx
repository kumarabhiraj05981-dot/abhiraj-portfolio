function Contact() {
return ( <section id="contact" className="section contact-section">


  <div className="contact-wrapper">

    <div className="contact-content">

      <span className="section-tag">05 — CONTACT</span>

      <h2>
        Let's build something
        <span> meaningful.</span>
      </h2>

      <p>
        I'm always interested in learning, collaborating and working
        on interesting technology projects. If you'd like to connect,
        feel free to reach out.
      </p>

      <div className="contact-actions">

        <a
          href="mailto:abhirajkumar@example.com"
          className="primary-button"
        >
          Email Me
          <span>↗</span>
        </a>

        <a
          href="https://www.linkedin.com/in/abhiraj-kumar-2a869a3b1/"
          target="_blank"
          rel="noreferrer"
          className="secondary-button"
        >
          LinkedIn ↗
        </a>

      </div>

    </div>

    <div className="contact-card">

      <span className="contact-card-label">
        CURRENTLY OPEN TO
      </span>

      <h3>
        Opportunities,
        <br />
        collaborations & projects.
      </h3>

      <div className="contact-status">
        <span></span>
        Available for opportunities
      </div>

    </div>

  </div>

</section>

);
}

export default Contact;
