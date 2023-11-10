import { useState } from "react";
import axios from "axios";

import LoginForm from "../login-form/login-form";

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
            <LoginForm sendData={sendData} valueName={valueName} changeValueName={changeValueName} valuePassword={valuePassword} changeValuePassword={changeValuePassword} />
            {error ? <div>Login or password is incorrect</div> : ''}
        </>
    )
}

export default Login;