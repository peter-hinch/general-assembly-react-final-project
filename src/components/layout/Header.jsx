import { NavLink } from 'react-router-dom';
import PlaceSearch from './PlaceSearch';

const Header = ({ currentPlace, handleCurrentPlace }) => {
  return (
    <header>
      <div className="container">
        <nav>
          <ul className="nav-links">
            <li className="nav-home">
              <NavLink to="/">
                <h1>RemoteSpot</h1>
              </NavLink>
            </li>
            <li className="nav-search">
              <PlaceSearch
                currentPlace={currentPlace}
                handleCurrentPlace={handleCurrentPlace}
              />
            </li>
            <li className="nav-link">
              <NavLink to="/map">Map</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
