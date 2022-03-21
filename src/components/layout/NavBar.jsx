import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <header>
      <div className="container">
        <nav>
          <ul className="nav-links">
            <li className="nav-link">
              <NavLink to="/">
                <h1>RemoteSpot</h1>
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/map">Map</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
