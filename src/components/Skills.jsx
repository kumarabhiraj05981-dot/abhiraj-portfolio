
function Skills({ skills, currentlyLearning }) {
  return <section id="skills" className="section skills-section">
    <div className="section-heading reveal"><span className="section-tag">02 — SKILLS</span><h2>Technologies I <span>work with.</span></h2><p>A growing toolkit built through coursework, personal projects and hands-on learning.</p></div>
    <div className="skills-grid">
      {skills.map((group, i) => <div className="skill-card reveal" key={group.id}>
        <div className="skill-card-top"><span className="skill-number">0{i+1}</span><span className="skill-arrow">↗</span></div>
        <h3>{group.title}</h3>
        <div className="skill-list">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
      </div>)}
    </div>
    <div className="skills-bottom reveal"><div><span className="mini-label">CURRENTLY LEARNING</span><h3>{currentlyLearning}</h3></div><div className="learning-badge"><span/>Always Learning</div></div>
  </section>;
}
export default Skills;
