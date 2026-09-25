export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-bg">

<div className="about-cloud cloud-one"></div>
<div className="about-cloud cloud-two"></div>
<div className="about-cloud cloud-three"></div>

        <span className="about-bg-line line-one"></span>
        <span className="about-bg-line line-two"></span>
        <span className="about-bg-dot dot-one"></span>
        <span className="about-bg-dot dot-two"></span>
      </div>

      <div className="about-container">

        <div className="about-left">
          <p className="about-label">ABOUT / 01</p>

          <h2>
            A little about
            <br />
            <span>who I am.</span>
          </h2>

          <p className="about-description">
            I’m Grisa Putri, an Information Systems student who enjoys
            understanding how systems work and turning ideas into
            structured digital experiences.
          </p>

          <p className="about-description second">
            I’m interested in web development, system analysis, and
            UI/UX design, while continuously exploring how technology
            can create useful and meaningful solutions.
          </p>

          <a href="#contact" className="about-connect">
            LET’S CONNECT
            <span>↗</span>
          </a>
        </div>

        <div className="about-right">

          <div className="about-profile-card">

            <div className="about-card-header">
              <span>PROFILE</span>
              <span>01 — 04</span>
            </div>

            <div className="about-card-name">
              <h3>Grisa Putri</h3>
              <p>Information Systems Student</p>
            </div>

            <div className="about-card-divider"></div>

            <div className="about-detail">
              <span>EDUCATION</span>
              <div>
                <strong>Institut Pendidikan Indonesia</strong>
                <small>Garut · Information Systems</small>
              </div>
            </div>

            <div className="about-detail-row">

              <div className="about-detail">
                <span>GPA</span>
                <div>
                  <strong>3.70 / 4.00</strong>
                  <small>Current GPA</small>
                </div>
              </div>

              <div className="about-detail">
                <span>BASED IN</span>
                <div>
                  <strong>Garut</strong>
                  <small>West Java, Indonesia</small>
                </div>
              </div>

            </div>

            <div className="about-card-footer">
              <span>INFORMATION SYSTEMS</span>
              <span>● AVAILABLE TO CONNECT</span>
            </div>

          </div>

          <div className="about-interests">

            <div className="interest-title">
              <span>AREAS OF INTEREST</span>
              <span>03</span>
            </div>

            <div className="interest-list">
              <div>
                <span>01</span>
                <strong>Web Development</strong>
                <b>↗</b>
              </div>

              <div>
                <span>02</span>
                <strong>System Analysis</strong>
                <b>↗</b>
              </div>

              <div>
                <span>03</span>
                <strong>UI / UX Design</strong>
                <b>↗</b>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}