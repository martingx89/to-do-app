import styles from './TextInput.module.scss';

const TextInput = () => {
    return <input className={styles.input} placeholder="Search..." type="text" />
};

export default TextInput;