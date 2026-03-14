import { PORTFOLIO_DATA } from '../data';

function Footer() {
  return (
    <footer className="footer animate-fade-in delay-4">
      <p>Built with React & Vite by {PORTFOLIO_DATA.personal.name}</p>
      <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
