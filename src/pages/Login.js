import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
import './Login.css';

export default function Login() {
    const history = useHistory();

    const [User, setUser] = useState({email:"Molzania@gmail.com", password:"AkuSedangPusing"
    })

    const [dataLogin, setdataLogin] = useState({email:"", password:""})

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
                <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" 
                    value={dataLogin.email} onChange={handleChange}
                    name="email"
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