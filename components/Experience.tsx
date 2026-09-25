export default function Experience() {
  return (
   <section id="experience" className="scroll-mt-24">

  {/* ANIMATED MILESTONE BACKGROUND */}
  <div className="milestone-bg">

    <svg
      className="milestone-path"
      viewBox="0 0 1200 700"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M -50 570
           C 180 470, 220 650, 420 530
           C 600 420, 590 180, 780 250
           C 940 310, 950 500, 1250 170"
      />
    </svg>

    <div className="milestone-point point-one">
      <span></span>
    </div>

    <div className="milestone-point point-two">
      <span></span>
    </div>

    <div className="milestone-point point-three">
      <span></span>
    </div>

    <div className="milestone-point point-four">
      <span></span>
    </div>

    <span className="milestone-year year-one">2024</span>
    <span className="milestone-year year-two">2025</span>
    <span className="milestone-year year-three">2025</span>
    <span className="milestone-year year-four">2026</span>

    <span className="milestone-mini-label label-one">
      START
    </span>

    <span className="milestone-mini-label label-two">
      GROW
    </span>

    <span className="milestone-mini-label label-three">
      EXPLORE
    </span>

    <span className="milestone-mini-label label-four">
      NOW
    </span>

  </div>


  <div className="experience-container">

        {/* HEADER */}
        <div className="experience-header">
          <div>
            <p className="experience-label">EXPERIENCE / 02</p>

            <h2>
              Where I’ve worked,
              <br />
              <span>learned & grown.</span>
            </h2>
          </div>

          <p className="experience-intro">
            A collection of experiences that shaped my skills,
            perspective, and way of working.
          </p>
        </div>


        {/* TIMELINE */}
        <div className="experience-timeline">

          {/* DISDUKCAPIL */}
          <div className="experience-item featured">
            <div className="experience-year">
              <span>2026</span>
              <small>JUL — OCT</small>
            </div>

            <div className="experience-line">
              <span className="timeline-dot"></span>
            </div>

            <div className="experience-content">
              <div className="experience-top">
                <div>
                  <p className="experience-type">INTERNSHIP</p>

                  <h3>
                    Dinas Kependudukan dan
                    <br />
                    Pencatatan Sipil Garut
                  </h3>
                </div>

                <span className="experience-number">01</span>
              </div>

              <p className="experience-role">
                Web Development · Backend · System Analysis
              </p>

              <p className="experience-description">
                Contributing to the development of web-based systems,
                particularly in backend development, database management,
                and system analysis.
              </p>

              <div className="experience-tags">
                <span>Next.js</span>
                <span>Supabase</span>
                <span>Database</span>
                <span>API</span>
              </div>
            </div>
          </div>


          {/* MANTU MANTEN */}
          <div className="experience-item">
            <div className="experience-year">
              <span>2025</span>
              <small>PRESENT</small>
            </div>

            <div className="experience-line">
              <span className="timeline-dot"></span>
            </div>

            <div className="experience-content">
              <div className="experience-top">
                <div>
                  <p className="experience-type">WORK EXPERIENCE</p>

                  <h3>Mantu Manten</h3>
                </div>

                <span className="experience-number">02</span>
              </div>

              <p className="experience-role">
                Wedding Organizer · Event Team
              </p>

              <p className="experience-description">
                Involved in supporting wedding events, coordinating
                event needs, communicating with the team, and helping
                ensure events run smoothly.
              </p>

              <div className="experience-tags">
                <span>Teamwork</span>
                <span>Communication</span>
                <span>Coordination</span>
              </div>
            </div>
          </div>


          {/* PAKINDO FOOD */}
          <div className="experience-item">
            <div className="experience-year">
              <span>2024</span>
              <small>PRESENT</small>
            </div>

            <div className="experience-line">
              <span className="timeline-dot"></span>
            </div>

            <div className="experience-content">
              <div className="experience-top">
                <div>
                  <p className="experience-type">BUSINESS</p>

                  <h3>Pakindo Food</h3>
                </div>

                <span className="experience-number">03</span>
              </div>

              <p className="experience-role">
                Owner · Culinary Business
              </p>

              <p className="experience-description">
                Managing a culinary business including product planning,
                daily operations, customer needs, and business activities.
              </p>

              <div className="experience-tags">
                <span>Business</span>
                <span>Operations</span>
                <span>Problem Solving</span>
              </div>
            </div>
          </div>

        </div>


        {/* ACHIEVEMENT */}
        <div className="achievement-block">

          <div className="achievement-heading">
            <p>ACHIEVEMENT</p>
            <span>✦</span>
          </div>

          <div className="achievement-content">

            <div className="achievement-badge">
              <span>KM</span>
              <small>BATCH 04</small>
            </div>

            <div className="achievement-info">
              <p>STUDENT EXCHANGE PROGRAM</p>

              <h3>Kampus Merdeka — Batch 4</h3>

              <span>
                Universitas Muhammadiyah Aceh
              </span>
            </div>

            <div className="achievement-year">
              <strong>2024</strong>
              <small>PROGRAM</small>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}