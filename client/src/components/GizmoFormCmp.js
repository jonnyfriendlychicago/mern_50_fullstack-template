// ! findReplace all "Gizmo" with "YourNewGizmoityName" or whatever your new thing is 
// ! THEN do similar find replace for "gizmo" Make sure lower case
import React, {useState} from 'react';
import axios from 'axios'; 
import {Container, Row, Card, Form} from 'react-bootstrap'; 

const GizmoFormCmp = (props) => {

    const {gizmoList, gizmoListSetter} = props; 
    const [stringFieldOne, stringFieldOneSetter ] = useState("");
    const [stringFieldTwo, stringFieldTwoSetter] = useState("");
    const [numberField, numberFieldSetter] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); 
        axios
            .post("http://localhost:8000/api/gizmos", {
                stringFieldOne, 
                stringFieldTwo, 
                numberField
            })
            .then(res=> {
                console.log(res); 
                console.log(res.data); 
                gizmoListSetter([...gizmoList, res.data]); 
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Row>
                <Card style = {{width: '50rem', padding: '1rem', border: "0.1rem solid grey",  marginBottom: "0.5rem"}} > 
                    <h2>Enter a New Gizmo</h2>
                    <Form onSubmit = {handleSubmit}>
                        <Form.Group className="mb-3 bg-white" controlId="FormGroup_01">
                            <Form.Label>stringFieldOne:</Form.Label>
                            <Form.Control
                                style = {{width: '300px', height: "25px"}}
                                type = "textarea"
                                // value={toDo}
                                onChange ={(e) => stringFieldOneSetter(e.target.value)}
                            /> 
                        </Form.Group>

                        <Form.Group className="mb-3 bg-white" controlId="FormGroup_02">
                            <Form.Label>stringFieldTwo:</Form.Label>
                            <Form.Control
                                style = {{width: '300px', height: "25px"}}
                                type = "textarea"
                                // value={toDo}
                                onChange ={(e) => stringFieldTwoSetter(e.target.value)}
                            /> 
                        </Form.Group>

                        <Form.Group className="mb-3 bg-white" controlId="FormGroup_03">
                            <Form.Label>numberField:</Form.Label>
                            <Form.Control
                                style = {{width: '300px', height: "25px"}}
                                type = "textarea"
                                // value={toDo}
                                onChange ={(e) => numberFieldSetter(e.target.value)}
                            /> 
                        </Form.Group>

                        {/* below is fine, but not updated yet wed 5/11 */}

                        {/* <Form.Group className="mb-3 bg-white" controlId="FormGroup_02">
                            <Form.Label>Work Area:</Form.Label>
                            <Form.Select 
                                    style = {{width: '300px', height: '35px'}} 
                                    aria-label="Default select example"
                                    onChange={ workAreaHandle }  >
                                    <option selected></option>
                                    <option value="diet">Diet</option>
                                    <option value="fitWell">Fitness/Wellness</option>
                                    <option value="homeMaintenance">Home Maintenance</option>
                                    <option value="work">Work</option>
                                    <option value="kids">Kids</option>
                                    <option value="contEd">Cont'd Ed/Skills</option>
                                    <option value="social">Social</option>
                                    <option value="yourTime">Your Thing</option>
                            </Form.Select>
                        </Form.Group> */}

                        <Form.Group className="mb-3" controlId="ToDo03">
                            <Form.Control style = {{width: "100px"}} className="btn btn-primary" type = "submit" value="Submit it!"/>
                        </Form.Group>
                    </Form> 
                </Card>
            </Row>
        </Container> 

    )

}; 

export default GizmoFormCmp; 