import React, {useState} from 'react'; 
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

const LoginCmp = (props) => {
    
    const [email, emailSetter] = useState("");
    const [password, passwordSetter] = useState("");
    const [errorMessage, errorMessageSetter] = useState("");
    const navigate = useNavigate();

    const login = (e) => {

        e.preventDefault(); 
        axios  
            .post(
                "http://localhost:8000/api/users/login", 
                {
                email: email, 
                password: password
                }, 
                {withCredentials: true}
            )
            .then( (res) => {
                console.log(res, "res"); 
                console.log(res.data, "is res data!"); 
                navigate("/home");
            })
            .catch( (err) => {
                console.log(err.response.data); 
                errorMessageSetter(err.response.data.message)
            }); 

    }

    return (
        <div>
            <h1>Login</h1>
            <p className="error-text"> {errorMessage ? errorMessage : ""} </p>
            <form onSubmit={login}>
                <div>
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange = {(e) => emailSetter(e.target.value)}
                    />
                </div>

                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange = {(e) => passwordSetter(e.target.value)}
                    />
                </div>

                <div className="center"> 
                    <button>Login!</button>
                </div>

            </form>
        </div>
    )
}; 

export default LoginCmp; 