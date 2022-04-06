import { NavLink } from 'react-router-dom';
import * as s from './Footer.styles';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <s.StyledFooter className="container">
      <s.StyledNav>
        <s.StyledUl>
          <li className="footer-link">
            <s.StyledNavLink to="/">Home</s.StyledNavLink>
          </li>
          <li className="footer-link">
            <s.StyledNavLink to="/map">Map</s.StyledNavLink>
          </li>
          <li className="footer-link">
            <s.StyledNavLink to="/terms">Terms of Service</s.StyledNavLink>
          </li>
          <li className="footer-link">
            <s.StyledNavLink to="/privacy">Privacy Policy</s.StyledNavLink>
          </li>
        </s.StyledUl>
      </s.StyledNav>
      <s.StyledCopyrightInfo>
        <small>&copy;{year} Peter Hinch, All rights reserved.</small>
      </s.StyledCopyrightInfo>
      <s.StyledAcknowledgeCountry>
        <s.StyledAboriginalFlag></s.StyledAboriginalFlag>
        <small>
          We acknowledge the Traditional Custodians of the land on which
          RemoteSpot is based - The Wurundjeri people of the Kulin Nation, and
          pay our respects to elders past, present and emerging.
        </small>
      </s.StyledAcknowledgeCountry>
    </s.StyledFooter>
  );
};

export default Footer;
