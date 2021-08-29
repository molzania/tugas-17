import React, { useState } from "react";
import {Link, useHistory} from 'react-router-dom';
import './Signup.css';

function SignUp() {

    const [fields, setFields] = useState({FullName:"", Username:"", Email:"", Password:""})
    const handleChangeSignup = (event) => {
         
        setFields({
            ...fields,
            [event.target.name]: event.target.value,
            BirthDate: event.target.value
        }
        )
    }
    const history = useHistory(); 


        return (
            <div className="register">
                <div className="signup-form">
                <h3>Sign Up Form</h3>

               <div className="form-register">
               <label>Full Name:</label>
               <input type="text" className="form-control" placeholder="Full-Name" name="FullName" value={fields.FullName} onChange={handleChangeSignup}/>
           </div>

           <div className="form-register">
               <label>Username:</label>
               <input type="text" className="form-control" placeholder="Username" name="username" value={fields.Username} onChange={handleChangeSignup}/>
           </div>

           <div className="form-register">
                    <label>Email:</label>
                    <input type="email" className="form-control" placeholder="Email" name="email" value={fields.Email} onChange={handleChangeSignup}/>
                </div>

                <div className="form-register">
                    <label>Password:</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password"value={fields.Password} onChange={handleChangeSignup} />
                </div>

                <button type="submit" className="sign-up">Sign Up</button>
                <p className="forgot-password">
                    Sudah daftar <Link to="/login">Log in?</Link>
                </p>
                </div>
           </div>
        );
    
}

export default SignUp;