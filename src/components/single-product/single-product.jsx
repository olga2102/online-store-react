import { useDispatch } from "react-redux";

import { addToBasket } from "../../store/productSlice";
import { addNotification } from "../../store/notificationSlice";
import Notification from "../notifications/notifications";
import styles from "./single-product.module.css";


function SingleProduct({product}) {


    const dispatch = useDispatch();
    
    function addProduct() {
        dispatch(addToBasket(product));

        dispatch(addNotification({
            id: Date.now(),
            text: 'Item added to basket'
        }))
    }

    return (
        <div className={styles.wrapper}>
            <h1>{product.title}</h1>
            <div className={styles.inner}><strong>Description:</strong> {product.description}</div>
            <div className={styles.inner}><strong>Price:</strong> {product.price} $</div>
            <div className={styles.inner}><strong>In stock:</strong> {product.left}</div>
            <button className={styles.button} onClick={addProduct}>Buy</button>
             <Notification />
        </div>
    )
}
export default SingleProduct;