import { Link } from "react-router-dom";

import styles from "./header.module.css";
import basket from "../../assets/img/basket.svg";
import { useSelector } from "react-redux";

function Header() {
    const auth = useSelector((state)=>state.auth.auth);
    return (
        <header>
            <div className="container">
                <div className={styles.wrapper}>
                    <Link to="/" className={styles.logo} href="#">LOGO</Link>
                    <nav>
                        <ul className={styles.nav}>
                            <li>
                                <Link className={styles.link} to="/catalog">Catalog</Link>
                            </li>
                            {auth ? 
                             <li>
                                <Link className={styles.link} to="/logout">LogOut</Link>
                            </li> :
                            <li>
                                <Link className={styles.link} to="/login">LogIn</Link>
                            </li>
}
                            <li>
                                <Link className={styles.basket} to="/basket"><img className={styles.logo} src={basket} width="30px" alt="basket"></img></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;