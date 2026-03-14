import { useState, useEffect } from 'react'
import './App.css'

// Hardcoded Data
const PORTFOLIO_DATA = {
  personal: {
    name: "Yuan Jasper Rodriguez",
    role: "Full-Stack Developer & IT Student",
    tagline: "Building digital experiences that matter.",
    description: "I am a BSIT-32E3 student currently learning and building modern web applications. I specialize in React, Node.js, and crafting beautiful, responsive user interfaces.",
    email: "yuanjasper@example.com",
    github: "https://github.com/yuanjasper",
    linkedin: "https://linkedin.com/in/yuanjasper"
  },
  skills: [
    { category: "Frontend", items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "SQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "GitHub", "Vite", "Figma", "VS Code"] }
  ],
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with a responsive UI, cart functionality, and secure payment processing.",
      category: "Full-Stack",
      tech: ["React", "Express", "Node.js", "MongoDB"],
      link: "#",
      github: "#",
      image: "🛍️" // Placeholder for an actual image
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app featuring drag-and-drop task organization, dark mode, and real-time syncing.",
      category: "Frontend",
      tech: ["React", "Tailwind CSS", "Firebase"],
      link: "#",
      github: "#",
      image: "📋"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A sleek weather dashboard providing 7-day forecasts using a public API. Features geolocation.",
      category: "Frontend",
      tech: ["JavaScript", "HTML/CSS", "Weather API"],
      link: "#",
      github: "#",
      image: "⛅"
    },
    {
      id: 4,
      title: "Student Management API",
      description: "A RESTful API built to handle student records, enrollment, and grading securely.",
      category: "Backend",
      tech: ["Node.js", "Express", "PostgreSQL"],
      link: "#",
      github: "#",
      image: "⚙️"
    }
  ]
};

function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(PORTFOLIO_DATA.projects);
  const [scrolled, setScrolled] = useState(false);

  // Dynamic Filtering Logic
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(PORTFOLIO_DATA.projects);
    } else {
      setFilteredProjects(PORTFOLIO_DATA.projects.filter(p => p.category === activeFilter));
    }
  }, [activeFilter]);

  // Navbar Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = ['All', ...new Set(PORTFOLIO_DATA.projects.map(p => p.category))];

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className={`navbar animate-fade-in ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo gradient-text">YJR.</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main>
        <section id="about" className="hero animate-fade-in delay-1">
          <p className="greeting">Hi, my name is</p>
          <h1>{PORTFOLIO_DATA.personal.name}</h1>
          <h2 className="gradient-text">{PORTFOLIO_DATA.personal.role}</h2>
          <p className="desc">{PORTFOLIO_DATA.personal.tagline} {PORTFOLIO_DATA.personal.description}</p>
          <div className="cta-group">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="animate-fade-in delay-2" style={{ paddingTop: '4rem', marginTop: '-4rem' }}>
          <h3 className="section-title">Technical Expertise</h3>
          <div className="skills-grid">
            {PORTFOLIO_DATA.skills.map((skillGroup, idx) => (
              <div key={idx} className="skill-card glass-panel">
                <h3>{skillGroup.category}</h3>
                <ul className="skill-list">
                  {skillGroup.items.map((item, i) => (
                    <li key={i} className="skill-tag">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Gallery Section */}
        <section id="projects" className="animate-fade-in delay-3" style={{ paddingTop: '6rem', marginTop: '-4rem', paddingBottom: '2rem' }}>
          <h3 className="section-title">Featured Projects</h3>

          {/* Filter Controls */}
          <div className="filter-tabs">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Dynamic Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card glass-panel">
                <div className="project-image" style={{ fontSize: '4rem' }}>
                  {project.image}
                </div>
                <div className="project-content">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((t, i) => <span key={i}>{t}</span>)}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                    <a href={project.link} target="_blank" rel="noreferrer">Live Demo</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section animate-fade-in delay-4 glass-panel" style={{ marginTop: '4rem' }}>
          <h2>Get In Touch</h2>
          <p>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
          <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="btn btn-primary">Say Hello</a>
        </section>
      </main>

      <footer className="footer animate-fade-in delay-4">
        <p>Built with React & Vite by {PORTFOLIO_DATA.personal.name}</p>
        <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
      </footer>
    </div>
  )
}

export default App
