import styles from "./single-product.module.css";

function SingleProduct({product}) {
    return (
        <div>
            <h1>{product.title}</h1>
            <div className={styles.wrapper}><strong>Description:</strong> {product.description}</div>
            <div className={styles.wrapper}><strong>Price:</strong> {product.price} $</div>
            <div className={styles.wrapper}><strong>In stock:</strong> {product.left}</div>
            <button className={styles.button}>Buy</button>
        </div>
    )
}
export default SingleProduct;