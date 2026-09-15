function Projects() {
const projects = [
{
number: "01",
type: "Featured Project",
title: "Student Resources Hub",
description:
"A student-focused educational platform where users can access notes, previous year questions, syllabus, e-books and other academic resources in one place.",
technologies: [
"React",
"Node.js",
"Express.js",
"MongoDB",
],
github: "https://github.com/",
demo: "https://student-resources-hub-production-a44rebm7o.vercel.app/login",
},


{
  number: "02",
  type: "AI / Finance",
  title: "INVESTIQ AI",
  description:
    "An AI-powered stock and cryptocurrency platform designed to help users explore market data, analyze assets and understand investment information.",
  technologies: [
    "React",
    "Node.js",
    "MongoDB",
    "AI / ML",
  ],
  github: "https://github.com/",
  demo: "https://investiq-xgcv.vercel.app/",
},

// {
//   number: "03",
//   type: "Software Project",
//   title: "Hospital Management System",
//   description:
//     "A software project designed to organize hospital-related information and simplify the management of patients, doctors and other essential records.",
//   technologies: [
//     "Java",
//     "Database",
//     "OOP",
//   ],
//   github: "https://github.com/",
//   demo: "https://hospital-management-system.vercel.app/",
// },

// {
//   number: "04",
//   type: "Programming Project",
//   title: "Snake Water Gun Game",
//   description:
//     "A simple interactive game project created to practice programming fundamentals, conditional logic and user input handling.",
//   technologies: [
//     "Python",
//     "Logic",
//     "Programming",
//   ],
//   github: "https://github.com/",
//   demo: "https://snake-water-gun-game.vercel.app/",
// },


];

return ( <section id="projects" className="section projects-section">


  <div className="section-heading">

    <span className="section-tag">03 — PROJECTS</span>

    <h2>
      Things I've
      <span> built.</span>
    </h2>

    <p>
      A selection of projects where I turn ideas into practical
      software and continuously improve my development skills.
    </p>

  </div>

  <div className="projects-list">

    {projects.map((project) => (
      <article className="project-card" key={project.number}>

        <div className="project-top">

          <span className="project-number">
            {project.number}
          </span>

          <span className="project-type">
            {project.type}
          </span>

        </div>

        <div className="project-content">

          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <div className="project-tech">

            {project.technologies.map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}

          </div>

        </div>

        <div className="project-actions">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            GitHub ↗
          </a>

          {project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="project-link project-demo"
            >
              Live Demo ↗
            </a>
          )}

        </div>

      </article>
    ))}

  </div>

  <div className="projects-footer">

    <p>
      More projects and experiments are available on my GitHub.
    </p>

    <a
      href="https://github.com/kumarabhiraj05981-dot"
      target="_blank"
      rel="noreferrer"
    >
      View GitHub Profile ↗
    </a>

  </div>

</section>


);
}

export default Projects;
