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
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">

      {/* BACKGROUND */}
      <div className="projects-bg">
        <div className="projects-grid"></div>

        <span className="projects-bg-text text-one">
          BUILD / 03
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
            <p className="projects-label">PROJECTS / 03</p>

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


                  <div className="browser-content">

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


                    {project.visual === "pajero" && (
                      <div className="mock-pajero">

                        <div className="mock-dashboard-top">
                          <span>PAJERO</span>
                          <span>DISDUKCAPIL</span>
                        </div>

                        <div className="mock-dashboard-body">
                          <div className="mock-side"></div>

                          <div className="mock-data">
                            <span></span>
                            <span></span>
                            <span></span>

                            <div className="mock-chart">
                              <i></i>
                              <i></i>
                              <i></i>
                              <i></i>
                              <i></i>
                            </div>
                          </div>
                        </div>

                      </div>
                    )}


                    {project.visual === "sivika" && (
                      <div className="mock-sivika">

                        <div className="sivika-header">
                          <span>SIVIKA</span>
                          <span>● SYSTEM</span>
                        </div>

                        <div className="sivika-flow">
                          <div>INPUT</div>
                          <b>→</b>
                          <div>PROCESS</div>
                          <b>→</b>
                          <div>OUTPUT</div>
                        </div>

                        <div className="sivika-lines">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>

                      </div>
                    )}

                  </div>

                </div>

                <span className="project-number">
                  {project.number}
                </span>

              </div>


              {/* CONTENT */}
              <div className="project-content">

                <div className="project-meta">
                  <span>{project.category}</span>

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


                <h3>{project.title}</h3>


                <p className="project-role">
                  {project.role}
                </p>


                <p className="project-description">
                  {project.description}
                </p>


                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

<a
  href={project.link}
  target={project.external ? "_blank" : undefined}
  rel={project.external ? "noopener noreferrer" : undefined}
  className="project-link"
>
  {project.external ? "VIEW LIVE" : "VIEW DETAIL"}
  <span>↗</span>
</a>
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}