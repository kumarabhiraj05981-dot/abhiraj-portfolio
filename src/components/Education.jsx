
function Education({ education }) {
  return <section id="education" className="section education-section">
    <div className="section-heading reveal"><span className="section-tag">04 — EDUCATION</span><h2>My learning <span>journey.</span></h2><p>Building a strong foundation in computer science while exploring modern technologies.</p></div>
    <div className="education-layout reveal"><div className="education-line"><span/></div><div className="education-card">
      <div className="education-top"><div><span className="education-status">{education.status}</span><h3>{education.title}</h3><p className="education-institute">{education.institute}</p></div><span className="education-year">{education.year}</span></div>
      <div className="education-divider"/><div className="education-details">
        <div><span>Branch</span><strong>{education.branch}</strong></div><div><span>Current Semester</span><strong>{education.semester}</strong></div><div><span>Focus Areas</span><strong>{education.focus}</strong></div>
      </div>
    </div></div>
    <div className="education-note reveal"><span>01</span><p>Learning doesn't stop at the classroom. I continuously work on projects, programming fundamentals and new technologies to improve my engineering skills.</p></div>
  </section>;
}
export default Education;
