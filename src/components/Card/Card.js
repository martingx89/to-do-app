import styles from './Card.module.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Card = ({ title, isFavorite }) => {
  const cards = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  console.log(cards);

  const handleStatus = (e) => {
    e.preventDefault();
    console.log('status');
    dispatch({ type: 'TOGGLE_CARD_FAVORITE', payload: isFavorite });
  };

  return (
    <li className={styles.card}>
      {title}
      <button type='button' onClick={handleStatus}>
        fav
      </button>
    </li>
  );
};

export default Card;
