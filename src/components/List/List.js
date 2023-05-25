import styles from './List.module.scss';
import Column from '../Column/Column';

const List = () => {
  return (
    <div className={styles.List}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Things to do<span>soon!</span>
        </h2>
      </header>
      <p className={styles.description}>Interesting things I want to check out</p>
      <section className={styles.columns}>
        <Column icon='book' title='Books' />
        <Column icon='film' title='Movies' />
        <Column icon='gamepad' title='Games' />
      </section>
    </div>
  );
};

export default List;
