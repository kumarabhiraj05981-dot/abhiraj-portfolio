
function Hero({ profile }) {
  return (
    <section id="home" className="hero">
      <div className="hero-grid-lines" />
      <div className="hero-background"><div className="hero-glow glow-one" /><div className="hero-glow glow-two" /></div>
      <div className="hero-container">
        <div className="hero-content reveal">
          <div className="availability"><span className="status-dot" />{profile.availability}</div>
          <p className="hero-intro">{profile.intro}</p>
          <h1>{profile.headline.split("AI/ML Engineer")[0]}<span>AI/ML Engineer.</span></h1>
          <p className="hero-description">{profile.description}</p>
          <div className="hero-actions">
            <a href="#projects" className="primary-button">Explore My Work <span>↗</span></a>
            <a href="#contact" className="secondary-button">Let's Connect</a>
          </div>
          <div className="hero-socials">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={profile.resume} target="_blank" rel="noreferrer">Resume ↗</a>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="orbital orbital-one" /><div className="orbital orbital-two" />
          <div className="code-card">
            <div className="code-header"><div className="window-dots"><span/><span/><span/></div><span>developer.js</span><span className="live-chip">LIVE</span></div>
            <div className="code-content">
              <p><span className="code-purple">const</span> <span className="code-blue">developer</span> = {"{"}</p>
              <p className="indent"><span className="code-key">name:</span> <span className="code-green">"{profile.name}"</span>,</p>
              <p className="indent"><span className="code-key">role:</span> <span className="code-green">"{profile.role}"</span>,</p>
              <p className="indent"><span className="code-key">focus:</span> <span className="code-green">"{profile.focus}"</span>,</p>
              <p className="indent"><span className="code-key">stack:</span> [</p>
              <p className="double-indent"><span className="code-green">"React"</span>, <span className="code-green">"Node.js"</span>,</p>
              <p className="double-indent"><span className="code-green">"Python"</span>, <span className="code-green">"MongoDB"</span></p>
              <p className="indent">],</p>
              <p className="indent"><span className="code-key">mission:</span> <span className="code-green">"Build. Learn. Repeat."</span></p>
              <p>{"};"}</p>
              <p className="code-comment">// Always learning. Always building.</p>
            </div>
          </div>
          <div className="floating-card card-top"><span>AI</span><small>Artificial Intelligence</small></div>
          <div className="floating-card card-bottom"><span>5+</span><small>Projects & Builds</small></div>
        </div>
      </div>
      <a href="#about" className="scroll-indicator"><span>Scroll to explore</span><span>↓</span></a>
    </section>
  );
}
export default Hero;
