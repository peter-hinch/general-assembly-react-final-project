import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <header>
      <nav>
        <ul className="nav-links">
          <li className="nav-link">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/mapview">Venues Map</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/firestore">Firestore Example</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
