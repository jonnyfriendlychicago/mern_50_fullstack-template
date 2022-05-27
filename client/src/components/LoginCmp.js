import React, {useState} from 'react'; 
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import {Container, Row, Card, Form} from 'react-bootstrap'; 

const LoginCmp = (props) => {
    
    const [email, emailSetter] = useState("");
    const [password, passwordSetter] = useState("");
    const [errorMessage, errorMessageSetter] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {

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
        <Container>
            <Row>
                <Card style = {{width: '50rem', padding: '1rem', border: "0.1rem solid grey",  marginBottom: "0.5rem"}} > 
            <h2>Login</h2>
            <p className="error-text"> {errorMessage ? errorMessage : ""} </p>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 bg-white" controlId="FormGroup_01">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        style = {{width: '20rem', height: "2rem"}}
                        type = "textarea"
                        value={email}
                        onChange ={(e) => emailSetter(e.target.value)}
                        // onChange ={handleChange}
                        name="email"
                    /> 
                    {/* { errorList.stringFieldOne ? 
                        <p style = {{color: "red"}}>{errorList.stringFieldOne.message}</p>
                        : null
                    } */}
                </Form.Group>
 
                {/* <div>
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange = {(e) => emailSetter(e.target.value)}
                    />
                </div> */}

                <Form.Group className="mb-3 bg-white" controlId="FormGroup_01">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        style = {{width: '20rem', height: "2rem"}}
                        type = "textarea"
                        value={password}
                        onChange ={(e) => passwordSetter(e.target.value)}
                        // onChange ={handleChange}
                        name="password"
                    /> 
                    {/* { errorList.stringFieldOne ? 
                        <p style = {{color: "red"}}>{errorList.stringFieldOne.message}</p>
                        : null
                    } */}
                </Form.Group>
                {/* <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange = {(e) => passwordSetter(e.target.value)}
                    />
                </div> */}

                <Form.Group className="mb-3" controlId="ToDo03">
                            <Form.Control style = {{width: "5rem"}} className="btn btn-primary" type = "submit" value="Login"/>
                </Form.Group>

                {/* <div className="center"> 
                    <button>Login!</button>
                </div> */}

            </Form>
            </Card>
            </Row>
        </Container> 
    )
}; 

export default LoginCmp; 