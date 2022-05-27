import React, {useState} from 'react'; 
import axios from 'axios'; 
import {Container, Row, Card, Form} from 'react-bootstrap'; 

const RegisterCmp = (props) => {

    // const [user, userSetter] = useState(
    //     {
    //         userName: ""
    //         , email: ""
    //         , password: ""
    //         , confirmPassword: ""
    //     }
    // ); 

    //! below replaces above, trying to troubleshoot non-function

    const [userName, userNameSetter] = useState("");
    const [email, emailSetter] = useState("");
    const [password, passwordSetter] = useState("");
    const [passwordConfirm, passwordConfirmSetter] = useState("");

    const [confirmReg, confirmRegSetter] = useState(""); 
    const [errorList, errorListSetter] = useState ([]); 


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
                userName
                , email
                , password
                , passwordConfirm 
                } 
                , 
                {withCredentials: true }
            )
            .then( (res) => {
                // console.log(res.data); 
                userNameSetter(""); 
                emailSetter("");
                passwordSetter("");
                passwordConfirmSetter("");
                errorListSetter([]); 
                confirmRegSetter("Thank you for registering.  Please log in and let's party."); 
            })  
            .catch( (err) => {
                // console.log(err.response); 
                errorListSetter(err.response.data.errorList); 
                // console.log("errorsList: ", errorsList)
            })
    }; 

    return (
        <Container>
            <Row>
                <Card style = {{width: '50rem', padding: '1rem', border: "0.1rem solid grey",  marginBottom: "0.5rem"}} > 
                <h2>Register</h2>
                {confirmReg ? <h4 style={{color: "green" }}>{confirmReg}</h4>: null}
                <Form onSubmit={handleSubmit}>
                    
                    <Form.Group className="mb-3 bg-white" controlId="FormGroup_011">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control
                            style = {{width: '20rem', height: "2rem"}}
                            type = "textarea"
                            value={userName}
                            onChange ={(e) => userNameSetter(e.target.value)}
                            // onChange ={handleChange}
                            name="userName"
                        /> 
                        {
                        errorList.userName ? (
                        <span className="error-text">{errorList.userName.message}</span>
                        ) : null
                        }
                    </Form.Group>
                    
                    <Form.Group className="mb-3 bg-white" controlId="FormGroup_012">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            style = {{width: '20rem', height: "2rem"}}
                            type = "textarea"
                            value={email}
                            onChange ={(e) => emailSetter(e.target.value)}
                            // onChange ={handleChange}
                            name="email"
                        /> 
                        {
                        errorList.email ? (
                        <span className="error-text">{errorList.email.message}</span>
                        ) : null
                        }
                    </Form.Group>

                    <Form.Group className="mb-3 bg-white" controlId="FormGroup_013">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                            style = {{width: '20rem', height: "2rem"}}
                            type = "textarea"
                            value={password}
                            onChange ={(e) => passwordSetter(e.target.value)}
                            // onChange ={handleChange}
                            name="password"
                        /> 
                        {
                        errorList.password ? (
                        <span className="error-text">{errorList.password.message}</span>
                        ) : null
                        }
                    </Form.Group>
                    
                    <Form.Group className="mb-3 bg-white" controlId="FormGroup_014">
                        <Form.Label>Confirm Password:</Form.Label>
                        <Form.Control
                            style = {{width: '20rem', height: "2rem"}}
                            type = "textarea"
                            value={passwordConfirm}
                            onChange ={(e) => passwordConfirmSetter(e.target.value)}
                            // onChange ={handleChange}
                            name="passwordConfirm"
                        /> 
                        {
                        errorList.passwordConfirm ? (
                        <span className="error-text">{errorList.passwordConfirm.message}</span>
                        ) : null
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="ToDo03">
                        <Form.Control style = {{width: "5rem"}} className="btn btn-primary" type = "submit" value="Register"/>
                    </Form.Group>

                </Form>
            </Card>
            </Row>
        </Container> 
    )

}; 

export default RegisterCmp; 