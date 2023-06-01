import Container from '../Container/Container';
import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.container}>
          <div className={styles.icon}>
            <Link to='/'>
              <i className='fa fa-tasks'></i>
            </Link>
          </div>
          <div className={styles.menu}>
            <ul>
              <li>
                <NavLink className={({ isActive }) => (isActive ? styles.linkActive : undefined)} to='/'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => (isActive ? styles.linkActive : undefined)} to='/favorite'>
                  Favorite
                </NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => (isActive ? styles.linkActive : undefined)} to='/about'>
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
