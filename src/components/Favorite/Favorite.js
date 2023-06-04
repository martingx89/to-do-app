import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';
import { useSelector } from 'react-redux';
import { getFliteredFavoriteCards } from '../../redux/store';

export const Favorite = () => {
  const favCards = useSelector(getFliteredFavoriteCards);
  console.log(favCards);

  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <p className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, facilis!</p>
    </div>
  );
};

export default Favorite;
