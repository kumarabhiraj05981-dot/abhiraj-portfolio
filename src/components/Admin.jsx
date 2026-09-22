import { useMemo, useState } from "react";

import {
  defaultPortfolio,
  getPortfolio,
  savePortfolio,
  resetPortfolio,
} from "../data";

const clone = (obj) =>
  JSON.parse(JSON.stringify(obj));

function Admin() {
  const [data, setData] = useState(() =>
    clone(getPortfolio())
  );

  const [tab, setTab] =
    useState("overview");

  const [saved, setSaved] =
    useState(false);

  const persist = (next) => {
    setData(next);

    savePortfolio(next);

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 1800);
  };

  const updateProfile = (
    key,
    value
  ) => {
    persist({
      ...data,

      profile: {
        ...data.profile,

        [key]: value,
      },
    });
  };

  const updateEducation = (
    key,
    value
  ) => {
    persist({
      ...data,

      education: {
        ...data.education,

        [key]: value,
      },
    });
  };

  const addProject = () => {
    persist({
      ...data,

      projects: [
        ...data.projects,

        {
          id: crypto.randomUUID(),

          type: "New Project",

          title: "Untitled Project",

          description:
            "Project description...",

          technologies: ["React"],

          github: "#",

          demo: "#",
        },
      ],
    });
  };

  const deleteProject = (id) => {
    persist({
      ...data,

      projects: data.projects.filter(
        (project) =>
          project.id !== id
      ),
    });
  };

  const updateProject = (
    id,
    key,
    value
  ) => {
    persist({
      ...data,

      projects:
        data.projects.map(
          (project) =>
            project.id === id
              ? {
                  ...project,
                  [key]: value,
                }
              : project
        ),
    });
  };

  const updateSkill = (
    id,
    key,
    value
  ) => {
    persist({
      ...data,

      skills: data.skills.map(
        (skill) =>
          skill.id === id
            ? {
                ...skill,
                [key]: value,
              }
            : skill
      ),
    });
  };

  const addSkillGroup = () => {
    persist({
      ...data,

      skills: [
        ...data.skills,

        {
          id: crypto.randomUUID(),

          title: "New Category",

          skills: ["New Skill"],
        },
      ],
    });
  };

  const deleteSkillGroup = (id) => {
    persist({
      ...data,

      skills: data.skills.filter(
        (skill) =>
          skill.id !== id
      ),
    });
  };

  const messages = useMemo(
    () =>
      JSON.parse(
        localStorage.getItem(
          "portfolio_messages"
        ) || "[]"
      ),
    [saved]
  );

  const input = (
    label,
    key,
    value,
    onChange,
    type = "text"
  ) => (
    <label className="admin-field">

      <span>{label}</span>

      <input
        type={type}
        value={value || ""}
        onChange={(e) =>
          onChange(
            key,
            e.target.value
          )
        }
      />

    </label>
  );

  const textarea = (
    label,
    key,
    value,
    onChange
  ) => (
    <label className="admin-field">

      <span>{label}</span>

      <textarea
        rows="5"
        value={value || ""}
        onChange={(e) =>
          onChange(
            key,
            e.target.value
          )
        }
      />

    </label>
  );

  return (
    <div className="admin-shell">

      {/* SIDEBAR */}

      <aside className="admin-sidebar">

        <a
          className="admin-brand"
          href="#home"
        >
          <span>AK</span>

          <div>
            <strong>
              Admin Studio
            </strong>

            <small>
              Portfolio CMS
            </small>
          </div>
        </a>

        <div className="admin-menu">

          {[
            [
              "overview",
              "⌂",
              "Overview",
            ],

            [
              "profile",
              "◉",
              "Profile",
            ],

            [
              "projects",
              "▣",
              "Projects",
            ],

            [
              "skills",
              "✦",
              "Skills",
            ],

            [
              "education",
              "◈",
              "Education",
            ],

            [
              "messages",
              "✉",
              "Messages",
            ],
          ].map(
            ([id, icon, label]) => (
              <button
                key={id}
                className={
                  tab === id
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setTab(id)
                }
              >
                <span>
                  {icon}
                </span>

                {label}
              </button>
            )
          )}

        </div>

        <div className="admin-side-bottom">

          <a href="#home">
            ↩ View Portfolio
          </a>

          <button
            onClick={() => {
              if (
                confirm(
                  "Reset all portfolio data to defaults?"
                )
              ) {
                resetPortfolio();

                setData(
                  clone(
                    defaultPortfolio
                  )
                );
              }
            }}
          >
            ↻ Reset Data
          </button>

        </div>

      </aside>

      {/* MAIN */}

      <main className="admin-main">

        <header className="admin-topbar">

          <div>

            <span className="admin-eyebrow">
              CONTROL CENTER
            </span>

            <h1>
              {tab[0].toUpperCase() +
                tab.slice(1)}
            </h1>

          </div>

          <div className="admin-top-actions">

            <span className="save-status">
              {saved
                ? "✓ Saved locally"
                : "● Local mode"}
            </span>

            <a
              href="#home"
              className="admin-view"
            >
              View site ↗
            </a>

          </div>

        </header>

        {/* OVERVIEW */}

        {tab === "overview" && (
          <section className="admin-content">

            <div className="admin-hero">

              <div>

                <span className="admin-eyebrow">
                  WELCOME BACK
                </span>

                <h2>
                  Manage your portfolio
                  <br />

                  <em>
                    without touching code.
                  </em>
                </h2>

                <p>
                  Edit profile details,
                  projects, skills and
                  education from one clean
                  dashboard.
                </p>

              </div>

              <div className="admin-orb">
                AK
              </div>

            </div>

            <div className="admin-metrics">

              <div>
                <span>
                  Projects
                </span>

                <strong>
                  {data.projects.length}
                </strong>
              </div>

              <div>
                <span>
                  Skill groups
                </span>

                <strong>
                  {data.skills.length}
                </strong>
              </div>

              <div>
                <span>
                  Messages
                </span>

                <strong>
                  {messages.length}
                </strong>
              </div>

              <div>
                <span>
                  Data mode
                </span>

                <strong>
                  Local
                </strong>
              </div>

            </div>

            <div className="admin-info-grid">

              <div className="admin-panel">

                <span className="admin-eyebrow">
                  QUICK ACTIONS
                </span>

                <div className="quick-actions">

                  <button
                    onClick={() =>
                      setTab("profile")
                    }
                  >
                    Edit Profile
                    <b>→</b>
                  </button>

                  <button
                    onClick={() =>
                      setTab("projects")
                    }
                  >
                    Add Project
                    <b>→</b>
                  </button>

                  <button
                    onClick={() =>
                      setTab("skills")
                    }
                  >
                    Manage Skills
                    <b>→</b>
                  </button>

                </div>

              </div>

              <div className="admin-panel">

                <span className="admin-eyebrow">
                  LIVE PREVIEW
                </span>

                <h3>
                  {data.profile.name}
                </h3>

                <p>
                  {data.profile.role}
                </p>

                <a href="#home">
                  Open portfolio ↗
                </a>

              </div>

            </div>

          </section>
        )}

        {/* PROFILE */}

        {tab === "profile" && (
          <section className="admin-content">

            <div className="admin-panel">

              <div className="panel-heading">

                <div>

                  <span className="admin-eyebrow">
                    PERSONAL BRAND
                  </span>

                  <h2>
                    Profile details
                  </h2>

                </div>

              </div>

              <div className="form-grid">

                {input(
                  "Name",
                  "name",
                  data.profile.name,
                  updateProfile
                )}

                {input(
                  "Role",
                  "role",
                  data.profile.role,
                  updateProfile
                )}

                {input(
                  "Intro",
                  "intro",
                  data.profile.intro,
                  updateProfile
                )}

                {input(
                  "Headline",
                  "headline",
                  data.profile.headline,
                  updateProfile
                )}

                {input(
                  "Availability",
                  "availability",
                  data.profile.availability,
                  updateProfile
                )}

                {input(
                  "Education",
                  "education",
                  data.profile.education,
                  updateProfile
                )}

                {input(
                  "Institute",
                  "institute",
                  data.profile.institute,
                  updateProfile
                )}

                {input(
                  "Duration",
                  "duration",
                  data.profile.duration,
                  updateProfile
                )}

                {input(
                  "Focus",
                  "focus",
                  data.profile.focus,
                  updateProfile
                )}

                {input(
                  "Email",
                  "email",
                  data.profile.email,
                  updateProfile,
                  "email"
                )}

                {input(
                  "GitHub",
                  "github",
                  data.profile.github,
                  updateProfile
                )}

                {input(
                  "LinkedIn",
                  "linkedin",
                  data.profile.linkedin,
                  updateProfile
                )}

                {input(
                  "Resume path",
                  "resume",
                  data.profile.resume,
                  updateProfile
                )}

              </div>

              {textarea(
                "Hero description",
                "description",
                data.profile.description,
                updateProfile
              )}

            </div>

          </section>
        )}

        {/* PROJECTS */}

        {tab === "projects" && (
          <section className="admin-content">

            <div className="panel-heading">

              <div>

                <span className="admin-eyebrow">
                  CONTENT
                </span>

                <h2>
                  Project manager
                </h2>

              </div>

              <button
                className="admin-primary"
                onClick={addProject}
              >
                ＋ Add project
              </button>

            </div>

            <div className="admin-project-grid">

              {data.projects.map(
                (project, index) => (

                  <div
                    className="admin-panel admin-project"
                    key={project.id}
                  >

                    <div className="project-admin-head">

                      <span>
                        0{index + 1}
                      </span>

                      <button
                        onClick={() =>
                          deleteProject(
                            project.id
                          )
                        }
                      >
                        Delete
                      </button>

                    </div>

                    {input(
                      "Type",
                      "type",
                      project.type,
                      (key, value) =>
                        updateProject(
                          project.id,
                          key,
                          value
                        )
                    )}

                    {input(
                      "Title",
                      "title",
                      project.title,
                      (key, value) =>
                        updateProject(
                          project.id,
                          key,
                          value
                        )
                    )}

                    {textarea(
                      "Description",
                      "description",
                      project.description,
                      (key, value) =>
                        updateProject(
                          project.id,
                          key,
                          value
                        )
                    )}

                    {input(
                      "Technologies (comma separated)",
                      "technologies",
                      project.technologies.join(
                        ", "
                      ),
                      (_, value) =>
                        updateProject(
                          project.id,
                          "technologies",
                          value
                            .split(",")
                            .map((x) =>
                              x.trim()
                            )
                            .filter(Boolean)
                        )
                    )}

                    {input(
                      "GitHub URL",
                      "github",
                      project.github,
                      (key, value) =>
                        updateProject(
                          project.id,
                          key,
                          value
                        )
                    )}

                    {input(
                      "Live demo URL",
                      "demo",
                      project.demo,
                      (key, value) =>
                        updateProject(
                          project.id,
                          key,
                          value
                        )
                    )}

                  </div>

                )
              )}

            </div>

          </section>
        )}

        {/* SKILLS */}

        {tab === "skills" && (
          <section className="admin-content">

            <div className="panel-heading">

              <div>

                <span className="admin-eyebrow">
                  TECH STACK
                </span>

                <h2>
                  Skills manager
                </h2>

              </div>

              <button
                className="admin-primary"
                onClick={addSkillGroup}
              >
                ＋ Add group
              </button>

            </div>

            <div className="admin-skill-grid">

              {data.skills.map(
                (skill, index) => (

                  <div
                    className="admin-panel"
                    key={skill.id}
                  >

                    <div className="project-admin-head">

                      <span>
                        0{index + 1}
                      </span>

                      <button
                        onClick={() =>
                          deleteSkillGroup(
                            skill.id
                          )
                        }
                      >
                        Delete
                      </button>

                    </div>

                    {input(
                      "Category",
                      "title",
                      skill.title,
                      (key, value) =>
                        updateSkill(
                          skill.id,
                          key,
                          value
                        )
                    )}

                    {input(
                      "Skills (comma separated)",
                      "skills",
                      skill.skills.join(
                        ", "
                      ),
                      (_, value) =>
                        updateSkill(
                          skill.id,
                          "skills",
                          value
                            .split(",")
                            .map((x) =>
                              x.trim()
                            )
                            .filter(Boolean)
                        )
                    )}

                  </div>

                )
              )}

            </div>

            <div className="admin-panel">

              <span className="admin-eyebrow">
                LEARNING
              </span>

              {input(
                "Currently learning",
                "currentlyLearning",
                data.currentlyLearning,
                (key, value) =>
                  persist({
                    ...data,
                    [key]: value,
                  })
              )}

            </div>

          </section>
        )}

        {/* EDUCATION */}

        {tab === "education" && (
          <section className="admin-content">

            <div className="admin-panel">

              <span className="admin-eyebrow">
                ACADEMIC PROFILE
              </span>

              <h2>
                Education
              </h2>

              <div className="form-grid">

                {input(
                  "Status",
                  "status",
                  data.education.status,
                  updateEducation
                )}

                {input(
                  "Title",
                  "title",
                  data.education.title,
                  updateEducation
                )}

                {input(
                  "Institute",
                  "institute",
                  data.education.institute,
                  updateEducation
                )}

                {input(
                  "Year",
                  "year",
                  data.education.year,
                  updateEducation
                )}

                {input(
                  "Branch",
                  "branch",
                  data.education.branch,
                  updateEducation
                )}

                {input(
                  "Semester",
                  "semester",
                  data.education.semester,
                  updateEducation
                )}

                {input(
                  "Focus",
                  "focus",
                  data.education.focus,
                  updateEducation
                )}

              </div>

            </div>

          </section>
        )}

        {/* MESSAGES */}

        {tab === "messages" && (
          <section className="admin-content">

            <div className="panel-heading">

              <div>

                <span className="admin-eyebrow">
                  INBOX
                </span>

                <h2>
                  Contact messages
                </h2>

              </div>

              <button
                className="admin-primary"
                onClick={() => {
                  localStorage.removeItem(
                    "portfolio_messages"
                  );

                  setSaved(true);
                }}
              >
                Clear all
              </button>

            </div>

            {messages.length === 0 ? (

              <div className="empty-state">
                No messages yet.
              </div>

            ) : (

              <div className="messages-list">

                {messages.map((message) => (

                  <div
                    className="admin-panel message-card"
                    key={message.id}
                  >

                    <div>

                      <strong>
                        {message.name}
                      </strong>

                      <span>
                        {message.email}
                      </span>

                    </div>

                    <small>
                      {message.date}
                    </small>

                    <p>
                      {message.message}
                    </p>

                  </div>

                ))}

              </div>

            )}

          </section>
        )}

      </main>

    </div>
  );
}

export default Admin;