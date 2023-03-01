import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/shopping' className={({ isActive }) => (isActive ? 'nav-active' : '')}>
            Shopping
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' className={({ isActive }) => (isActive ? 'nav-active' : '')}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' className={({ isActive }) => (isActive ? 'nav-active' : '')}>
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
