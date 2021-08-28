import React, { useHistory, useState } from "react";
import User from './User';
import './Login.css';

export default function Login() {



    const [dataLogin, setdataLogin] = useState({username:"", password:""})

    const handleChange = (event) => {
        // console.log(event);
        // setdataLogin(event.target.value);

        setdataLogin({
            ...dataLogin,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        alert('Username: ' + dataLogin.username + ' Password:' + dataLogin.password)
        }
      







    console.log(dataLogin);

        return (
            <div className="login">
                <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="form-group">
                    <input type="username" className="form-control" placeholder="Username" 
                    value={dataLogin.username} onChange={handleChange}
                    name="username"
                     ></input>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" 
                    value={dataLogin.password} name="password" onChange={handleChange}
                ></input>
                </div>
                <div>
                    <button type="submit" className="submit">Submit</button>
                </div>
                </form>
            </div>
        );
    }