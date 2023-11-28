import { Link } from "react-router-dom";

function Main() {
    return (
        <>
            <h1>MAIN page</h1>
            <p>You need <Link to="/login">LogIn</Link> to see the Catalog and choose items</p>
            <p>To enter you need use Login: admin and Password: qwerty12345</p>
        </>
    )
}

export default Main;