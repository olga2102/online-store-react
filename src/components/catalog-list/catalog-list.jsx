import { Link } from "react-router-dom";

import styles from "./catalog-list.module.css";

function CatalogList({catalog}) {

    return (
        <ul className={styles.list}>
        {
            catalog.map(item=> {
                return <li className={styles.item} key={item.id}>
                            <Link to={`/catalog/${item.id}`}>
                                {item.title}
                                </Link>
                        </li>
            })
        }
    </ul>
    )
}

export default CatalogList;