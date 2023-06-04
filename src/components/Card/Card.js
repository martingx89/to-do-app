import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { toggleCardFavorite } from '../../redux/store';

const Card = (props) => {
  const dispatch = useDispatch();

  const cardId = props.cardId;

  const toggle = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite(cardId));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <button onClick={toggle}>
        <span className={clsx('fa fa-star-o', props.isFavourite && styles.isFavourite)} />
      </button>
    </li>
  );
};

export default Card;
