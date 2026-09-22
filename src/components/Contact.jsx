
function Contact({ profile }) {
  const submit = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const messages = JSON.parse(localStorage.getItem("portfolio_messages") || "[]");
    messages.unshift({ id: Date.now(), name: form.get("name"), email: form.get("email"), message: form.get("message"), date: new Date().toLocaleString() });
    localStorage.setItem("portfolio_messages", JSON.stringify(messages));
    e.currentTarget.reset();
    alert("Message saved. Thanks for reaching out!");
  };
  return <section id="contact" className="section contact-section">
    <div className="contact-wrapper reveal">
      <div className="contact-content"><span className="section-tag">05 — CONTACT</span><h2>Let's build something <span>meaningful.</span></h2><p>I'm interested in learning, collaborating and working on interesting technology projects.</p>
        <div className="contact-actions"><a href={`mailto:${profile.email}`} className="primary-button">Email Me <span>↗</span></a><a href={profile.linkedin} target="_blank" rel="noreferrer" className="secondary-button">LinkedIn ↗</a></div>
      </div>
      <form className="contact-form" onSubmit={submit}><input name="name" required placeholder="Your name"/><input name="email" required type="email" placeholder="Email address"/><textarea name="message" required rows="5" placeholder="Tell me about your idea..."/><button className="primary-button" type="submit">Send Message <span>↗</span></button></form>
    </div>
  </section>;
}
export default Contact;
