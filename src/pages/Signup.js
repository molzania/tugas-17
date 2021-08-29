import React from "react";
import {Link, useHistory} from 'react-router-dom';
import './Signup.css';

function SignUp() {

    /* const [fields, handleFieldsChange] = useFormFields({Name:"", Username:"", Email:"", Password:""})
    const history = useHistory(); */


        return (
            <div className="register">
                <div className="signup-form">
                <h3>Sign Up Form</h3>

               <div className="form-register">
               <label>Full Name:</label>
               <input type="text" className="form-control" placeholder="Full-Name" />
           </div>

           <div className="form-register">
               <label>Gender</label>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
      </div>

           <div className="form-register">
               <label>Username:</label>
               <input type="text" className="form-control" placeholder="Username" name="user-name" />
           </div>

           <div className="form-register">
                    <label>Email:</label>
                    <input type="email" className="form-control" placeholder="Email" name="email-address"/>
                </div>

                <div className="form-register">
                    <label>Password:</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password-account" />
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