import React, {useState, useEffect} from 'react'; 
import axios from 'axios'; 

const RegisterCmp = (props) => {

    const [confirmReg, confirmRegSetter] = useState(""); 
    const [errorsList, errorsListSetter] = useState ([]); 

    // const [user, userSetter] = useState(
    //     {
    //         username: ""
    //         , email: ""
    //         , password: ""
    //         , confirmPassword: ""
    //     }
    // ); 

    //! below replaces above, trying to troubleshoot non-function

    const [username, usernameSetter] = useState("");
    const [email, emailSetter] = useState("");
    const [password, passwordSetter] = useState("");
    const [passwordConfirm, passwordConfirmSetter] = useState("");

    //! below moved out into form, troubleshooting
    // const handleChange = (e) => {
    //     userSetter({...user, [e.target.name]: e.target.value})
    // }; 

    const handleSubmit = (e) => {
        e.preventDefault(); 
        axios
            .post(
                "http://localhost:8000/api/users/register", 
                {
                username
                , email
                , password
                , passwordConfirm 
                } 
                , 
                {withCredentials: true }
            )
            .then( (res) => {
                console.log(res.data); 
                usernameSetter(""); 
                emailSetter("");
                passwordSetter("");
                passwordConfirmSetter("");
                errorsListSetter([]); 
                confirmRegSetter("Thank you for registering.  Please log in and let's party."); 
            })  
            .catch( (err) => {
                console.log(err.response); 
                errorsListSetter(err.response.data.errors); 
            })
    }; 

    return (
        <div>
            <h1>Register</h1>
            {confirmReg ? <h4 style={{color: "green" }}>{confirmReg}</h4>: null}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    {
                    errorsList.username ? (
                    <span className="error-text">{errorsList.username.message}</span>
                    ) : null
                    }
                    <input 
                        type="text"
                        name="username"
                        value={username}
                        onChange = {(e) => usernameSetter(e.target.value)}
                        />
                </div>
                
                <div>
                    <label>Email</label>
                    {
                    errorsList.email ? (
                    <span className='error-text'>{errorsList.email.message}</span>
                    ) : null
                    }
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange = {(e) => emailSetter(e.target.value)}
                    />
                </div>

                <div>
                    <label>Password</label>
                    {
                    errorsList.password ? (
                    <span className='error-text'>{errorsList.password.message}</span>
                    ) : null
                    }
                    <input
                        type="text"
                        name="password"
                        value={password}
                        onChange = {(e) => passwordSetter(e.target.value)}
                    />
                </div>
                
                <div>
                    <label>Confirm Password</label>
                    {
                    errorsList.passwordConfirm ? (
                    <span className='error-text'>{errorsList.passwordConfirm.message}</span>
                    ) : null
                    }
                    <input
                        type="text"
                        name="passwordConfirm"
                        value={passwordConfirm}
                        onChange = {(e) => passwordConfirmSetter(e.target.value)}
                    />
                </div>

                <div className="center"> 
                    <button>Register me!</button>
                </div>
            </form>
        </div>
    )

}; 

export default RegisterCmp; 