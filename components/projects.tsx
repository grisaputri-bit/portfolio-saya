const projects = [
  {
    number: "01",
    title: "Lavebaya",
    category: "WEB APPLICATION",
    status: "COMPLETED",
    description:
      "A web-based platform for a kebaya rental business, designed to support product presentation and a more organized digital experience.",
    role: "Web Development · UI/UX",
    stack: ["React", "Vite", "Tailwind CSS"],
    visual: "lavebaya",
    link: "https://lavebaya-git-main-grisa-putri.vercel.app/",
    external: true,
  },
  {
    number: "02",
    title: "PAJERO",
    category: "PUBLIC SERVICE SYSTEM",
    status: "IN PROGRESS",
    description:
      "A web-based service submission system for Disdukcapil Garut, focused on making KTP-el recording and Family Card services more accessible.",
    role: "Backend · Database · System Analysis",
    stack: ["Next.js", "Supabase", "API"],
    visual: "pajero",
    link: "/project/pajero",
    external: false,
  },
  {
    number: "03",
    title: "SIVIKA",
    category: "WEB APPLICATION",
    status: "IN PROGRESS",
    description:
      "A web-based system developed as part of an internship project, involving system development and digital workflow implementation.",
    role: "Web Development · System Analysis",
    stack: ["Next.js", "Supabase", "Database"],
    visual: "sivika",
    link: "/project/sivika",
    external: false,
  },
  {
    number: "04",
    title: "Personal Portfolio",
    category: "WEB DEVELOPMENT",
    status: "COMPLETED",
    description:
      "A personal portfolio website designed to showcase my projects, experience, skills, and background in web development.",
    role: "Web Development · UI/UX",
    stack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    visual: "portfolio",
    link: "https://portfolio-saya-nine.vercel.app/",
    external: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">

      {/* BACKGROUND */}
      <div className="projects-bg">
        <div className="projects-grid"></div>

        <span className="projects-bg-text text-one">
          BUILD / 04
        </span>

        <span className="projects-bg-text text-two">
          SYSTEMS
        </span>

        <span className="projects-bg-dot dot-one"></span>
        <span className="projects-bg-dot dot-two"></span>
        <span className="projects-bg-dot dot-three"></span>
      </div>

      <div className="projects-container">

        {/* HEADER */}
        <div className="projects-header">

          <div>
            <p className="projects-label">
              PROJECTS / 04
            </p>

            <h2>
              Things I’ve
              <br />
              <span>built.</span>
            </h2>
          </div>

          <p className="projects-intro">
            Selected projects where I explore ideas through
            development, system analysis, and design.
          </p>

        </div>

        {/* PROJECT LIST */}
        <div className="projects-list">

          {projects.map((project) => (
            <article
              className={`project-card ${project.visual}`}
              key={project.number}
            >

              {/* VISUAL */}
              <div className="project-visual">

                <div className="project-browser">

                  {/* BROWSER TOP */}
                  <div className="browser-top">

                    <div className="browser-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <span className="browser-url">
                      project / {project.title.toLowerCase()}
                    </span>

                  </div>

                  {/* BROWSER CONTENT */}
                  <div className="browser-content">

                    {/* ================= LAVEBAYA ================= */}
                    {project.visual === "lavebaya" && (
                      <div className="mock-lavebaya">

                        <span className="mock-small">
                          KEBAYA RENTAL
                        </span>

                        <strong>
                          Find your
                          <br />
                          perfect look.
                        </strong>

                        <div className="mock-pill">
                          Explore Collection ↗
                        </div>

                      </div>
                    )}

                    {/* ================= PAJERO ================= */}
                    {project.visual === "pajero" && (
                      <div className="mock-pajero mock-under-construction">

                        <div className="construction-top">
                          <span>
                            PAJERO
                          </span>

                          <span>
                            DISDUKCAPIL GARUT
                          </span>
                        </div>

                        <div className="construction-center">

                          <span className="construction-label">
                            ● IN DEVELOPMENT
                          </span>

                          <strong>
                            UNDER
                            <br />
                            CONSTRUCTION
                          </strong>

                          <p>
                            This system is currently being developed.
                          </p>

                        </div>

                        <div className="construction-line"></div>

                        <div className="construction-bottom">
                          <span>
                            PUBLIC SERVICE SYSTEM
                          </span>

                          <span>
                            02 / 04
                          </span>
                        </div>

                      </div>
                    )}

                    {/* ================= SIVIKA ================= */}
                    {project.visual === "sivika" && (
                      <div className="mock-sivika mock-under-construction">

                        <div className="construction-top">
                          <span>
                            SIVIKA
                          </span>

                          <span>
                            ● SYSTEM
                          </span>
                        </div>

                        <div className="construction-center">

                          <span className="construction-label">
                            ● IN DEVELOPMENT
                          </span>

                          <strong>
                            UNDER
                            <br />
                            CONSTRUCTION
                          </strong>

                          <p>
                            This system is currently being developed.
                          </p>

                        </div>

                        <div className="construction-line"></div>

                        <div className="construction-bottom">
                          <span>
                            WEB APPLICATION
                          </span>

                          <span>
                            03 / 04
                          </span>
                        </div>

                      </div>
                    )}

                    {/* ================= PERSONAL PORTFOLIO ================= */}
                    {project.visual === "portfolio" && (
                      <div className="mock-portfolio">

                        {/* MINI NAVBAR */}
                        <div className="portfolio-mini-nav">

                          <strong>
                            GRISA PUTRI
                          </strong>

                          <div className="portfolio-mini-links">
                            <span>ABOUT</span>
                            <span>WORK</span>
                            <span>CONTACT</span>
                          </div>

                        </div>

                        {/* MINI HERO */}
                        <div className="portfolio-mini-main">

                          <span className="mock-small">
                            WEB DEVELOPER / 04
                          </span>

                          <strong className="portfolio-mini-title">
                            Building
                            <br />
                            digital
                            <br />
                            experiences.
                          </strong>

                          <div className="portfolio-mini-bottom">

                            <span>
                              SELECTED WORKS
                            </span>

                            <div className="mock-pill">
                              VIEW PORTFOLIO ↗
                            </div>

                          </div>

                        </div>

                        <span className="portfolio-mini-number">
                          04
                        </span>

                      </div>
                    )}

                  </div>
                </div>

                {/* PROJECT NUMBER */}
                <span className="project-number">
                  {project.number}
                </span>

              </div>

              {/* CONTENT */}
              <div className="project-content">

                {/* META */}
                <div className="project-meta">

                  <span>
                    {project.category}
                  </span>

                  <span
                    className={
                      project.status === "IN PROGRESS"
                        ? "status-progress"
                        : "status-completed"
                    }
                  >
                    ● {project.status}
                  </span>

                </div>

                {/* TITLE */}
                <h3>
                  {project.title}
                </h3>

                {/* ROLE */}
                <p className="project-role">
                  {project.role}
                </p>

                {/* DESCRIPTION */}
                <p className="project-description">
                  {project.description}
                </p>

                {/* STACK */}
                <div className="project-stack">

                  {project.stack.map((item) => (
                    <span key={item}>
                      {item}
                    </span>
                  ))}

                </div>

                {/* LINK */}
                <a
                  href={project.link}
                  target={
                    project.external
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    project.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="project-link"
                >
                  {project.external
                    ? "VIEW LIVE"
                    : "VIEW DETAIL"}

                  <span>
                    ↗
                  </span>

                </a>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}