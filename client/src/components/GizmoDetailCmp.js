// ! findReplace all "Gizmo" with "YourNewEntityName" or whatever your new thing is 
// ! THEN do similar find replace for "gizmo" Make sure lower case
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";// added
import {Container, Row, Card, Button} from 'react-bootstrap'; 

const GizmoDetailCmp = (props) => {

    const [gizmo, gizmoSetter] = useState({})
    const {id} = useParams(); 

    const navigate = useNavigate(); // added

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/gizmos/" + id)
            .then( res => {
                console.log(res.data);
                gizmoSetter(res.data);
            })
            .catch( err => console.log(err) )
    }, [])

    const handleDelete = (id) => {
        axios
            .delete('http://localhost:8000/api/gizmos/' + id)
            .then(res => {
                navigate("/"); 
            })
            .catch(err => console.log(err))
    }

    return (
        <Container> 
            <Row>
                <Card style = {{width: '50rem', padding: '1rem', border: "0.1rem solid grey",  marginBottom: "0.5rem"}} > 
                    <p>stringFieldOne: {gizmo.stringFieldOne}</p>
                    <p>stringFieldTwo: {gizmo.stringFieldTwo}</p>
                    <p>numberField: {gizmo.numberField}</p>
                    <p> Additional fields to be added here.</p>
                    <Button onClick={(e)=>{handleDelete(gizmo._id)}}>Delete</Button> 
                    {/* added line above */}
                </Card>
            </Row>
        </Container> 
    )
}
export default GizmoDetailCmp;