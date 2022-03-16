import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/mapview">Venues Map</NavLink>
      <NavLink to="/firestore">Firestore Example</NavLink>
    </div>
  );
}

export default NavBar;
