export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#" className="logo">
          <span>GP.</span>
          <div>
            <strong>Grisa Putri</strong>
            <small>Information Systems</small>
          </div>
        </a>

        <nav>
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk ↗
        </a>
      </div>
    </header>
  );
}