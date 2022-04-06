import { NavLink } from 'react-router-dom';
import * as s from './Footer.styles';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="container">
      <nav>
        <ul className="footer-links">
          <li className="footer-link">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="footer-link">
            <NavLink to="/map">Map</NavLink>
          </li>
          <li className="footer-link">
            <NavLink to="/terms">Terms of Service</NavLink>
          </li>
          <li className="footer-link">
            <NavLink to="/privacy">Privacy Policy</NavLink>
          </li>
        </ul>
      </nav>
      <div className="copyright-info">
        <small>&copy;{year} Peter Hinch, All rights reserved.</small>
      </div>
      <div className="acknowledge-country">
        <div className="flag"></div>
        <small>
          We acknowledge the Traditional Custodians of the land on which
          RemoteSpot is based - The Wurundjeri people of the Kulin Nation, and
          pay our respects to elders past, present and emerging.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
