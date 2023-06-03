import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';

const ColumnForm = ({ listId }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addColumn({ title, icon, listId }));
    console.log({ title, icon, listId });
    setTitle('');
    setIcon('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <span>Title:</span>
      <TextInput type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
      <span>Icon:</span>
      <TextInput type='text' value={icon} onChange={(e) => setIcon(e.target.value)} />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
