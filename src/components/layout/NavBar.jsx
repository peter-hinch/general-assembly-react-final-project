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
              <NavLink to="/mapview">Venues Map</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/firestore">Firestore Example</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
