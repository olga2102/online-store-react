import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import styles from "./product-in-basket.module.css";
import trash from "../../assets/img/trash.svg";

import { removeProduct, changeCount, plusCount, minusCount } from "../../store/productSlice";

function ProductInBasket() {
    const productsInBasket = useSelector(state=>state.productsInBasket.productsInBasket);

    const dispatch = useDispatch();
    
    function deleteProduct(id) {
        dispatch(removeProduct(id))
    }

    function setValueCount(id, value) {
        dispatch(changeCount({id: id, value: value}))
    }

    function writeTotal(count, price) {
        if (count) {
            return count * price;
        }
        return price;
    }
    

    if(!productsInBasket.length) {
        return <p>No products in basket</p>
    }

    return (
        <div className={styles.wrapper}>

            <div className={styles.header}>
                <p className={styles.name}>Name</p>
                <p className={styles.pieces}>Quantity</p>
                <p className={styles.column}>Price</p>
                <p className={styles.column}>Total</p>
                <div className={styles.empty}></div>
            </div>
            
            <ul className={styles.list}>
            {
                productsInBasket.map(product=>{
                    return <li className={styles.item} key={product.id}> 
                                <p className={styles.title}>{product.title}</p> 
                                <div className={styles.quantity}>
                                    <button onClick={()=>dispatch(minusCount(product.id))}>-</button>
                                    <input 
                                        onKeyPress={(event) => {
                                            if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                            }
                                        }}
                                        value={product.count} 
                                        onChange={(e)=>setValueCount(product.id, e.target.value)}
                                    />
                                    <button onClick={()=>dispatch(plusCount(product.id))}>+</button>
                                </div>
                                <p className={styles.price}>{product.price} $</p>
                                <p className={styles.total}>{writeTotal(product.count, product.price)}</p>
                                <button className={styles.trash} onClick={()=>deleteProduct(product.id)}><img className={styles.logo} src={trash} width="30px" alt="basket" /></button>
                            </li>
                })
            }
            </ul>
            <div className={styles.pay}>To pay: 
                <span>
                {productsInBasket.reduce((sum, current)=> sum + writeTotal(current.count, current.price), 0)}
                $</span>
            </div>
        </div>
    )
}

export default ProductInBasket;