const skills = [
  {
    number: "01",
    title: "Web Development",
    description: "Building responsive and functional web-based applications.",
  },
  {
    number: "02",
    title: "System Analysis",
    description: "Understanding requirements and translating them into structured systems.",
  },
  {
    number: "03",
    title: "UI / UX",
    description: "Designing simple and user-friendly digital experiences.",
  },
  {
    number: "04",
    title: "Database",
    description: "Working with structured data and database management.",
  },
  {
    number: "05",
    title: "API",
    description: "Connecting applications through structured API workflows.",
  },
  {
    number: "06",
    title: "System Design",
    description: "Planning system flows, processes, and user interactions.",
  },
];

const tools = [
  "Next.js",
  "React",
  "Supabase",
  "Figma",
  "Git",
  "GitHub",
  "Vite",
  "Tailwind CSS",
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <div>
            <p className="skills-label">SKILLS / 04</p>

            <h2>
              What I work
              <br />
              <span>with.</span>
            </h2>
          </div>

          <p className="skills-intro">
            A combination of technical skills, system thinking,
            and tools I use to build digital solutions.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.number}>
              <span>{skill.number}</span>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <b>↗</b>
            </div>
          ))}
        </div>

        <div className="tools-section">
          <p>TOOLS & TECHNOLOGIES</p>

          <div className="tools-list">
            {tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}