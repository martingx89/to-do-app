import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import styles from './Column.module.scss';
import { useSelector } from 'react-redux';

const Column = (props) => {
  const searchString = useSelector((state) => state.searchString);
  console.log(searchString);
  const cards = useSelector((state) =>
    state.cards.filter(
      (card) => card.columnId === props.id && card.title.toLowerCase().includes(searchString.toLowerCase())
    )
  );

  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon} />
        {props.title}
      </h2>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} title={card.title} />
        ))}
        <CardForm columnId={props.id} />
      </ul>
    </article>
  );
};

export default Column;
