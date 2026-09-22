
function About({ profile, stats, tags }) {
  return <section id="about" className="section about-section">
    <div className="section-heading reveal">
      <span className="section-tag">01 — ABOUT ME</span>
      <h2>Turning curiosity into <span>technology.</span></h2>
      <p>Computer Science Engineering student building practical projects while exploring AI, software development and modern web technologies.</p>
    </div>
    <div className="about-grid">
      <div className="about-main-card reveal">
        <div className="about-number">01</div>
        <h3>Hello, I'm <span>{profile.name}.</span></h3>
        <p>I am currently pursuing a Diploma in Computer Science Engineering from {profile.institute}. My main interests are Artificial Intelligence, Machine Learning, software development and problem solving.</p>
        <p>I enjoy turning ideas into practical projects and continuously improving my programming and development skills. My goal is to build technology that creates real-world impact.</p>
        <div className="about-tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      </div>
      <div className="about-profile-card reveal">
        <div className="profile-icon">AK</div>
        <h3>Computer Science Engineer</h3>
        <p>{profile.institute}</p>
        <div className="profile-line" />
        <div className="profile-info">
          <div><span>Education</span><strong>{profile.education}</strong></div>
          <div><span>Duration</span><strong>{profile.duration}</strong></div>
          <div><span>Focus</span><strong>{profile.focus}</strong></div>
        </div>
      </div>
    </div>
    <div className="about-stats">{stats.map(stat => <div className="stat-card reveal" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
  </section>;
}
export default About;
