import React from "react";
import {Link, useHistory} from 'react-router-dom';
import './Signup.css';

function SignUp() {

    // const [fields, handleFieldsChange] = useFormFields({Name:"", Username:"", Email:"", Password:""})
    // const history = useHistory();


        return (
            <div className="signup-form">
                <h3>Sign Up Form</h3>

               <div className="form-group">
               <label>Name:</label>
               <input type="text" className="form-control" placeholder="Nama" />
           </div>

           <div className="form-group">
               <label>Username:</label>
               <input type="text" className="form-control" placeholder="Username" />
           </div>

           <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control" placeholder="Email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="sign-up">Sign Up</button>
                <p className="forgot-password">
                    Sudah daftar <Link to="/login">Log in?</Link>
                </p>
           </div>
        );
    
}

export default SignUp;