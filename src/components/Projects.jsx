
function Projects({ projects }) {
  return <section id="projects" className="section projects-section">
    <div className="section-heading reveal"><span className="section-tag">03 — PROJECTS</span><h2>Things I've <span>built.</span></h2><p>A selection of projects where ideas become practical software.</p></div>
    <div className="projects-list">
      {projects.map((project, i) => <article className="project-card reveal" key={project.id}>
        <div className="project-top"><span className="project-number">0{i+1}</span><span className="project-type">{project.type}</span></div>
        <div className="project-content"><h3>{project.title}</h3><p>{project.description}</p><div className="project-tech">{project.technologies.map(t => <span key={t}>{t}</span>)}</div></div>
        <div className="project-actions"><a href={project.github} target="_blank" rel="noreferrer" className="project-link">GitHub ↗</a>{project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="project-link project-demo">Live Demo ↗</a>}</div>
      </article>)}
    </div>
    <div className="projects-footer"><p>More experiments and builds are available on GitHub.</p><a href="https://github.com/kumarabhiraj05981-dot" target="_blank" rel="noreferrer">View GitHub Profile ↗</a></div>
  </section>;
}
export default Projects;
