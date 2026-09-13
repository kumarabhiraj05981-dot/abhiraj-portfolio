function About() {
return ( <section id="about" className="section about-section">


  <div className="section-heading">
    <span className="section-tag">01 — ABOUT ME</span>

    <h2>
      Turning curiosity into
      <span> technology.</span>
    </h2>

    <p>
      I'm a Computer Science Engineering student who enjoys learning,
      building and experimenting with modern technologies.
    </p>
  </div>

  <div className="about-grid">

    {/* Main About Card */}
    <div className="about-main-card">

      <div className="about-number">01</div>

      <h3>
        Hello, I'm <span>Abhiraj Kumar.</span>
      </h3>

      <p>
        I am currently pursuing a Diploma in Computer Science Engineering
        from Government Polytechnic Vaishali. My main interests are
        Artificial Intelligence, Machine Learning, software development
        and problem solving.
      </p>

      <p>
        I enjoy turning ideas into practical projects and continuously
        improving my programming and development skills. My goal is to
        become a skilled engineer and build technology that creates
        real-world impact.
      </p>

      <div className="about-tags">
        <span>AI / ML</span>
        <span>Software Development</span>
        <span>Problem Solving</span>
        <span>Continuous Learning</span>
      </div>

    </div>

    {/* Profile Card */}
    <div className="about-profile-card">

      <div className="profile-icon">
        AK
      </div>

      <h3>Computer Science Engineer</h3>

      <p>
        Government Polytechnic Vaishali
      </p>

      <div className="profile-line"></div>

      <div className="profile-info">
        <div>
          <span>Education</span>
          <strong>Diploma CSE</strong>
        </div>

        <div>
          <span>Duration</span>
          <strong>2024 — 2027</strong>
        </div>

        <div>
          <span>Focus</span>
          <strong>AI / ML</strong>
        </div>
      </div>

    </div>

  </div>

  {/* Stats */}
  <div className="about-stats">

    <div className="stat-card">
      <strong>5+</strong>
      <span>Projects Built</span>
    </div>

    <div className="stat-card">
      <strong>10+</strong>
      <span>Technologies</span>
    </div>

    <div className="stat-card">
      <strong>2027</strong>
      <span>Graduation Goal</span>
    </div>

    <div className="stat-card">
      <strong>∞</strong>
      <span>Learning Mindset</span>
    </div>

  </div>

</section>


);
}

export default About;
