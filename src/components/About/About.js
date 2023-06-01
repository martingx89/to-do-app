import PageTitle from '../PageTitle/PageTitle';
import styles from './About.module.scss';

export const About = () => {
  return (
    <div>
      <PageTitle>About</PageTitle>
      <p className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, enim.</p>
    </div>
  );
};
