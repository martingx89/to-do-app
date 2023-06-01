import Container from '../Container/Container';
import styles from './NavBar.module.scss';
const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.container}>
          <div className={styles.icon}>
            <a href='/'>
              <i className='fa fa-tasks'></i>
            </a>
          </div>
          <div className={styles.menu}>
            <ul>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/favorite'>Favorite</a>
              </li>
              <li>
                <a href='/about'>About</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
