import React, { useState } from "react";
import {Link, useHistory} from 'react-router-dom';
import './Signup.css';

function SignUp() {

    const [fields, setFields] = useState({FullName:"", Username:"", Email:"", Password:""})
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
        alert(`Your Data is \n Full Name: ${fields.FullName} \n Username: ${fields.Username} \n Email: ${fields.Email}` )
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
               <input type="text" className="form-control" placeholder="Full-Name" name="FullName" value={fields.FullName} onChange={handleChangeSignup}/>
           </div>


           <div className="form-register">
               <label>Username:</label>
               <input type="text" className="form-control" placeholder="Username" name="Username" value={fields.Username} onChange={handleChangeSignup}/>
           </div>

           <div className="form-register">
                    <label>Email:</label>
                    <input type="email" className="form-control" placeholder="Email" name="Email" value={fields.Email} onChange={handleChangeSignup}/>
                </div>

                <div className="form-register">
                    <label>Password:</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="Password" value={fields.Password} onChange={handleChangeSignup} />
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