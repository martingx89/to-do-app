import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { toggleCardFavorite } from '../../redux/store';

const Card = ({ title, isFavorite, id }) => {
  const dispatch = useDispatch();

  const toggle = () => {
    // e.preventDefault();
    dispatch(toggleCardFavorite(id, isFavorite));
  };

  return (
    <li className={styles.card}>
      {title}
      <button type='button' onClick={toggle}>
        fav
      </button>
    </li>
  );
};

export default Card;
