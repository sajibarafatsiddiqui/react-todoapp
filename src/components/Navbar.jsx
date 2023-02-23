import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navlinks = [
    { path: '/', text: 'home' },
    { path: '/about', text: 'about' },
    { path: '/login', text: 'login' },
    { path: '/profile', text: 'profile' },
  ];
  return (
    <ul>
      {navlinks.map((navlink) => (
        <li key={navlink.text} className="item">
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            to={navlink.path}
          >
            {navlink.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
