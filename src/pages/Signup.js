import React, { useState } from "react";
import {Link, useHistory} from 'react-router-dom';
import './Signup.css';

function SignUp() {

    const [fields, setFields] = useState({fullname:"", username:"", email:"", password:""})
    const handleChangeSignup = (event) => {
         
        setFields({
            ...fields,
            [event.target.name]: event.target.value,
        }
        )
    }
    const history = useHistory(); 
    const handleSubmitSignup = (event) => {
        event.preventDefault();
        console.log(fields);
        alert(`Your Data is \n Full Name: ${fields.fullname} \n Username: ${fields.username} \n Email: ${fields.email}` )
        history.push("/login");
    }

    function validateFormSignup(){
        return (fields.FullName.length > 0 && fields.Username.length > 0
            && fields.Email.length > 0 && fields.Password.length > 0 )
    }



        return (
            <div className="register">
                <div className="signup-form">
                <h3>Sign Up Form</h3>

               <div className="form-register">
               <label>Full Name:</label>
               <input type="text" className="form-control" placeholder="Full-Name" name="fullname" value={fields.fullname} onChange={handleChangeSignup}/>
           </div>


           <div className="form-register">
               <label>Username:</label>
               <input type="text" className="form-control" placeholder="Username" name="username" value={fields.username} onChange={handleChangeSignup}/>
           </div>

           <div className="form-register">
                    <label>Email:</label>
                    <input type="email" className="form-control" placeholder="Email" name="email" value={fields.email} onChange={handleChangeSignup}/>
                </div>

                <div className="form-register">
                    <label>Password:</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" value={fields.password} onChange={handleChangeSignup} />
                </div>

                <button type="submit" className="sign-up" onClick={handleSubmitSignup} disabled={!validateFormSignup}>Sign Up</button>
                <p className="forgot-password">
                    Sudah daftar <Link to="/login">Log in?</Link>
                </p>
                </div>
           </div>
        );
    
}

export default SignUp;