import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import styles from './Favorite.module.scss';
import { useSelector } from 'react-redux';
import { getFliteredFavoriteCards } from '../../redux/cardsRedux';

export const Favorite = () => {
  const favCards = useSelector(getFliteredFavoriteCards);
  console.log(favCards);

  if (favCards.length !== 0) {
    return (
      <div className={styles.favorite}>
        <PageTitle>Favorite</PageTitle>
        <ul className={styles.cards}>
          {favCards.map((card) => (
            <Card key={card.id} {...card} isFavorite={card.isFavorite} />
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <p className={styles.favorite_subtitle}>No Cards</p>
    </div>
  );
};

export default Favorite;
