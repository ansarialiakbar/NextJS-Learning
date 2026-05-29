import styles from "./Card.module.css"

export default function CardPage(){
    return(
        <div className={styles.card}>
            <h1 className={styles.cardTitle}>Card Page</h1>
            <p>This is a simple card component styled with CSS Modules.</p>
        </div>
    )
}