import { PORTFOLIO_DATA } from '../data';

function Hero() {
  return (
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
  );
}

export default Hero;
