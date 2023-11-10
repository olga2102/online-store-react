import styles from "./button-see-more.module.css";

function ButtonSeeMore({downloadMore}) {
    return (
        <button className={styles.button} onClick={downloadMore}>See more</button>
    )
}

export default ButtonSeeMore;
