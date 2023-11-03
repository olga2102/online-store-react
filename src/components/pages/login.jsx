import { useState } from "react";
import axios from "axios";

function Login() {

    const [valueName, setValueName] = useState('');
    const [valuePassword, setValuePassword] = useState('');
    const [error, setError] = useState(false);

    function changeValueName(e) {
        setValueName(e.target.value);
        if(error) setError(false);
    }

    function changeValuePassword(e) {
        setValuePassword(e.target.value);
        if(error) setError(false);
    }

    function sendData(e) {
        e.preventDefault();
        
        if (error) return;

        axios.post('http://localhost:3000/api/auth', {
            nickname: valueName,
            password: valuePassword
          }, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(function (response) {
            console.log(response);
            if(response.data.token) {
                localStorage.setItem('token', response.data.token);
            } else {
                setError(true);
            }
          })
          .catch(function (error) {
            console.log(error);
            setError(true)
          });
    }

    return (

        <>
            <h1>LogIn</h1>
            <form onSubmit={sendData}>
                <input type="text" placeholder="Your name" value={valueName} onChange={changeValueName}/>
                <input type="text" placeholder="Your password" value={valuePassword} onChange={changeValuePassword}/>
                <button type="submit">LogIn</button>
            </form>
            {error ? <div>Login or password is incorrect</div> : ''}
        </>
    )
}

export default Login;