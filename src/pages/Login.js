import React, { useState } from "react";
import User from './User';
import './Login.css';

export default function Login() {


        return (
            <div className="login">
                <form>
                <h1>Login</h1>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email"></input>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password"></input>
                </div>
                <div>
                    <button type="submit" className="submit" >Submit</button>
                </div>
                </form>
            </div>
        );
    }