function Skills() {
const skillGroups = [
{
title: "Programming",
number: "01",
skills: [
"Java",
"C",
"Python",
"JavaScript",
],
},
{
title: "Frontend",
number: "02",
skills: [
"HTML",
"CSS",
"React",
"Vite",
],
},
{
title: "Backend & Database",
number: "03",
skills: [
"Node.js",
"Express.js",
"MongoDB",
"REST API",
],
},
{
title: "Tools & AI",
number: "04",
skills: [
"Git",
"GitHub",
"AI / ML Basics",
"Data Science",
],
},
];

return ( <section id="skills" className="section skills-section">


  <div className="section-heading">
    <span className="section-tag">02 — SKILLS</span>

    <h2>
      Technologies I
      <span> work with.</span>
    </h2>

    <p>
      A growing toolkit built through coursework, personal projects
      and continuous hands-on learning.
    </p>
  </div>

  <div className="skills-grid">

    {skillGroups.map((group) => (
      <div className="skill-card" key={group.number}>

        <div className="skill-card-top">
          <span className="skill-number">
            {group.number}
          </span>

          <span className="skill-arrow">
            ↗
          </span>
        </div>

        <h3>{group.title}</h3>

        <div className="skill-list">
          {group.skills.map((skill) => (
            <span key={skill}>
              {skill}
            </span>
          ))}
        </div>

      </div>
    ))}

  </div>

  <div className="skills-bottom">

    <div>
      <span className="mini-label">CURRENTLY LEARNING</span>
      <h3>AI, Machine Learning & Data Science</h3>
    </div>

    <div className="learning-badge">
      <span></span>
      Always Learning
    </div>

  </div>

</section>


);
}

export default Skills;
