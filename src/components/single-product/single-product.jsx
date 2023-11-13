import { useDispatch } from "react-redux";


import { addToBasket } from "../../store/productSlice";
import styles from "./single-product.module.css";

function SingleProduct({product}) {

    const dispatch = useDispatch();
    
    function addProduct() {
        dispatch(addToBasket(product))
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <div className={styles.wrapper}><strong>Description:</strong> {product.description}</div>
            <div className={styles.wrapper}><strong>Price:</strong> {product.price} $</div>
            <div className={styles.wrapper}><strong>In stock:</strong> {product.left}</div>
            <button className={styles.button} onClick={addProduct}>Buy</button>
        </div>
    )
}
export default SingleProduct;