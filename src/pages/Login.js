import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
import './Login.css';

export default function Login() {
    const history = useHistory();

    const [User] = useState({email:"Molzania@gmail.com", password:"Bismillah"
    })

    const [dataLogin, setdataLogin] = useState({email:"", password:""})

    const handleChangeLogin = (event) => {
        // console.log(event);
        // setdataLogin(event.target.value);

        setdataLogin({
            ...dataLogin,
            [event.target.name]: event.target.value
        })
    }

    function validateFormLogin(){
        return (dataLogin.password.length > 0 && dataLogin.email.length > 0)
    }

    function handleSubmitLogin(event) {
        event.preventDefault();
        
        alert('Username: ' + dataLogin.email + ' Password:' + dataLogin.password)
        if(dataLogin.email === User.email){
            if(dataLogin.password === User.password){
                history.push("/User");
            } 
        }
        }
      
    console.log(dataLogin);

        return (
            <div className="login">
                <form onSubmit={handleSubmitLogin}>
                <h1>Login</h1>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" 
                    value={dataLogin.email} onChange={handleChangeLogin}
                    name="email"
                     ></input>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" 
                    value={dataLogin.password} name="password" onChange={handleChangeLogin}
                ></input>
                </div>
                <div>
                    <button type="submit" className="submit" disabled={!validateFormLogin()}>Submit</button>
                </div>
                </form>
            </div>
        );
    }