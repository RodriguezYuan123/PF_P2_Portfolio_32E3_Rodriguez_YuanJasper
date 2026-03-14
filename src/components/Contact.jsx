import { PORTFOLIO_DATA } from '../data';

function Contact() {
  return (
    <section id="contact" className="contact-section animate-fade-in delay-4 glass-panel" style={{ marginTop: '4rem' }}>
      <h2>Get In Touch</h2>
      <p>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
      <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="btn btn-primary">Say Hello</a>
    </section>
  );
}

export default Contact;
