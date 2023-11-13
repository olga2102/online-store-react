import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import styles from "./product-in-basket.module.css";
import trash from "../../assets/img/trash.svg";

import { removeProduct } from "../../store/productSlice";

function ProductInBasket() {
    const productsInBasket = useSelector(state=>state.productsInBasket.productsInBasket);

    const dispatch = useDispatch();
    
    function deleteProduct(id) {
        dispatch(removeProduct(id))
    }
    

    if(!productsInBasket.length) {
        return <p>No products in basket</p>
    }

    return (
        <>

            <div className={styles.header}>
                <p className={styles.name}>Name</p>
                <p className={styles.column}>Quantity</p>
                <p className={styles.column}>Price</p>
                <p className={styles.column}>Total</p>
                <div className={styles.empty}></div>
            </div>
            
            <ul className={styles.list}>
            {
                productsInBasket.map(product=>{
                    return <li className={styles.item} key={product.id}> 
                                <p className={styles.title}>{product.title}</p> 
                                <p className={styles.quantity}>{product.count}</p>
                                <p className={styles.price}>{product.price} $</p>
                                <p className={styles.total}>{product.count * product.price}</p>
                                <button className={styles.trash} onClick={()=>deleteProduct(product.id)}><img className={styles.logo} src={trash} width="30px" alt="basket" /></button>
                            </li>
                })
            }
            </ul>
        </>
    )
}

export default ProductInBasket;