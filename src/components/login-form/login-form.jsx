import styles from "./login-form.module.css";

function LoginForm({sendData, valueName, changeValueName, valuePassword, changeValuePassword}) {
    
    return (
        <form className={styles.wrapper} onSubmit={(e)=>sendData(e)}>
            <input className={styles.input} type="text" placeholder="Your name" value={valueName} onChange={changeValueName}/>
            <input className={styles.input} type="text" placeholder="Your password" value={valuePassword} onChange={changeValuePassword}/>
            <button className={styles.button} type="submit">LogIn</button>
        </form>
    )
}

export default LoginForm;