import { NavLink, Outlet } from 'react-router-dom';

const About = () => (
  <div className="about">
    <ul className="about_list">
      <li key="about-app">
        <NavLink to="about-app">About App</NavLink>
      </li>
      <li key="about-developer">
        <NavLink to="about-developer"> About Developer</NavLink>
      </li>
    </ul>
    <Outlet />
  </div>
);
export default About;
