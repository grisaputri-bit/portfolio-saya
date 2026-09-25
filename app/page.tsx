import Navbar from "../components/Navbar";
import About from "../components/about";
import Experience from "../components/Experience";
import Projects from "../components/projects";
import Skills from "../components/Skills";
import Contact from "../components/contact";

const skills = [
  "System Analysis",
  "UI / UX",
  "Web Development",
  "Database",
  "API",
  "Supabase",
  "System Design",
  "User Flow",
  "Git",
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home" className="hero">

<div className="bg-grid"></div>

<div className="bg-code code-one">&lt;/&gt;</div>
<div className="bg-code code-two">01</div>
<div className="bg-code code-three">{`{ API }`}</div>
<div className="bg-code code-four">/system</div>

<div className="bg-line line-one"></div>
<div className="bg-line line-two"></div>

<div className="bg-dot dot-a"></div>
<div className="bg-dot dot-b"></div>
<div className="bg-dot dot-c"></div>

{/* WEB BACKGROUND DECORATION */}

<div className="web-lines">
  <div className="web-horizontal line-h1"></div>
  <div className="web-horizontal line-h2"></div>
  <div className="web-vertical line-v1"></div>
  <div className="web-vertical line-v2"></div>

  <div className="web-node node-1"></div>
  <div className="web-node node-2"></div>
  <div className="web-node node-3"></div>
  <div className="web-node node-4"></div>

  <div className="web-box box-1">
    <span>UI</span>
  </div>

  <div className="web-box box-2">
    <span>API</span>
  </div>

  <div className="web-box box-3">
    <span>DB</span>
  </div>
</div>

          <div className="hero-container">

            {/* LEFT */}
            <div className="hero-content">

              <p className="eyebrow">
                INFORMATION SYSTEMS STUDENT
              </p>

              <h1>
                Designing systems,
                <br />
                building <span>solutions.</span>
              </h1>

              <p className="hero-description">
                Hi, I’m <strong>Grisa Putri</strong>. An Information Systems
                student interested in web development, system analysis,
                UI/UX design, and building digital solutions.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="primary-button">
                  View My Projects ↗
                </a>

                <a href="#about" className="secondary-button">
                  About Me
                </a>
              </div>

              <div className="hero-meta">
                <div>
                  <strong>03+</strong>
                  <span>Projects</span>
                </div>

                <div>
                  <strong>02+</strong>
                  <span>Internship Projects</span>
                </div>

                <div>
                  <strong>∞</strong>
                  <span>Always Learning</span>
                </div>
              </div>

            </div>

            {/* RIGHT */}
            <div className="hero-visual">

              {/* FOTO */}
              <div className="profile-wrapper">
                <div className="profile-bg"></div>

               <img
  src="/profile/foto-grisa.jpeg"
  alt="Grisa Putri"
  className="profile-image"
/>
              </div>

              {/* FLOATING SKILLS */}
              <div className="floating-skill skill-1">
                <span>◈</span>
                System Analysis
              </div>

              <div className="floating-skill skill-2">
                <span>✦</span>
                UI / UX
              </div>

              <div className="floating-skill skill-3">
                <span>⌘</span>
                Web Development
              </div>

              <div className="floating-skill skill-4">
                <span>◌</span>
                Database
              </div>

              <div className="floating-skill skill-5">
                <span>↗</span>
                API
              </div>

              <div className="floating-skill skill-6">
                <span>◇</span>
                Supabase
              </div>

              {/* DECORATION */}
              <div className="orbit orbit-one"></div>
              <div className="orbit orbit-two"></div>

              <div className="tiny-dot dot-one"></div>
              <div className="tiny-dot dot-two"></div>
              <div className="tiny-dot dot-three"></div>

            </div>
          </div>

          {/* SMALL SKILL MARQUEE */}
          <div className="skill-marquee">
            <div className="marquee-track">
              {skills.map((skill, index) => (
                <span key={index}>
                  {skill}
                  <b>•</b>
                </span>
              ))}

              {skills.map((skill, index) => (
                <span key={`copy-${index}`}>
                  {skill}
                  <b>•</b>
                </span>
              ))}
            </div>
          </div>
</section>

<About />

<Experience />

      <Projects />

      <Skills />

        <Contact />
      </main>
    </>
  );
}