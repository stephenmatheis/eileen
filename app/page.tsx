import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Hi! 👋</h1>
            <p>I'm Eileen.</p>
        </div>
    );
}
