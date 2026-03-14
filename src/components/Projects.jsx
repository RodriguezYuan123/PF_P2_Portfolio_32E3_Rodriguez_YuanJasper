import { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(PORTFOLIO_DATA.projects);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(PORTFOLIO_DATA.projects);
    } else {
      setFilteredProjects(PORTFOLIO_DATA.projects.filter(p => p.category === activeFilter));
    }
  }, [activeFilter]);

  const categories = ['All', ...new Set(PORTFOLIO_DATA.projects.map(p => p.category))];

  return (
    <section id="projects" className="animate-fade-in delay-3" style={{ paddingTop: '6rem', marginTop: '-4rem', paddingBottom: '2rem' }}>
      <h3 className="section-title">Featured Projects</h3>

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
  );
}

export default Projects;
