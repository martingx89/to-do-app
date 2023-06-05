import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';

const ListForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.listForm}>
      <span>Title:</span>
      <TextInput type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
      <span>description:</span>
      <TextInput type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
      <Button>Add list</Button>
    </form>
  );
};

export default ListForm;
