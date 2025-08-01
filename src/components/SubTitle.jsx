import styles from "../assets/style/pages/recipe.module.styl";

function Subtitle({title, color}) {
    return (
        <div className={styles.AppSubTitle}>
            <span className={`${styles.AppSubTitleSpan} bg-${color}`}></span>
            <h2 className="m-0">{title}</h2>
        </div>
    )
}

export default Subtitle
