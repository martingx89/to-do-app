import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';

const Card = (props) => {
  const dispatch = useDispatch();

  const cardId = props.cardId;

  const toggle = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite(cardId));
  };

  const remove = (e) => {
    e.preventDefault();
    dispatch(removeCard(cardId));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <button onClick={toggle}>
        <span className={clsx('fa fa-star-o', props.isFavorite && styles.isFavorite)}></span>
      </button>
      <button onClick={remove}>rem</button>
    </li>
  );
};

export default Card;
