import styles from './page.module.css'

export default function about() {
    return (
        <div>
            <h1>about</h1>
            <button className={styles.btn_tomato}>1</button>
            <button className={styles.btn_tomato}>2</button>
            <button className={styles.btn_tomato}>3</button>
            <button className={styles.btn_tomato}>4</button>
            <button className={styles.btn_tomato}>5</button>
        </div>
    );
}