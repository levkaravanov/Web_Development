import styles from './Button.module.css';

function Button() {

const styles = {
    button: {
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
    }
}
    return (
        <button style={styles.button}>Click me</button>
    )
}

export default Button;