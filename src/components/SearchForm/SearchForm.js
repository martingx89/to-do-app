import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearchString } from '../../redux/searchStringRedux';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [string, setString] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(string));
  };
  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput placeholder='Search...' value={string} onChange={(e) => setString(e.target.value)} />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;
