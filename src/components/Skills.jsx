import { PORTFOLIO_DATA } from '../data';

function Skills() {
  return (
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
  );
}

export default Skills;
