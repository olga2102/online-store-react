import { Link } from "react-router-dom";

import styles from "./header.module.css"

function Header() {
    return (
        <header>
            <div className="container">
                <div className={styles.wrapper}>
                    <a className={styles.logo} href="#">LOGO</a>
                    <nav>
                        <ul className={styles.nav}>
                            <li>
                                <Link to="catalog">Catalog</Link>
                            </li>
                            <li>
                                <Link to="login">LogIn</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;