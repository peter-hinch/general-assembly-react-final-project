import { NavLink } from 'react-router-dom';
import * as s from './Header.styles';
import PlaceSearch from '../PlaceSearch/PlaceSearch';

const Header = ({ currentPlace, handleCurrentPlace }) => {
  return (
    <s.StyledHeader>
      <div className="container">
        <nav>
          <s.StyledNavLinksUl>
            <li className="nav-home">
              <s.StyledNavNavLink to="/">
                <h1>RemoteSpot</h1>
              </s.StyledNavNavLink>
            </li>
            <li className="nav-search">
              <PlaceSearch
                currentPlace={currentPlace}
                handleCurrentPlace={handleCurrentPlace}
              />
            </li>
            <li className="nav-link">
              <s.StyledNavNavLink to="/map">Map</s.StyledNavNavLink>
            </li>
          </s.StyledNavLinksUl>
        </nav>
      </div>
    </s.StyledHeader>
  );
};

export default Header;
